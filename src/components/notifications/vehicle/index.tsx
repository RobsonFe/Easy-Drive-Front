// components/VehicleNotification.tsx
"use client";

import { useEffect } from "react";
import toast from "react-hot-toast";

type VehicleMessage = {
	vehicle_brand: string;
	vehicle_model: string;
	vehicle_year: number;
	vehicle_quantity: number;
	vehicle_type_vehicle: string;
	vehicle_description: string;
	status: "alugado" | "devolvido";
	timestamp: string;
};

export default function VehicleNotification() {
	useEffect(() => {
		let ws: WebSocket | null = null;
		let retryTimeout: NodeJS.Timeout;

		const connect = () => {
			ws = new WebSocket("ws://localhost:8000/ws/vehicle/");

			ws.onopen = () => {
				console.log("✅ WebSocket conectado.");
			};

			ws.onmessage = (event) => {
				try {
					const data: VehicleMessage = JSON.parse(event.data);

					toast.success(
						`(${data.vehicle_brand} ${data.vehicle_model} - ${data.vehicle_year})
						\nTipo: ${data.vehicle_type_vehicle}
						\nQuantidade: ${data.vehicle_quantity}
						\nStatus: ${data.status === "alugado" ? "Alugado" : "Devolvido"}
						\nDescrição: ${data.vehicle_description}`,
						{
							icon: data.status === "alugado" ? "🚗" : "🔁",
							duration: 5000,
						}
					);
				} catch (error) {
					console.error("Erro ao processar mensagem:", error);
				}
			};

			ws.onclose = () => {
				console.warn("🔌 WebSocket desconectado. Tentando reconectar...");
				retryTimeout = setTimeout(connect, 3000);
			};

			ws.onerror = (err) => {
				console.error("Erro no WebSocket:", err);
				ws?.close();
			};
		};

		connect();

		return () => {
			ws?.close();
			clearTimeout(retryTimeout);
		};
	}, []);

	return null; // não precisa renderizar nada, só escutar
}
