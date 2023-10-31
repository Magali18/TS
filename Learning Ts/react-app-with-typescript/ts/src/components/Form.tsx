import { useState } from "react";

const Form =()=>{
    const [inputValues, setInputValues]=useState({
        nick:'',
        subMoths: 0,
        avatar:'',
        description:''
    })
    return (
        <div>
            <form>
                <input value={inputValues.nick} type='text' name='nick' placeholder="nick"/> 
                <input value={inputValues.subMoths} type='text' name='subMoths' placeholder="subMoths"/> 
                <input value={inputValues.avatar} type='text' name='avatar' placeholder="avatar"/> 
                <input value={inputValues.description} type='text' name='description' placeholder="description"/> 
                <button> Save new Subs</button>

            </form>

        </div>
    )
}
export default Form;