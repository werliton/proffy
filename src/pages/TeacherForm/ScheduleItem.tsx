import React, { SelectHTMLAttributes } from 'react'
import SelectBlock from '../../components/Select'
import InputBlock from '../../components/InputBlock'
import { week_day } from '../../utils/constantes'

import './styles.css'

interface ScheduleItemProps extends SelectHTMLAttributes<HTMLSelectElement>{
    setScheduleItemValue: (position: number, field: string, value: string) => void
    index: number
    item: {
        week_day:number
        from: string
        to:string
    }
}

const ScheduleItem: React.FC<ScheduleItemProps> = ({ setScheduleItemValue, index, item }) => {
    return (
        <div className="schedule-item">
            <SelectBlock
                name="week_day"
                id="week_day"
                label="Dia da semana"
                options={week_day}
                value={item.week_day}
                onChange={e => setScheduleItemValue(index,'week_day', e.target.value)}
            />
            <InputBlock id="from" label="Das" value={item.from} type="time" onChange={e => setScheduleItemValue(index,'from', e.target.value)}/>
            <InputBlock id="to" label="Até" value={item.to} type="time"onChange={e => setScheduleItemValue(index,'to', e.target.value)} />
        </div>
    )
}

export default ScheduleItem