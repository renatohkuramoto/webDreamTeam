import React from 'react';

import { Container1, Container2,
         Info, ContainerBox, Box1,
         Box2, Box3, Sobre} from './styles';

const Vision: React.FC = () => {
    return (
        <>
        <Container1>
            <Info>
                <h3>Venha conhecer a WeAppMake</h3>
                <ContainerBox>
                    <Box1><div><span>Sobre nós</span></div></Box1>
                    <Box2><div><span>O que fazemos?</span></div></Box2>
                    <Box3><div><span>Nossos Projetos</span></div></Box3>
                </ContainerBox>
            </Info>
        </Container1>
        <Container2>
            <Sobre>
                <h3>Nós criamos soluções para facilitar o seu negócio</h3>
                <p>A constante mudança do mercado e da tecnologia nos obriga sempre a evoluir.
                    Buscar novos métodos e tecnologias para garantir o melhor resultado para nossos 
                    clientes e parceiros. </p>
                <p>Sabemos que a praticidade, desempenho e confiabilidade são caracteristicas essenciais para
                     qualquer aplicação, e sempre buscamos aperfeiçoar ao máximo estas caracteristicas.
                </p>
            </Sobre>
        </Container2>
        </>
    );
}

export default Vision;