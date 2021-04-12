import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    position: fixed;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    border-bottom: 1px solid ${props => props.theme.colors.gray};
    background-color: ${props => props.theme.colors.primary};
    width: 100vw;
    height: auto;

    img {
        width: 25vw;
    }

    @media(max-width: 770px) {
        > img {
            width: 50vw;
        }
    }
`;

export const Socials = styled.div`
    justify-content: flex-end;
    margin-right: 10px;
    img {
        width: 4vw;
        padding: 5px;
    }

    @media (max-width: 770px) {
        > img {
            min-width: 7vw;
            padding: 2px;
            margin: 0 0;
        }
    }
`;