import styled from "styled-components";

export const Container = styled.div`
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 520px){
        flex-direction: column;
        text-align: center;
    }
`

export const Content = styled.div`
    padding-bottom: 1.5rem;

    @media screen and (max-width: 520px){
        padding-bottom: 1rem;
    }
`

export const Text = styled.p`
    font-size: 20px;
    font-weight: 600;
    margin: 10px 0;
    color: #FF0000;

    @media screen and (max-width: 520px){
        font-size: 17px;
        margin: 0;
    }
`

export const Category = styled.p`
    font-size: 17px;
    color: blue;
    font-weight: bold;
    margin: 10px 0;

    @media screen and (max-width: 520px){
        font-size: 14px;
    }
`

export const ContainerButtons = styled.div`
    button {
        color: #fff;
        margin-right: 10px;
        padding: 5px 10px;
        border: none;
        border-radius: 3px;
        cursor: pointer;
        opacity: .8;
        transition: .3s;

        &:hover {
            opacity: 1;
            transform: scale(1.1);
        }

        @media screen and (max-width: 520px){
            margin-left: 20px;
        }
    }

    .complete {
        background-color: #5cb85c;
    }

    .remove {
        background-color: #d9534f;
    }
`