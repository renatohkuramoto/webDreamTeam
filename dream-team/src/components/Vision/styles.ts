import styled from 'styled-components';

import conheca from '../../assets/conheca.jpg';
import fazemos from '../../assets/fazemos.jpg';
import projetos from '../../assets/projetos.jpg';

export const Container1 = styled.div`
    display: flex;
    justify-content: center;
    background-color: ${props => props.theme.colors.primary};
    height: 70vh;

    @media(max-width: 770px) {
        height: 40vh;
    }
`;

export const Container2 = styled.div`
    display: flex;
    justify-content: center;
    background-color: white;
`;

export const Info = styled.div`
    display: inline-block;
    h3 {
        text-align: center;
        margin-top: 5%;
        margin-bottom: 2%;
        font-size: 3vw;
        color: white;
     }

     span {
         color: white;
         font-size: 3vw;
         font-family: 'Zilla Slab Highlight';
     }

     @media (max-width: 770px) {
         > h3 {
            margin-top: 10%;
            margin-bottom: 5%;
            font-size: 5vw;
            word-wrap: break-word;
         }
     }
`;

export const ContainerBox = styled.div`
    display: flex;
    justify-content: center;
`;

export const Box1 = styled.div`
    div {
        cursor: pointer;
        width: 25vw;
        height: 30vh;
        border-radius: 5%;
        margin: 2vw;
        background-image: url(${conheca});
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
            width: 27vw;
            height: 15vh;
            margin: 1vw;
        }

        > div, span{
            font-size: 4vw;
            word-wrap: break-word;
        }

        div:hover {
            width: 32vw;
            height: 20vh;
        }
    }
`;

export const Box2 = styled.div`
    div {
        cursor: pointer;
        width: 25vw;
        height: 30vh;
        border-radius: 5%;
        margin: 2vw;
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
            width: 27vw;
            height: 15vh;
            margin: 1vw;
        }

        > div, span{
            font-size: 4vw;
            word-wrap: break-word;
        }

        div:hover {
            width: 32vw;
            height: 20vh;
        }
    }
`;

export const Box3 = styled.div`
    div {
        cursor: pointer;
        width: 25vw;
        height: 30vh;
        border-radius: 5%;
        margin: 2vw;
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
            width: 27vw;
            height: 15vh;
            margin: 1vw;
        }

        > div, span{
            font-size: 4vw;
            word-wrap: break-word;
        }

        div:hover {
            width: 32vw;
            height: 20vh;
        }
    }
`;

export const Sobre = styled.div`
    display: inline-block;
    margin-bottom: 10%;
    h3 {
        color: ${props => props.theme.colors.secondary};
        text-align: center;
        font-size: 3vw;
        padding: 5%;
    }

    p {
        padding-left: 10%;
        padding-right: 10%;
        font-size: 1.7vw;
        text-align: center;
    }

    @media(max-width: 770px) {
        > h3 {
            font-size: 5vw;
            word-break: break-word;
        }

        > p {
            font-size: 4vw;
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