import React, { SelectHTMLAttributes } from 'react'
import SelectBlock from '../../components/Select'
import InputBlock from '../../components/InputBlock'
import { week_day } from '../../utils/constantes'

import './styles.css'

interface ScheduleItemProps extends SelectHTMLAttributes<HTMLSelectElement>{
    setScheduleItemValue: (position: number, field: string, value: string) => void
    index: number
}

const ScheduleItem: React.FC<ScheduleItemProps> = ({ setScheduleItemValue, index }) => {
    return (
        <div className="schedule-item">
            <SelectBlock
                id="week_day"
                label="Dia da semana"
                options={week_day}
                onChange={e => setScheduleItemValue(index,'week_day', e.target.value)}
            />
            <InputBlock id="from" label="Das" type="time" onChange={e => setScheduleItemValue(index,'from', e.target.value)}/>
            <InputBlock id="to" label="Até" type="time"onChange={e => setScheduleItemValue(index,'to', e.target.value)} />
        </div>
    )
}

export default ScheduleItem