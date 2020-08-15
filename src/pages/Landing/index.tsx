import React, { useState, useEffect } from 'react'
import logoImg from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'

import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'
import './styles.css'
import { Link } from 'react-router-dom'
import api from '../../services/api'

export default function Landing() {

    const [totalConnections, setTotalConnections] = useState(0)

    useEffect(() => {
        api.get('connections')
        .then(response => {
            const { total } = response.data
            setTotalConnections(total)
        })
    }, [])

    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy" />
                    <h2>Sua platafotma de estudos online.</h2>
                </div>

                <img src={landingImg} alt="" className="hero-image" />

                <div className="buttons-container">
                    <Link className="study"
                        to="/study"
                    >
                        <img src={studyIcon} alt="Estudar" />
                        Estudar
                    </Link>
                    <Link className="give-classes"
                        to="/give-classes"
                    >
                        <img src={giveClassesIcon} alt="Dar aula" />
                        Dar aula
                    </Link>
                </div>

                <span className="total-connections">
                    Total de { totalConnections } conexoes realizadas <img src={purpleHeartIcon} alt="Coração roxo" />
                </span>
            </div>
        </div>
    )
}
