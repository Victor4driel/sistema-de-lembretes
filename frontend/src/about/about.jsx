import React from "react";
import PageHeader from "../common/template/pageHeader";

export default props => {
    return (
        <div>
            <PageHeader name='Sobre' small='Nós' />
            <h2>Missão e Visão</h2>
            <p>Nossa missão é proporcionar a você uma experiência de gerenciamento de lembretes sem complicações. Acreditamos que uma vida organizada é uma vida mais tranquila e produtiva.
            </p>
            <p>Estamos constantemente aprimorando nosso serviço para atender às suas necessidades. Seja você um estudante ocupado, um profissional atarefado ou alguém que simplesmente quer manter sua vida organizada, estamos aqui para ajudar.</p>

            <h2>Entre em Contato</h2>
            <p>Se você tiver alguma dúvida, sugestão ou feedback, não hesite em entrar em contato conosco. Adoraríamos ouvir de você e estamos aqui para auxiliá-lo no que for preciso.
            </p>
            <p>
                Obrigado por escolher nosso site de cadastro de lembretes. Esperamos que ele se torne uma ferramenta valiosa em sua vida diária!
            </p>
        </div>
    )
}