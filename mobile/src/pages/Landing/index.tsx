import React from 'react'
import { View, Image, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'

import styles from './styles'

import landingImg from '../../assets/images/landing.png'
import studyIcon from '../../assets/images/icon/study.png'
import giveClassesIcon from '../../assets/images/icon/give-classes.png'
import heartIcon from '../../assets/images/icon/heartIcon.png'

export default function Landing() {
    const navigation = useNavigation()

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
                    <Image source={studyIcon}/>
                    <Text style={styles.buttonText}>Estudar</Text>
                </RectButton>
                <RectButton style={[styles.button, styles.buttonSecondary]}
                onPress={handleNavigateToGiveClassesPage}
                >
                    <Image source={giveClassesIcon}/>
                    <Text>Dar aula</Text>
                </RectButton>
            </View>

            <Text style={styles.totalConnections}>
                Total de 200 conexoes já realizadas {' '}
                <Image source={heartIcon}/>
            </Text>            
        </View>)
}