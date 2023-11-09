import { useState } from "react";
import {Sub} from '../types'


interface FormState{
    inputValues: Sub
}

const Form =()=>{
   
    const [inputValues, setInputValues]= useState<FormState['inputValues']> ({
        nick:'',
        subMonths: 0,
        avatar:'',
        description:''
    });

    const handleChange =(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
    setInputValues({
        ...inputValues,
        [e.target.name]:e.target.value
    })
    }
    return (
        <div>
            <form>
                <input onChange={handleChange} value={inputValues.nick} type='text' name='nick' placeholder="nick"/> 
                <input onChange={handleChange} value={inputValues.subMonths} type='text' name='subMoths' placeholder="subMoths"/> 
                <input onChange={handleChange} value={inputValues.avatar} type='text' name='avatar' placeholder="avatar"/> 
                <input onChange={handleChange} value={inputValues.description} type='text' name='description' placeholder="description"/> 
                <button>Guardar new sub</button>
                </form>
        </div>
    )
}
export default Form;