import React from 'react'
import SelectBlock from '../../components/Select'
import InputBlock from '../../components/InputBlock'
import { week_day } from '../../utils/constantes'

import './styles.css'

export default function ScheduleItem( ) {
    return (
        <div className="schedule-item">
            <SelectBlock
                id="week_day"
                label="Dia da semana"
                options={week_day}
            />
            <InputBlock id="from" label="Das" type="time" />
            <InputBlock id="to" label="Até" type="time" />
        </div>
    )
}