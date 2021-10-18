import styled from 'styled-components'

export const CurrencySelect = styled.select `
`
interface CurrencyOptionProps{
    url:string,
}

export const CurrencyOption = styled.option<CurrencyOptionProps>`
    background-image:url(${props => props.url});
    background-size: cover;
    background-position: center;

`
export const CurrencyContainer = styled.div `
    
    input[type=number] {
        text-align:center;
        background-color:transparent;
        border:none;
        color: ${({theme}) => theme.colors.text.input};
        outline:none;
        display:block;
        margin:20px auto;
        max-width:240px;
        font-size:25px;
        &:disabled {
            color:${({theme}) => theme.colors.text.input };
        }   
    }

`