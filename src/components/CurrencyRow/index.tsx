import React, { Dispatch, SetStateAction, useEffect } from 'react'
import { CurrencyContainer } from './style'
import CurrencyList from '../CurrencyList'
import { RootObject }  from '../../types/CurrencyCodes'


interface CurrencyRowProps {
    currencyOptions:RootObject,
    setValueCurrency:Dispatch<SetStateAction<number>>,
    setCurrencyCode:Dispatch<SetStateAction<string>>,
    currencyCode:string,
    valueCurrency:number,
    disabled:boolean,
    isFirstCurrency:boolean
}

const CurrencyRow: React.FC<CurrencyRowProps> = ({currencyOptions, setValueCurrency, setCurrencyCode, currencyCode, valueCurrency, disabled, isFirstCurrency}) => {
    useEffect(() => {
        isFirstCurrency ? setCurrencyCode('BRL') : setCurrencyCode('USD') 
    },[])
    return (
        <CurrencyContainer>
                <CurrencyList 
                    valueSelected={currencyCode} 
                    options={currencyOptions.supported_codes.map(codes => `${codes[0]}-${codes[1]}`)}
                    setCurrencyCode={setCurrencyCode}/>

                <input type="number" 
                       placeholder="0"
                       value={String(valueCurrency)}
                       disabled={disabled}
                       min={0}
                       onChange={(ev) => 
                       {
                           const numberInput = ev.target 
                           setValueCurrency(Number(numberInput.value))
                       }}/>

        </CurrencyContainer>
    )

} 

export default CurrencyRow
