import { useState, useEffect, Dispatch, SetStateAction}from 'react'


type Response<T> = [
    T, 
    Dispatch<SetStateAction<T>>
]

const usePersistedState = <T>(key:string, initialState:T):Response<T> => {
    const [state, setState] = useState(() => {
        const storage = localStorage.getItem(key)
        if(storage){
            return JSON.parse(storage) 
        }else {
            return initialState
        }
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state))
    }, [state])

    return [state,setState]
}

export default usePersistedState