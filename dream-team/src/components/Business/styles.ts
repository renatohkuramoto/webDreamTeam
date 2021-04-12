import styled from 'styled-components';

import background from '../../assets/business.jpg';
import retangle from '../../assets/retangle.png';
import retangle2 from '../../assets/retangle2.png';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${background});
    background-attachment: scroll;
	background-size: cover;
    background-repeat: no-repeat;

    h3 {
        display: block;
        color: white;
        font-size: 3vw;
        text-align: center;
        padding: 5%;
    }

    @media(max-width: 770px) {
        h3 {
            font-size: 5vw;
        }
    }
`;

export const ContainerBox = styled.div`
    display: flex;
    justify-content: space-around;

    @media (max-width: 770px) {
        display: block;
    }
`;

export const Retangle = styled.div`
    background-image: url(${retangle});
    background-size: contain;
    background-repeat: no-repeat;
    width: 25vw;
    height: 40vw;

    @media (max-width: 770px) {
        background-image: url(${retangle2});
        width: 50%;
        height: 20%;
    }

`;