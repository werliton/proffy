import React from "react";
import { Link } from "react-router-dom";
import logoImg from '../../assets/images/logo.svg'
import backIcon from '../../assets/images/icons/back.svg'

interface PageHeaderProps{
    title: string
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={backIcon} alt="Voltar" />
                </Link>
                <img src={logoImg} alt="logo" />
            </div>

            <div className="header-content">
                <strong>{title}</strong>
            </div>
        </header>
    )
}

export default PageHeader