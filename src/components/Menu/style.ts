import styled from "styled-components";
import {KeyboardArrowDown} from '@styled-icons/material-rounded/KeyboardArrowDown'

export const Content = styled.div`
    width: 100%;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    height: 3.5rem;
    background: #FCFCFC;
    box-shadow: 0px 7px 15px rgba(0, 0, 0, 0.25);
`;

export const KeyDown = styled(KeyboardArrowDown)`
    width: 2rem;
    color: #F2C089;
`;

export const ContentBorder = styled.div`
    width: 100%;
    background: #F2C089;
    height: 0.3rem;
`;

export const ContentLogo = styled.div`
    width: 7rem;
    padding-left: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 6rem;
    }
`;

export const ContentItens = styled.div`
    display: flex;
    flex-direction: row;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
`;

export const Itens = styled.div`
    width: 11rem;
    height: 3.2rem;
    display: flex;
    justify-content: center;
    align-items: center;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;

    font-size: 0.8rem;
`;