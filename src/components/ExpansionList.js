import React from 'react';
import Expansion from "./Expansion";
import useFetchAllExpansions from "../hooks/useFetchAllExpansions";
import styled, { keyframes } from "styled-components"
import {v4 as uuid} from "uuid";

export default function ExpansionList() {
    const data = useFetchAllExpansions();
    const StyledMain = styled.main`
        padding: 100px 1rem; 
        width: 100%;
        display: grid;
        grid-template-columns: 1fr;
        gap: 1rem;
        text-align: center;
        h1 {
            font-size: 3rem;
            font-weight: 900;
        }
    `
    const LoadingAnimation = keyframes`
        0% {opacity: 0}
        50% {opacity: 1}
        100% {opacity: 0}
    `
    const StyledLoader = styled.div`
        width: min-content;
        margin: 1rem auto;
        display: flex;
        align-items: center;
        background-color: ${props => props.theme.secondaryColor};
        div {
            width: 10px;
            height: 10px;
            border-radius: 100%;
            background-color: ${props => props.theme.primeColor};
            margin: 1rem;
            padding: 1rem;
            animation: ${LoadingAnimation} 2s -600ms linear infinite;
        }
        div:nth-child(2) {animation-delay: -300ms;}
        div:nth-child(3) {animation-delay: 0ms;}
    `
    const StyledList = styled.ul`
        display: grid;
        grid-template-columns: 1fr;
        gap: 1rem;
        width: 100%;
    `
    return (
        <StyledMain>
            <h1>Hearthstone Cards</h1>
            {data ? <StyledList>
                {data.map((expansion, index) => 
                <Expansion 
                    expansion={expansion} 
                    sequence={index}
                    key={uuid()} />
                )}
            </StyledList> : <StyledLoader>
                <div></div>
                <div></div>
                <div></div>
            </StyledLoader>}
        </StyledMain>         
    )
}
