import React, { TextareaHTMLAttributes } from 'react'

import './styles.css'

interface TextAreaBlockProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
    label:string
    id:string
}

const TextAreaBlock: React.FC<TextAreaBlockProps> = ({ id, label, ...rest }) => {
    return (
        <div className="textarea-block">
            <label htmlFor={id}>{label}</label>
            <textarea id={id} {...rest}/>
        </div>
    )
}

export default TextAreaBlock