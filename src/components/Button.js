import React from 'react'
import styled from 'styled-components';

export default function Button(props) {
    const { text, handleClick } = props;
    const StyledButton = styled.button`
        ${({ theme }) => theme.hoverEffect(theme.secondColor, theme.primeColor)};
        padding: .5rem 1rem;
        border: solid 1px ${props => props.theme.primeColor};
        width: min-content;
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
