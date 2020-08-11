import React, { ButtonHTMLAttributes } from 'react'

import './styles.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string
}

const Button: React.FC<ButtonProps> = ({ children, title, ...rest }) => {
    return (
        <button type="button">
            {children}
            {title}
        </button>
    )
}

export default Button
