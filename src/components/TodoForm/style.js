import styled from "styled-components";

export const Container = styled.div`
    padding-bottom: 1.5rem;

    h2 {
        margin-bottom: 5px;

        @media screen and (max-width: 520px){
            text-align: center
        }
    }

    input, select {
        padding: 5px 0 5px 15px;
        margin-bottom: 10px;
        border: 1px solid #DDD;
        border-radius: 3px;
        width: 100%;
        font-weight: 600;
        color: #333974;
    }

    option {
        font-weight: 600;
        color: #333974;
    }

    button {
        align-items: center;
        appearance: none;
        background-color: #EEF2FF;
        border-radius: 8px;
        border-width: 2px;
        border-color: #536DFE;
        box-shadow: rgba(83, 109, 254, 0.2) 0 2px 4px, rgba(83, 109, 254, 0.15) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
        color: #536DFE;
        cursor: pointer;
        display: inline-flex;
        height: 50px;
        justify-content: center;
        line-height: 1;
        list-style: none;
        overflow: hidden;
        padding: 0 24px;
        position: relative;
        text-align: center;
        text-decoration: none;
        transition: box-shadow 0.15s, transform 0.15s;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        white-space: nowrap;
        will-change: box-shadow, transform;
        font-size: 20px;

        &:focus {
            outline: none;
            box-shadow: #D6D6E7 0 0 0 1.5px inset, rgba(83, 109, 254, 0.4) 0 2px 4px, 
            rgba(83, 109, 254, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
        }

        &:hover {
            box-shadow: rgba(83, 109, 254, 0.3) 0 4px 8px, rgba(83, 109, 254, 0.2) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
            transform: translateY(-2px);
        }

        &:active {
            box-shadow: #D6D6E7 0 3px 7px inset;
            transform: translateY(2px);
        }

        @media screen and (max-width: 520px){
            width: 100%;
        }
    }
`