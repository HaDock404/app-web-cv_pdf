import { createGlobalStyle } from "styled-components"

const StyledGlobalStyle = createGlobalStyle`
    html {
        width: 100%;
        max-width: 100%;
        overflow-x: hidden;
        overscroll-behavior: none;
    }
    body {
        margin: 0;
        padding: 0;
        overflow-x: hidden;
    }

    ::selection {
        background-color: black;
        color: white;
    }
`


function GlobalStyle() {
    return <StyledGlobalStyle/>
}

export default GlobalStyle