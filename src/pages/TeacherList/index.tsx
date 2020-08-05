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
                    <InputBlock title="Matéria" id="subject"/>
                    <InputBlock title="Dia da semana" id="weekday"/>
                    <InputBlock title="Horário" id="hour"/>
                </form>
            </PageHeader>

            <TeacherItem />
        </div>
    )
}
