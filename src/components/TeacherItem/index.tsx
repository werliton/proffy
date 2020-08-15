import React from 'react'

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";
import './styles.css'
import api from '../../services/api';

interface TeacherItemProps {
    teacher: {
        id: number
        subject: string
        cost: number
        name: string
        avatar: string
        whatsapp: string
        bio: string
    }
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {

    function createConnection() {

        api.post('connections', {
            user_id: teacher.id
        })
            .then(() => alert('Conexao criada com sucesso'))
            .catch(() => alert('Erro ao criar Conexao'))
    }
    return (
        <main>
            <article className="teacher-item">
                <header>
                    <img src={teacher.avatar} alt="Perfil" />
                    <div>
                        <strong>{teacher.name}</strong>
                        <span>{teacher.subject}</span>
                    </div>
                </header>
                <p>
                    {teacher.bio}
                </p>
                <footer>
                    <p>
                        Preço/hora
                            <strong>R$ {teacher.cost},00</strong>
                    </p>
                    {/* <Button title="Entrar em contato"> */}
                    <a href="https://wa.me/98992414137" onClick={createConnection} target="_blank">
                        Entrar em contato <img src={whatsappIcon} alt="whatsapp" />
                    </a>
                    {/* </Button> */}
                </footer>
            </article>
        </main>
    )
}

export default TeacherItem