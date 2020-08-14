import React from 'react'
import PageHeader from '../../components/PageHeader'
import InputBlock from '../../components/InputBlock'

import './styles.css'
import warningIcon from '../../assets/images/icons/warning.svg'
import Button from '../../components/Button'
import TextAreaBlock from '../../components/TextareaBlock'
import SelectBlock from '../../components/Select'
import { subjects, week_day } from '../../utils/constantes'


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
                    <TextAreaBlock label="Biografia" id="bio" />
                </fieldset>

                <fieldset>
                    <legend>Sobre a aula</legend>

                    <SelectBlock
                        id="subject"
                        label="Matéria"
                        options={subjects}
                    />
                    <InputBlock id="cost" label="Custo da hora aula" />
                </fieldset>

                <fieldset>
                    <legend>
                        Horários disponíveis

                        <button type="button">
                            + Novo horário
                        </button>
                    </legend>

                    <div className="schedule-item">
                        <SelectBlock
                            id="week_day"
                            label="Dia da semana"
                            options={week_day}
                        />
                        <InputBlock id="from" label="Das" type="time" />
                        <InputBlock id="to" label="Até" type="time"/>
                    </div>

                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso" />
                    Importante! <br />
                    Preencha todos os dados
                    </p>

                    <Button title="Salvar cadastro" />
                </footer>
            </main>
        </div >
    )
}
