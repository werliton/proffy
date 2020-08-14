import React from 'react'
import './styles.css'
import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'
import InputBlock from '../../components/InputBlock'
import SelectBlock from '../../components/Select'
import { subjects, week_day } from '../../utils/constantes'

export default function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form action="" id="search-teachers">
                    <SelectBlock
                        id="subject"
                        label="Matéria"
                        options={subjects}
                    />
                    <SelectBlock
                        id="week_day"
                        label="Dia da semana"
                        options={week_day}
                    />
                    <InputBlock type="time" label="Horário" id="hour"/>
                </form>
            </PageHeader>

            <TeacherItem />
        </div>
    )
}
