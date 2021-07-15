import React from 'react';
import Expansion from "./Expansion";
import useFetchAllExpansions from "../hooks/useFetchAllExpansions";
import styled, {keyframes} from "styled-components"

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
            animation: 
        }
    `
    const LoadingAnimation = keyframes`
        0% {
            background-color: ${props => props.theme.primeColor};
        }
        50% {
            background-color: ${props => props.theme.primeColor};
        }
        0% {
            background-color: ${props => props.theme.primeColor};
        }
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
                {data.map((expansion, index) => <Expansion 
                                expansion={expansion} 
                                sequence={index}
                                key={index} />
                )}
            </StyledList> : <StyledLoader>
                <div></div>
                <div></div>
                <div></div>
            </StyledLoader>}
        </StyledMain>         
    )
}
