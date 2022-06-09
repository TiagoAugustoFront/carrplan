import React from 'react';
import styled from 'styled-components';

export const ContentLogin = styled.div`
    min-width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
`;

export const Container = styled.div`
    min-height: calc(100vh - 3.5rem);
    background: #F2F2F2;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContentForm = styled.form`
    width: 80%;
    background-color: #fcfcfc;
    max-width: 28rem;
    border-radius:10px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    padding: 2.5rem 1.5rem 2rem;
    position: relative;
`;

export const ContentBorder = styled.div`
    width: 100%;
    background: #F2C089;
    height: 0.4rem;
    border-radius: 15px 15px 0 0;

    position: absolute;
    top:0;
`;

export const ContentInput = styled.div`
    width: 100%;
    max-width: 15rem;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
`;

export const LabelInput = styled.label`
    font-size: 1.3rem;
    color: #4F4F4F;
    font-weight: 500;
    margin-bottom: 0.4rem;
`;


export const Input = styled.input`
    border: none;
    height: 2rem;
    width: 100%;
    background-color: #F2F2F2;
    outline: none;
`;

export const Button = styled.button`
    align-self: end;
    background: #27AE60;
    border-radius: 4px;
    width: 8rem;
    border: none;
    color: #ffffff;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.3rem 1rem;
`;