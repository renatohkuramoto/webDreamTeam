import React from 'react';

import { Container, Socials } from './styles'
import logo from '../../assets/logo.png'
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';
import twitter from '../../assets/twitter.png';
import linkedin from '../../assets/linkedin.png';

const MainHeader: React.FC = () => {
    return (
        <Container>
            <img src={logo} alt="Logo"></img>
            <Socials>
                <img src={facebook} alt="Facebook"></img>
                <img src={twitter} alt="Twitter"></img>
                <img src={instagram} alt="Instagram"></img>
                <img src={linkedin} alt="LinkedIn"></img>
            </Socials>
        </Container>
    );
}

export default MainHeader;