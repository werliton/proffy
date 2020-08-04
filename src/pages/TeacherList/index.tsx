import React from 'react'
import './styles.css'
import PageHeader from '../../components/PageHeader'

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
        </div>
    )
}
