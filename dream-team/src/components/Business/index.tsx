import React from 'react';

import { Container, Retangle, ContainerBox } from './styles';

const Business: React.FC = () => {
    return (
        <>
        <Container>
            <h3>Conheça um pouco sobre nós</h3>
            <ContainerBox>
                <Retangle>
                    <h4>User Interface</h4>
                    <p>O design do produto, aproxima os clientes com o seu negócio e sua marca.
                        Visamos criar aplicações que entregam produtividade, usabilidade e disponibilidade.</p>
                </Retangle>
                <Retangle>
                    <h4>Desenvolvimento</h4>
                    <p>
                        Desenvolvemos sofwares para diversas complexidades, finalidades e custos diversos.
                    </p>
                    <p>
                        Apps, sites e Api's.
                    </p>
                </Retangle>
                <Retangle>
                    <h4>Manutenção e suporte</h4>
                    <p> Para manter os nossos produtos atualizados e confiáveis, contamos com nossa equipe de suporte 
                        e desenvolvimento para atender nossos clientes.
                    </p>
                </Retangle>
            </ContainerBox>
        </Container>
        </>
    );
}

export default Business;