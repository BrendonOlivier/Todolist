import styled from "styled-components";

export const Container = styled.div`
    width: 800px;
    max-width: 85vw;
    margin: 10px auto;
    background-color: #efefef;
    padding: 20px 30px;
    border-radius: 10px;
    box-shadow: 1vw 1vw 1vw #000, 0 0 3vw #E6E6FA, 0 0 3vw #E6E6FA, 0 0 3vw #E6E6FA;

    h1 {
        font-size: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 15px;
    }

    @media screen and (max-width: 520px){
        h1 {
        font-size: 25px;
        margin-bottom: 10px;
        }
    }
`

export const TodoList = styled.div`
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 2px solid #555;

    @media screen and (max-width: 520px){
        border-bottom: 1px solid #555;
    }
`

export const EmptyMessage = styled.div`
    text-align: center;
    font-weight: bold;
    color: red; 
`