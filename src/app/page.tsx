
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Car, Shield, SmartphoneIcon, LeafIcon, UsersIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/shared/layout";

export default function Home() {
  const features = [
    {
      icon: Car,
      title: "Ampla Variedade de Veículos",
      description: "Escolha entre uma extensa frota de carros e motos, todos bem mantidos e prontos para uso.",
      color: "text-blue-500"
    },
    {
      icon: Shield,
      title: "Segurança em Primeiro Lugar",
      description: "Todos os veículos passam por rigorosas inspeções de segurança antes de serem disponibilizados.",
      color: "text-green-500"
    },
    {
      icon: SmartphoneIcon,
      title: "Conveniência Digital",
      description: "Gerencie suas reservas facilmente através do nosso aplicativo móvel, a qualquer hora e em qualquer lugar.",
      color: "text-purple-500"
    },
    {
      icon: LeafIcon,
      title: "Compromisso Sustentável",
      description: "Oferecemos veículos elétricos e híbridos para uma escolha mais ecológica e responsável.",
      color: "text-emerald-500"
    }
  ];

  return (
    <Layout title="Easy Drive">
      <div className="space-y-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            Liberdade e Mobilidade sob Demanda
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            EasyDrive: Seu parceiro de mobilidade, oferecendo uma experiência de aluguel de veículos simples, segura e conveniente para cada jornada.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-shadow duration-300 group"
            >
              <CardHeader>
                <div className="flex items-center gap-4">
                  <feature.icon 
                    className={`w-10 h-10 ${feature.color} group-hover:scale-110 transition-transform cursor-pointer`} 
                  />
                  <CardTitle>{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed Description */}
        <Card>
          <CardContent className="p-8 space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Na EasyDrive, nossa missão vai além do simples aluguel de veículos. Estamos comprometidos em oferecer uma experiência de mobilidade que seja:
            </p>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-secondary/10 p-4 rounded-lg">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <UsersIcon className="w-5 h-5 text-primary" />
                  Centrada no Cliente
                </h3>
                <p className="text-sm text-muted-foreground">
                  Sua satisfação é nossa prioridade. Processos simples, suporte dedicado.
                </p>
              </div>
              
              <div className="bg-secondary/10 p-4 rounded-lg">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-500" />
                  Totalmente Segura
                </h3>
                <p className="text-sm text-muted-foreground">
                  Inspeções rigorosas e manutenção preventiva em todos os veículos.
                </p>
              </div>
              
              <div className="bg-secondary/10 p-4 rounded-lg">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <LeafIcon className="w-5 h-5 text-emerald-500" />
                  Sustentável
                </h3>
                <p className="text-sm text-muted-foreground">
                  Contribua para um futuro mais verde com nossa frota de veículos ecológicos.
                </p>
              </div>
            </div>

            <div className="text-center mt-6">
              <Badge variant="outline" className="text-sm">
                Junte-se a milhares de clientes satisfeitos!
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}