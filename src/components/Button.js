import React from 'react'
import styled from 'styled-components';

export default function Button(props) {
    const { text, handleClick = null } = props;
    const StyledButton = styled.button`
        ${({ theme }) => theme.hoverEffect(theme.secondColor, theme.primeColor)};
        font-size: inherit;
        padding: .5rem 1rem;
        border: solid 1px ${props => props.theme.primeColor};
        width: 100%;
        min-width: min-content;
        margin: 1rem auto;
    `
    return (
        <StyledButton 
        onClick={e => {
            e.stopPropagation()
            handleClick()}
        }>{ text }</StyledButton>
    )
}
