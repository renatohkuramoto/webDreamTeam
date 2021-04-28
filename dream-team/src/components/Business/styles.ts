import styled from 'styled-components';

import background from '../../assets/business.jpg';
import retangle from '../../assets/retangle.png';
import retangle2 from '../../assets/retangle4.png';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${background});
	background-size: cover;
    background-repeat: no-repeat;

    h3 {
        margin-bottom: 10vh;
        display: block;
        color: white;
        font-size: 4rem;
        text-align: center;
        padding-top: 15vh;
    }

    @media(max-width: 1440px) {
        height: 130vh;
        h3 {
            font-size: 3rem;
            padding-top: 25vh;
            padding-bottom: 5vh;
        }
    }

    @media(max-width: 770px) {
        height: 110vh;
        h3 {
            font-size: 1.8rem;
            padding: 0;
            padding-top: 15vh;
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
    width: 30vw;
    height: 35vw;
    background-image: url(${retangle});
    background-size: 30vw 35vh;
    background-repeat: no-repeat;
    padding-top: 10px;

    h4 {
        text-align: center;
        padding-top: 10px;
        color: white;
        font-size: 2.5rem;
        font-weight: bold;
    }

    p {
        margin: 0 auto;
        padding: 10px;
        width: 25vw;
        color: white;
        text-align: center;
        font-size: 2rem;
    }

    @media (max-width: 1440px) {
        h4 {
        text-align: center;
        padding-top: 10px;
        color: white;
        font-size: 1.8rem;
        font-weight: bold;
        }

        p {
            margin: 0 auto;
            padding: 10px;
            width: 25vw;
            color: white;
            text-align: center;
            font-size: 1.5rem;
        }
    }

    @media (max-width: 1366px) {
        h4 {
            padding-top: 10px;
            font-size: 1.5rem;
        }

        p {
            margin: 0px auto;
            font-size: 1.3rem;
            width: 25vw;
        }
    }

    @media (max-width: 1100px) {
        h4 {
            padding-top: 10px;
            font-size: 1.5rem;
        }

        p {
            margin: 0px auto;
            padding: 5px;
            font-size: 1.3rem;
            width: 26vw;
        }
    }

    @media (max-width: 1000px) {
        h4 {
            padding-top: 10px;
            font-size: 1.5rem;
        }

        p {
            margin: 0px auto;
            padding: 0px;
            font-size: 1.1rem;
            width: 26vw;
        }
    }

    @media (max-width: 770px) {
        display: block;
        width: 90vw;
        height: 25vh;
        background-image: url(${retangle2});
        background-size: 90vw 170px;
        background-repeat: no-repeat;
        margin: 0 auto;

        h4 {
            padding-top: 10px;
            font-size: 1.3rem;
        }

        p {
            margin: 0px auto;
            padding-top: 5px;
            font-size: 1.05rem;
            width: 80vw;
        }
    }

`;