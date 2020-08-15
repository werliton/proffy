import React, { useState, FormEvent } from 'react'
import PageHeader from '../../components/PageHeader'
import InputBlock from '../../components/InputBlock'

import './styles.css'
import warningIcon from '../../assets/images/icons/warning.svg'
import Button from '../../components/Button'
import TextAreaBlock from '../../components/TextareaBlock'
import SelectBlock from '../../components/Select'
import { subjects } from '../../utils/constantes'
import ScheduleItem from './ScheduleItem'
import api from '../../services/api'
import { useHistory } from 'react-router-dom'

export default function TeacherForm() {
    const history = useHistory()

    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to: '' }]
    )
    const [name, setName] = useState('')
    const [avatar, setAvatar] = useState('')
    const [whatsapp, setWhatsApp] = useState('')
    const [bio, setBio] = useState('')
    const [subject, setSubject] = useState('')
    const [cost, setCost] = useState('')

    function addNewScheduleItems() {
        setScheduleItems([
            ...scheduleItems,
            { week_day: 0, from: '', to: '' }
        ])
    }

    function handleSubmit(e: FormEvent) {
        e.preventDefault()

        api.post('classes', {
            name, avatar, bio, whatsapp, subject, cost:Number(cost), schedule:scheduleItems
        })
        .then(() => {
            alert('Cadastro realizado com sucesso')
            history.push('/')
        })
        .catch(() => alert('Erro no cadastro'))
    }

    function setScheduleItemValue(position: number, field: string, value: string) {
        const newArray = scheduleItems.map((item, index) => {
            if (index === position) {
                return { ...item, [field]: value }
            }
            return item
        })
        
        setScheduleItems(newArray)
    }

    return (
        <div id="page-teacher-form" className="container" >
            <PageHeader
                title="Que incrível você quer dá aulas."
                description="O primeiro passo é preecher esse formulário de inscrição"
            />

            <main>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>Seus dados</legend>

                        <InputBlock id="name" label="Nome completo" value={name} onChange={e => setName(e.target.value)} />
                        <InputBlock id="avatar" label="Avatar" value={avatar} onChange={e => setAvatar(e.target.value)} />
                        <InputBlock id="whatsapp" label="whatsApp" value={whatsapp} onChange={e => setWhatsApp(e.target.value)} />
                        <TextAreaBlock label="Biografia" id="bio" value={bio} onChange={e => setBio(e.target.value)} />
                    </fieldset>

                    <fieldset>
                        <legend>Sobre a aula</legend>

                        <SelectBlock
                            id="subject"
                            label="Matéria"
                            options={subjects}
                            value={subject}
                            onChange={e => setSubject(e.target.value)}
                        />
                        <InputBlock id="cost" label="Custo da hora aula" value={cost} onChange={e => setCost(e.target.value)} />
                    </fieldset>

                    <fieldset>
                        <legend>
                            Horários disponíveis

                        <button type="button" onClick={addNewScheduleItems}>
                                + Novo horário
                        </button>
                        </legend>

                        {
                            scheduleItems.map((item, index) => <ScheduleItem 
                                key={index}
                                setScheduleItemValue={setScheduleItemValue}
                                index={index}
                                item={item}
                            />)}


                    </fieldset>

                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso" />
                    Importante! <br />
                    Preencha todos os dados
                    </p>

                        <Button title="Salvar cadastro" type="submit" />
                    </footer>
                </form>
            </main>
        </div >
    )
}
