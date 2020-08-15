import React from 'react'

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";
import './styles.css'
import Button from '../Button';

interface TeacherItemProps {
    listTeachers: Array<{
        subject: string
        cost: number,
        name: string,
        avatar: string
        whatsapp: string,
        bio: string
    }>
}

export default function TeacherItem({ listTeachers }: TeacherItemProps) {
    return (
        <main>
            {
                listTeachers.map((item, index) => (
                    <article className="teacher-item">
                        <header>
                            <img src={item.avatar} alt="Perfil" />
                            <div>
                                <strong>{item.name}</strong>
                                <span>{item.subject}</span>
                            </div>
                        </header>
                        <p>
                            {item.bio}
                    </p>
                        <footer>
                            <p>
                                Preço/hora
                            <strong>R$ {item.cost},00</strong>
                            </p>
                            <Button title="Entrar em contato">
                                <img src={whatsappIcon} alt="whatsapp" />
                            </Button>
                        </footer>
                    </article>

                ))
            }
        </main>
    )
}
