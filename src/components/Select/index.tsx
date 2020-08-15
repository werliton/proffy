import React, { SelectHTMLAttributes } from 'react'

import './styles.css'

interface SelectBlockProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label: string
    id: string
    options: Array<{
        value: string,
        label: string
    }>
}

const SelectBlock: React.FC<SelectBlockProps> = ({ id, label, options, ...rest }) => {
    return (
        <div className="select-block">
            <label htmlFor={id}>{label}</label>
            <select id={id} {...rest} >
                <option value="" disabled hidden>Selecione uma opção</option>
                {
                    options.map((option, key) => <option key={key} value={option.value}>{option.label}</option>)
                }
            </select>
        </div>
    )
}

export default SelectBlock