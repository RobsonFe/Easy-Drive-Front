
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Car, Shield, StarIcon } from "lucide-react"
import Layout from "@/components/shared/layout"

const Greetings = () => {
  return (
    <Layout title="Easy Drive">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Car className="w-10 h-10 text-primary" />
              Bem-Vindo à Easy Drive
              <Badge variant="secondary" className="ml-auto">Novo</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              Nosso sistema oferece uma plataforma intuitiva e fácil de usar para alugar veículos de forma rápida e segura. Com uma ampla variedade de carros disponíveis, garantimos que você encontrará o veículo perfeito para suas necessidades.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Shield className="w-10 h-10 text-green-500" />
              Por Que Escolher a Easy Drive?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-2">
                <StarIcon className="w-5 h-5 text-yellow-500" />
                Veículos bem mantidos e inspecionados
              </li>
              <li className="flex items-center gap-2">
                <StarIcon className="w-5 h-5 text-yellow-500" />
                Processo de reserva simples e rápido
              </li>
              <li className="flex items-center gap-2">
                <StarIcon className="w-5 h-5 text-yellow-500" />
                Opções flexíveis de pagamento
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </Layout>
  )
}

export default Greetings