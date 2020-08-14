import React, { useState } from 'react'
import PageHeader from '../../components/PageHeader'
import InputBlock from '../../components/InputBlock'

import './styles.css'
import warningIcon from '../../assets/images/icons/warning.svg'
import Button from '../../components/Button'
import TextAreaBlock from '../../components/TextareaBlock'
import SelectBlock from '../../components/Select'
import { subjects } from '../../utils/constantes'
import ScheduleItem from './ScheduleItem'

export default function TeacherForm() {

    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to: '' }]
    )
    function addNewScheduleItems() {
            setScheduleItems([
                ...scheduleItems,
                { week_day: 0, from: '', to: '' }
            ])
    }

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

                        <button type="button" onClick={addNewScheduleItems}>
                            + Novo horário
                        </button>
                    </legend>
                    {scheduleItems.map((item, index) => <ScheduleItem key={index} />)}


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
