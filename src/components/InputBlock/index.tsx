import React from 'react'

interface InputBlockProps{
    title:string
    id:string
}

const InputBlock: React.FC<InputBlockProps> = ({ id, title }) => {
    return (
        <div className="input-block">
            <label htmlFor={id}>{title}</label>
            <input type="text" id={id} />
        </div>
    )
}

export default InputBlock