import styled from "styled-components";

export const Container = styled.div`
    border-bottom: 1px solid #555;
    margin-bottom: 20px;
    padding-bottom: 20px;

    h2 {
        font-size: 22px;
        font-weight: 600;
        margin-bottom: 5px;
        color: blue;
    }

    select {
        padding: 5px;
        margin-bottom: 10px;
        border: 1px solid #DDD;
        border-radius: 3px;
        width: 100%;
    }

    option {
        font-weight: 400;
    }

    button {
        background-color: #333974;
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
    }

    @media screen and (max-width: 520px){
        margin-bottom: 10px;
        padding-bottom: 10px;
    }
`

export const FilterOptions = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 3rem;

    h3 {
        font-size: 18px;
        font-weight: 600;
        color: #333974;

        @media screen and (max-width: 520px){
            padding-bottom: 10px;
        }
    }

    div {
        flex: 1 1 0;
    }

    @media screen and (max-width: 520px){
        flex-direction: column;
        gap: 1rem;
    }
`