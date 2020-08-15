import React, { useState, FormEvent } from 'react'
import './styles.css'
import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'
import InputBlock from '../../components/InputBlock'
import SelectBlock from '../../components/Select'
import { subjects, week_day } from '../../utils/constantes'
import api from '../../services/api'
import Button from '../../components/Button'

export default function TeacherList() {
    const [subject, setSubject] = useState('')
    const [weekDay, setWeekDay] = useState('')
    const [time, setTime] = useState('')
    const [listTeachers, setListTeachers] = useState([])
    
    function seachTeachers(e:FormEvent) {
        e.preventDefault()
        api.get('classes',{
            params:{
                subject,
                week_day:weekDay,
                time
            }
        })
        .then(response => {
            setListTeachers(response.data)
        })
        .catch(()=> alert('Erro ao buscar profs'))
    }


    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers" onSubmit={seachTeachers}>
                    <SelectBlock
                        id="subject"
                        label="Matéria"
                        value={subject}
                        onChange={e => setSubject(e.target.value)}
                        options={subjects}
                    />
                    <SelectBlock
                        id="week_day"
                        label="Dia da semana"
                        value={weekDay}
                        onChange={e => setWeekDay(e.target.value)}
                        options={week_day}
                    />
                    <InputBlock type="time" label="Horário" id="hour" value={time}
                        onChange={e => setTime(e.target.value)}/>

                        <Button name="Buscar" title="Buscar" type="submit"/>
                </form>
            </PageHeader>

            <TeacherItem listTeachers={listTeachers}/>
        </div>
    )
}
