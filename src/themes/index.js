import { keyframes } from "styled-components"
export const theme = {
    primeColor: "black",
    secondColor: "white",
    spacing: "padding: 1rem;",
    hoverEffect: (color1, color2) => {
        return `
        cursor: pointer;
        transition-duration: 300ms;
        background-color: ${color1};
        color: ${color2};
        &:hover {
            color: ${color1};
            background-color: ${color2};
        }
        &:focus {
            outline: none;
            color: ${color1};
            background-color: ${color2};
        }`
    },
    cardAnimation: keyframes`
        from {opacity: 0}
        to {opacity: 1}
    `,
}