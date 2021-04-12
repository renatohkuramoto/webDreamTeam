import React from 'react';

import { Container, HomeText, WhatsAppImage } from './styles'
import whatsapp from '../../assets/whatsapp.png';

const Content: React.FC = () => {
    return (
        <Container>
            <HomeText>
                <h3>Nós transformamos suas atividades em aplicações</h3>
            </HomeText>
            <WhatsAppImage>
                <img src={whatsapp} alt="whatsapp"></img>
            </WhatsAppImage>
        </Container>
    );
}

export default Content;