import React from 'react'
import './styles.css'
import PageHeader from '../../components/PageHeader'

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

export default function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form action="" id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subject"/>
                    </div>
                    <div className="input-block">
                        <label htmlFor="weekday">Dia da semana</label>
                        <input type="text" id="weekday"/>
                    </div>
                    <div className="input-block">
                        <label htmlFor="hour">Horário</label>
                        <input type="text" id="hour"/>
                    </div>
                </form>
            </PageHeader>

            <main>
                <article className="teacher-item">
                    <header>
                        <img src="https://avatars1.githubusercontent.com/u/4674324?s=460&u=cb676169391ac204b824569fd7465fa36488624d&v=4" alt="Perfil"/>
                        <div>
                            <strong>Werliton Silva</strong>
                            <span>Programação Front-End</span>
                        </div>
                    </header>
                    <p>
                    Systems Analist at Grupo Ceuma works with React, React Native, Firebase, PHP, Moodle, JS lover and constantly bothered. 
                    </p>
                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$ 150,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="whatsapp"/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>
            </main>
        </div>
    )
}
