import { useState,useRef } from "react"


export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, seTinputValue] = useState('');
    const input = useRef(null)
    
    const onInputChange = ({ target }) => {
        
        seTinputValue(target.value)
    }

   

    
    const newSearch = () => {
        if (inputValue.trim().length <= 1) {
            input.current.focus();
            return;
        };
        onNewCategory(inputValue.trim());
        seTinputValue('');
        
    }
    
    const onSubmit = (event) => {
        event.preventDefault();
        newSearch();
    }


    return (

        <form  className="formSearch" onSubmit={onSubmit}>
            
            <input
                type="text"
                placeholder="Buscar"
                value={inputValue}
                onChange={onInputChange}
                ref={input}
            />

            <i className="fa-solid fa-magnifying-glass" onClick={() => newSearch()} ></i>



        </form>

    )
}
