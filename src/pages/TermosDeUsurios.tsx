import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

export const TermosDeUsurios = (): JSX.Element => {
  const termsContent = `A Savior é uma plataforma criada para incentivar a consciência e a ação ambiental por meio de atividades sustentáveis, incentivando cada pessoa a assumir sua própria missão em prol do planeta. Nosso objetivo é criar um espaço onde usuários aprendam, compartilhem experiências e adotem práticas ecológicas no dia a dia, acreditando que mudanças significativas são possíveis quando o mundo se une para proteger o meio ambiente. Para alcançar esse objetivo, a Savior proporciona desafios ambientais práticos e um chat para troca de ideias, promovendo o engajamento e a colaboração em prol da sustentabilidade. Com esse compromisso, apresentamos os Termos de Uso, que regulamentam o acesso e a utilização da plataforma. Leia atentamente as disposições a seguir. SUMÁRIO 1. Aceitação dos termos e condições de uso; 2. Contas e registro; 3. Pagamentos e taxas; 4. Do serviço ofertado pela plataforma; 5. Responsabilidade do desenvolvedor; 6. Responsabilidade do usuário; 7. Direitos de propriedade intelectual e uso de licença; 8. Denúncia de abusos e violação, 9. Limitação de responsabilidades; 10. Modificações do termo de uso; 11. Legislação aplicável e foro; 12. Disposições gerais. 1. ACEITAÇÃO DOS TERMOS E CONDIÇÕES DE USO 1.1. A aceitação dos Termos de Uso é absolutamente indispensável à utilização da plataforma Savior, tanto por pessoas físicas como por pessoas jurídicas. Qualquer pessoa física ou jurídica, doravante nominada USUÁRIO, que pretenda utilizar ou solicitar qualquer Serviço pago da plataforma deverá aceitar os termos abaixo. Se você não estiver de pleno acordo com qualquer um dos termos ou condições estabelecidas nos Termos de Uso, o seu usufruto da plataforma é vedado. 1.2 Os Termos e Condições de Uso regulamentam a utilização do serviço, que pertencem à LVC APLICATIVOS E SITES LTDA, com nome fantasia PANTERA NEGRA, localizada na Estrada Manoel da Nóbrega, s/n, Km 37, Zona Rural, CEP: 11870-000, Miracatu/SP, devidamente inscrito no CNPJ sob o nº 62.145.058/0001-80, doravante denominado DESENVOLVEDOR. 1.3 A Ferramenta está disponível para aqueles com capacidade civil para utilizá-la. Caso o USUÁRIO não possua capacidade para acessar a plataforma, quando for mencionado USUÁRIO neste Termo será então entendido também que as declarações tenham sido prestadas por seu responsável legal. 1.4 Ao DESENVOLVEDOR se reserva o direito de modificar a qualquer momento a apresentação, configuração e disponibilização do serviço. O mesmo se aplica a estes Termos e Condições de Uso, estabelecidos como condição fundamental para a utilização do serviço. 1.5 Os Termos de Uso permanecerão em vigor enquanto o USUÁRIO utilizar a plataforma e o serviço. Ao DESENVOLVEDOR reserva-se o direito de alterar os Termos de Uso a qualquer momento. Quaisquer alterações entrarão em vigor após a publicação da versão atualizada dos Termos de Uso na plataforma, sendo amplamente divulgado para seus USUÁRIOS, conforme previsto em lei. Ao continuar acessando após ser fornecido um aviso de modificação, você concorda em sujeitar-se aos Termos modificados. Caso você não concorde com as alterações, deverá cessar todo e qualquer uso da plataforma e solicitar no aplicativo Savior o cancelamento da sua inscrição da utilização do serviço, caso tenha feito a inscrição. Recomenda-se que você se atente aos comunicados em redes sociais ou na própria plataforma a respeito das atualizações dos Serviços, para que esteja ciente de quaisquer modificações.`;

  return (
    <div className="bg-[#fcf8f2] w-full min-h-screen flex items-center justify-center p-8">
      <Card className="w-full max-w-[1200px] bg-[#d9d9d9] rounded-[32px] overflow-hidden">
        <CardContent className="p-0">
          <div className="flex flex-col h-[900px]">
            <header className="pt-14 pb-8 px-8">
              <h1 className="[font-family:'Poppins',Helvetica] font-bold text-black text-5xl text-center tracking-[-0.30px] leading-[20.5px] mb-8">
                Termos de uso
              </h1>
              <div className="flex justify-center">
                <img
                  className="w-[215px] h-[231px] object-cover"
                  alt="Logo SAVIOR"
                  src="/figmaAssets/logo-savior-horizontal-3.png"
                />
              </div>
            </header>

            <div className="flex-1 px-8 relative">
              <ScrollArea className="h-full pr-4">
                <div className="[font-family:'Poppins',Helvetica] font-bold text-black text-[32px] text-center tracking-[-0.30px] leading-[50px]">
                  {termsContent}
                </div>
              </ScrollArea>
            </div>

            <footer className="py-8 px-8 bg-[#d9d9d9]">
              <div className="flex justify-center">
                <Button className="w-[312px] h-auto bg-[#e8f5e9] rounded-[40px] hover:bg-[#d4ead6] py-2">
                  <span className="[font-family:'Poppins',Helvetica] font-bold text-[#153226] text-base tracking-[0] leading-[normal]">
                    Continuar
                  </span>
                </Button>
              </div>
            </footer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
