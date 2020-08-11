import React from 'react'

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";
import './styles.css'
import Button from '../Button';

export default function TeacherItem() {
    return (
        <main>
            <article className="teacher-item">
                <header>
                    <img src="https://avatars1.githubusercontent.com/u/4674324?s=460&u=cb676169391ac204b824569fd7465fa36488624d&v=4" alt="Perfil" />
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
                    <Button title="Entrar em contato">
                        <img src={whatsappIcon} alt="whatsapp" />
                    </Button>
                </footer>
            </article>
        </main>
    )
}
