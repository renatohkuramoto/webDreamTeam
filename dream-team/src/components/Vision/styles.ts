import styled from 'styled-components';

import conheca from '../../assets/conheca.jpg';
import fazemos from '../../assets/fazemos.jpg';
import projetos from '../../assets/projetos.jpg';

export const Container1 = styled.div`
    display: flex;
    justify-content: center;
    background-color: ${props => props.theme.colors.primary};
    height: 100vh;

    @media(max-width: 770px) {
        height: 105vh;
    }

    @media(max-width: 640px) {
        height: 110vh;
    }
`;

export const Container2 = styled.div`
    display: flex;
    justify-content: center;
`;

export const Info = styled.div`
    margin-top: 150px;
    display: inline-block;
    h3 {
        text-align: center;
        margin-bottom: 75px;
        font-size: 3.5rem;
        word-wrap: break-word;
        color: white;
     }

     span {
         color: white;
         font-size: 2.5rem;
         font-family: 'Zilla Slab Highlight';
     }

     @media (max-width: 770px) {
        margin-top: 75px;
        > h3 {
            margin-bottom: 50px;
            font-size: 2rem;
            word-wrap: break-word;
        }
     }
`;

export const ContainerBox = styled.div`
    display: flex;
    justify-content: center;

    @media (max-width: 800px) {
        display: block;
        justify-content: center;
    }
`;

export const Box1 = styled.div`
    div {
        cursor: pointer;
        width: 25vw;
        height: 30vh;
        border-radius: 5%;
        margin: 30px;
        background-image: url(${conheca});
        background-size: cover;
        background-repeat: no-repeat;
        display: flex;
        justify-content: center;
        align-items: center;
        transition-timing-function: ease;
        transition: width 1s, height 1s;
    }

    img {
        width: 100%;
        height: 100%;
        border-radius: 5%;
    }

    span {
        text-align: center;
    }

    div:hover {
        width: 30vw;
        height: 35vh;
    }

    @media (max-width: 800px) {
        > div {
            width: 70vw;
            height: 20vh;
            margin: 10% auto;
        }

        > div, span{
            font-size: 2rem;
            word-wrap: break-word;
        }

        div:hover {
            width: 80vw;
            height: 25vh;
        }
    }
`;

export const Box2 = styled.div`
    div {
        cursor: pointer;
        width: 25vw;
        height: 30vh;
        border-radius: 5%;
        margin: 30px;
        background-image: url(${fazemos});
        background-attachment: scroll;
        background-size: cover;
        background-repeat: no-repeat;
        display: flex;
        justify-content: center;
        align-items: center;
        transition-timing-function: ease;
        transition: width 1s, height 1s;
    }

    img {
        width: 100%;
        height: 100%;
        border-radius: 5%;
    }

    span {
        text-align: center;
    }

    div:hover {
        width: 30vw;
        height: 35vh;
    }

    @media (max-width: 770px) {
        > div {
            width: 70vw;
            height: 20vh;
            margin: 10% auto;
        }

        > div, span{
            font-size: 2rem;
            word-wrap: break-word;
        }

        div:hover {
            width: 80vw;
            height: 25vh;
        }
    }
`;

export const Box3 = styled.div`
    div {
        cursor: pointer;
        width: 25vw;
        height: 30vh;
        border-radius: 5%;
        margin: 30px;
        background-image: url(${projetos});
        background-attachment: scroll;
        background-size: cover;
        background-repeat: no-repeat;
        display: flex;
        justify-content: center;
        align-items: center;
        transition-timing-function: ease;
        transition: width 1s, height 1s;
    }

    img {
        width: 100%;
        height: 100%;
        border-radius: 5%;
    }

    span {
        text-align: center;
    }

    div:hover {
        width: 30vw;
        height: 35vh;
    }

    @media (max-width: 770px) {
        > div {
            width: 70vw;
            height: 20vh;
            margin: 10% auto;
        }

        > div, span{
            font-size: 2rem;
            word-wrap: break-word;
        }

        div:hover {
            width: 80vw;
            height: 25vh;
        }
    }
`;

export const Sobre = styled.div`
    display: inline-block;
    margin-bottom: 10%;
    width: 100%;
    h3 {
        margin-top: 10vh;
        color: ${props => props.theme.colors.secondary};
        text-align: center;
        font-size: 3rem;
        padding: 5%;
    }

    p {
        margin-top: 5vh;
        padding-left: 10%;
        padding-right: 10%;
        font-size: 2rem;
        text-align: center;
        font-weight: bold;
    }

    @media(max-width: 770px) {
        > h3 {
            font-size: 2rem;
            word-break: break-word;
        }

        > p {
            font-size: 1.3rem;
        }
    }
`;

export const SolutionImage = styled.div`
    display: block;
    img {
        margin: 0 0;
        padding: 0 0;
        width: 100%;
    }
`;