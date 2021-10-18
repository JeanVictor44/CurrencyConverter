import React,{ useState, useEffect, Dispatch, SetStateAction} from 'react'
import { SelectList, ContainerList, OptionList} from './style'
import downIcon from '../../assets/downIcon.png'
import { Container } from './style'

interface CurrencyListProps {
    valueSelected:string,
    options:string[],
    setCurrencyCode:Dispatch<SetStateAction<string>>
}

const CurrencyList:React.FC<CurrencyListProps> = ({valueSelected, options, setCurrencyCode}) => {
    const [selected, setSelected] = useState(valueSelected)
    const [isListVisible, setIsListVisible] = useState(false)
    const [search, setSearch] = useState('')

    const filterSearch = () => { 
        const searchLower = search.toLowerCase()
        return options.filter((option) => option.toLowerCase().includes(searchLower))
    }

    useEffect(() => {
        setSelected(valueSelected)
    },[valueSelected])

    return (
        <Container>
            <SelectList ><img src={`https://www.geonames.org/flags/x/${selected.slice(0,2).toLowerCase()}.gif`} loading="lazy" alt="bandeira" /> {selected} <img src={downIcon} onClick={() => setIsListVisible(!isListVisible) }/> </SelectList>
            
            <input 
                type='text' 
                placeholder='Type something...' 
                onChange={
                    (e) => {
                        setSearch(e.target.value)
                    }} 
                onFocus={() => setIsListVisible(true)} />
                
            <ContainerList isListVisible={isListVisible} >
                {
                    filterSearch().map((option, id) => (
                        <OptionList 
                            key={id} 
                            onClick={(e) => {
                                setSelected(option.slice(0,3))
                                setCurrencyCode(option.slice(0,3))
                            }}><img src={`https://www.geonames.org/flags/x/${option.slice(0,2).toLowerCase()}.gif`} alt="bandeira" /> {option.length >= 18 ? `${option.slice(0,15)}...` : option   } </OptionList>
                    ))
                }     
            </ContainerList>
        </Container>  
    )
}
export default CurrencyList