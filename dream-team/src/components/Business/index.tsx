import React from 'react';

import { Container, Retangle, ContainerBox } from './styles';

const Business: React.FC = () => {
    return (
        <>
        <Container>
            <h3>Conheça um pouco sobre nós</h3>
            <ContainerBox>
                <Retangle></Retangle>
                <Retangle></Retangle>
                <Retangle></Retangle>
            </ContainerBox>
        </Container>
        </>
    );
}

export default Business;