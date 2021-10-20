import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin:0;
        padding:0;
        font-family:'Roboto';
    }
    body {
        background-color:${({theme}) => theme.colors.background};
        overflow:hidden;
    }
    #root > div > h1{
        text-align:center;
        padding-top:20px;
        color:${({theme}) => theme.colors.text.h1 };
        & + h4 {
            text-align:center;
            color:${({theme}) => theme.colors.text.h4};
        }
    }
    
`