import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import VehicleNotification from "@/components/notifications/vehicle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Easy Drive",
  description: "Aluguel de veículos simples, seguro e conveniente para cada jornada.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 5000, // duração padrão em ms
            style: {
              background: "#1f2937", // gray-800
              color: "#fff",
              borderRadius: "0.75rem", // rounded-xl
              padding: "1rem",
              fontSize: "0.875rem", // text-sm
            },
            success: {
              iconTheme: {
                primary: "#4ade80", // green-400
                secondary: "#1f2937",
              },
            },
            error: {
              iconTheme: {
                primary: "#f87171", // red-400
                secondary: "#1f2937",
              },
            },
          }}
        />
        <VehicleNotification />
        {children}
      </body>
    </html>
  );
}