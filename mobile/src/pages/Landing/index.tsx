import React from 'react'
import { View, Image } from 'react-native'
import styles from './styles'

import landingImg from '../../assets/images/landing.png'

export default function Landing() {
    return (
        <View style={styles.container}>
            <Image source={landingImg} style={styles.banner}/>
        </View>)
}