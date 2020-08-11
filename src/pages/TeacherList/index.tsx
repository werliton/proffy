import React from 'react'
import './styles.css'
import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'
import InputBlock from '../../components/InputBlock'

export default function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form action="" id="search-teachers">
                    <InputBlock label="Matéria" id="subject"/>
                    <InputBlock label="Dia da semana" id="weekday"/>
                    <InputBlock type="time" label="Horário" id="hour"/>
                </form>
            </PageHeader>

            <TeacherItem />
        </div>
    )
}
