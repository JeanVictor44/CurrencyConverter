import styled from 'styled-components'

export const Container = styled.div `
    
    input[type=text] {
            max-width:235px;
            border:1px solid #F2F5FA;
            width:100%;
            background-color:#243665;
            color: #F2F5FA;
            outline:none;
            padding:5px;        
            ::placeholder {
                color:#F2F5FA;
            }
    }
`
export const SelectList = styled.div `
    width:100%;
    max-width:235px;
    height:25px;
    display:flex;
    align-items:center;
    border:1px solid #F2F5FA;
    justify-content:space-between;
    padding:7px 5px;
    color:#F2F5FA;
    background-color:#243665;
    img[alt="bandeira"]{
        width:35px;
    }
`
interface ContainerListProps {
    isListVisible:boolean
}
export const ContainerList = styled.div <ContainerListProps>`

    max-width:280px;
    background-color:#2A4BA1;
    display:flex;
    flex-direction:column;
    align-items:center;
    overflow-y: scroll;
    overflow-x:hidden;
    height:250px;
    display:${({isListVisible}) => isListVisible ? 'block' : 'none' };
    
`

export const OptionList = styled.div `
    width:100%;
    color:#FFF;
    height:25px;
    padding:10px;
    img[alt="bandeira"]{
        width:35px;
    }
    &:hover {
        cursor:pointer;
        background-color:#111;
    }
`