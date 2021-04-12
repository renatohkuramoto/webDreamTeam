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
        height: 60vh;
    }
`;

export const HomeText = styled.div`
    display: flex;
    justify-content: center;
    h3 {
        margin-top: 35%;
        color: white;
        font-size: 3.5vw;
    }

    @media(max-width: 770px) {
        > h3 {
            padding: 10px;
            text-align: center;
            font-size: 5vw;
            word-wrap: break-word;
        }
    }
`;

export const WhatsAppImage = styled.div`
    img {
        position: fixed;
        min-width: 5%;
        width: 5%;
        bottom: 1vw;
        right: 1vw;
    }

    @media(max-width: 770px) {
        > img {
            min-width: 10%;
        }
    }
`;
