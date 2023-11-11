import React, { useState } from "react";
import {Sub} from '../types'


interface FormState{
    inputValues: Sub
};
interface FormProps{
    onNewSubs:React.Dispatch<React.SetStateAction<Sub[]>>
};

const Form =({onNewSubs}:FormProps)=>{
   
    const [inputValues, setInputValues]= useState<FormState['inputValues']> ({
        nick:'',
        subMonths: 0,
        avatar:'',
        description:''
    });
    const handleSubmit=(evt:React.FormEvent<HTMLFormElement>)=>{
        evt.preventDefault()
        onNewSub(subs =>(subs => ([ ...subs, inputValues])))

    }

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

function onNewSub(arg0: (subs: any) => (subs: any) => any[]) {
    throw new Error("Function not implemented.");
}
