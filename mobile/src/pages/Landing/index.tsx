import React, { useState, useEffect } from 'react'
import { View, Image, Text, YellowBox } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'

import styles from './styles'

import landingImg from '../../assets/images/landing.png'
import studyIcon from '../../assets/images/icons/study.png'
import giveClassesIcon from '../../assets/images/icons/give-classes.png'
import heartIcon from '../../assets/images/icons/heart.png'
import getDocument from '../../services/firestoreClient'

export default function Landing() {
    YellowBox.ignoreWarnings(['Setting a timer']);

    
    const navigation = useNavigation()

    const [totalConnections, setTotalConnections] = useState(0)

    async function getConnections() {
        const data = await getDocument("connections")
        setTotalConnections(data.length)
    }

    useEffect(() => {
        getConnections()
    }, [])

    function handleNavigateToGiveClassesPage() {
        navigation.navigate('GiveClasses')
    }

    function handleNavigateToStudyPage() {
        navigation.navigate('Study')
    }

    return (
        <View style={styles.container}>
            <Image source={landingImg} style={styles.banner} />

            <Text style={styles.title}>
                Seja bem-vindo, {'\n'}
                <Text style={styles.titleBold}>O que deseja fazer?</Text>
            </Text>

            <View style={styles.buttonsContainer}>
                <RectButton style={[styles.button, styles.buttonPrimary]}
                    onPress={handleNavigateToStudyPage}
                >
                    <Image source={studyIcon} />
                    <Text style={styles.buttonText}>Estudar</Text>
                </RectButton>
                <RectButton style={[styles.button, styles.buttonSecondary]}
                    onPress={handleNavigateToGiveClassesPage}
                >
                    <Image source={giveClassesIcon} />
                    <Text style={styles.buttonText}>Dar aula</Text>
                </RectButton>
            </View>

            <Text style={styles.totalConnections}>
                Total de {totalConnections} conexoes já realizadas {' '}
                <Image source={heartIcon} />
            </Text>
        </View>)
}