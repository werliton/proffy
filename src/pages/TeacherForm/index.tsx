import React from 'react'
import PageHeader from '../../components/PageHeader'
import InputBlock from '../../components/InputBlock'

import './styles.css'
import warningIcon from '../../assets/images/icons/warning.svg'
import Button from '../../components/Button'

export default function TeacherForm() {
    return (
        <div id="page-teacher-form" className="container" >
            <PageHeader 
            title="Que incrível você quer dá aulas."
            description="O primeiro passo é preecher esse formulário de inscrição"
            />

            <main>
                <fieldset>
                    <legend>Seus dados</legend>

                    <InputBlock id="name" label="Nome completo" />
                    <InputBlock id="avatar" label="Avatar" />
                    <InputBlock id="whatsapp" label="whatsApp" />
                </fieldset>

                <fieldset>
                    <legend>Sobre a aula</legend>

                    <InputBlock id="subject" label="Matéria" />
                    <InputBlock id="cost" label="Custo da hora aula" />
                </fieldset>

                <footer>
                    <p>
                    <img src={warningIcon} alt="Aviso"/>
                    Importante! <br />
                    Preencha todos os dados
                    </p>

                    <Button title="Salvar cadastro" />
                </footer>
            </main>
        </div >
    )
}
