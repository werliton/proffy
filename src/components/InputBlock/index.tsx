import React, { InputHTMLAttributes } from 'react'

import './styles.css'

interface InputBlockProps extends InputHTMLAttributes<HTMLInputElement>{
    label:string
    id:string
}

const InputBlock: React.FC<InputBlockProps> = ({ id, label, ...rest }) => {
    return (
        <div className="input-block">
            <label htmlFor={id}>{label}</label>
            <input type="text" id={id} {...rest}/>
        </div>
    )
}

export default InputBlock