import styled from 'styled-components';

import background from '../../assets/background2.jpg';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    background-image: url(${background});
    background-attachment: scroll;
	background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 100vh;

    @media (max-width: 770px) {
        height: 100vh;
    }
`;

export const HomeText = styled.div`
    display: flex;
    justify-content: center;
    h3 {
        margin-top: 35%;
        color: white;
        font-size: 3rem;
    }

    @media(max-width: 770px) {
        > h3 {
            margin-top: 40vh;
            text-align: center;
            font-size: 2rem;
            word-wrap: break-word;
        }
    }
`;

export const WhatsAppImage = styled.div`
    img {
        position: fixed;
        width: 7vw;
        bottom: 1vw;
        right: 1vw;
    }

    @media(max-width: 770px) {
        > img {
            width: 15vw;
        }
    }
`;
