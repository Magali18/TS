import { useState } from "react";

const Form =()=>{
   
    const [inputValues, setInputValues]=useState({
        nick:'',
        subMoths: 0,
        avatar:'',
        description:''
    });
    const handleChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
    setInputValues({
        ...inputValues,
        [e.target.name]:e.target.value
    })
    }
    return (
        <div>
            <form>
                <input onChange={handleChange} value={inputValues.nick} type='text' name='nick' placeholder="nick"/> 
                <input onChange={handleChange} value={inputValues.subMoths} type='text' name='subMoths' placeholder="subMoths"/> 
                <input onChange={handleChange} value={inputValues.avatar} type='text' name='avatar' placeholder="avatar"/> 
                <input onChange={handleChange} value={inputValues.description} type='text' name='description' placeholder="description"/> 
                </form>

        </div>
    )
}
export default Form;