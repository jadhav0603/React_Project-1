import {useState, createContext} from 'react'

export const SelectedOptionContext = createContext();

export const SelectedOptionProvider=({children})=>{

    const [selectedOption, setSelectedOption] = useState("")
    const [login, setLogin] = useState("Login/Register")

    return(
        <SelectedOptionContext.Provider value={{selectedOption,setSelectedOption,login,setLogin}}>
            {children}
        </SelectedOptionContext.Provider>
    )
}