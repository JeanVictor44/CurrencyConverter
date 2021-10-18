import {  useState, useEffect, useContext } from 'react'
import { Container } from './style'
import CurrencyRow from '../CurrencyRow'
import { RootObject } from '../../types/CurrencyCodes'
import api from '../../services/api'
import blackReplace from '../../assets/blackReplace.png' 
import lightReplace from '../../assets/lightReplace.png' 
import { ThemeContext } from 'styled-components'

const Converter = () => {
    const { title } = useContext(ThemeContext)

    const [currencyOptions, setCurrencyOptions] = useState<RootObject>( {
        supported_codes: [['','']]
    })

    const convertCurrency = async() => {
        const { conversion_result } = (await api.get(`/pair/${firstCurrencyCode}/${secondCurrencyCode}/${firstValueCurrency}`)).data
        setSecondValueCurrency(conversion_result)
    }

    const [firstValueCurrency, setFirstValueCurrency] = useState<number>(0)
    const [secondValueCurrency, setSecondValueCurrency] = useState<number>(0)
    const [firstCurrencyCode, setFirstCurrencyCode] = useState<string>('') 
    const [secondCurrencyCode,setSecondCurrencyCode] = useState<string>('')
    
    useEffect(() => {
        const getCurrencyOptions = async() => {
            const codes = (await api.get(`/codes`)).data 
            setCurrencyOptions(codes)
        }
        getCurrencyOptions()
    
    },[])

    useEffect(() => {
        convertCurrency()
    }, [firstValueCurrency,firstCurrencyCode,secondCurrencyCode])

    if(!currencyOptions.supported_codes[0][0]) {
        return <h1>Carregando...</h1>
    }
    

    return (
        <Container>
            <CurrencyRow 
                currencyOptions={currencyOptions} 
                setValueCurrency={setFirstValueCurrency}  
                setCurrencyCode={setFirstCurrencyCode} 
                currencyCode={firstCurrencyCode} 
                valueCurrency={firstValueCurrency} 
                disabled={false} 
                isFirstCurrency={true}/>
            
            <img 
                src={ title === 'light' ? blackReplace : lightReplace } 
                onClick={() => {
                    const [copyFirstCurrencyCode, copySecondCurrencyCode] = [secondCurrencyCode,firstCurrencyCode]
                    setFirstCurrencyCode(copyFirstCurrencyCode)
                    setSecondCurrencyCode(copySecondCurrencyCode)
            }}/>
            
            <CurrencyRow 
                currencyOptions={currencyOptions} 
                setValueCurrency={setSecondValueCurrency} 
                setCurrencyCode={setSecondCurrencyCode} 
                currencyCode={secondCurrencyCode} 
                valueCurrency={secondValueCurrency} 
                disabled={true}
                isFirstCurrency={false}/>            
        </Container>
    )
}
export default Converter