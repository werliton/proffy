import React from 'react'
import { Text, View, Image } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import heartIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

import styles from './styles'

const TeacherItem = () => {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image
                    style={styles.avatar}
                    source={{ uri: 'https://avatars1.githubusercontent.com/u/4674324?s=460&u=cb676169391ac204b824569fd7465fa36488624d&v=4' }}
                />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Werliton</Text>
                    <Text style={styles.subject}>Matemática</Text>
                </View>
            </View>

            <Text style={styles.bio}>
                Atualmente trabalho mais focado no gerenciamento
                    {'\n'}{'\n'}
                    da equipe na qual faço parte trabalhando com Moodle,
                    mas quando tenho a oportunidade de programar,
                    rendo-me ao mundo JS. Brincando e sendo smiley com React,
                    Redux, Firebase, Nodejs
            </Text>
            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora {'  '}
                    <Text style={styles.priceValue}>R$ 50,00</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton style={styles.buttonFavorite}>
                        <Image
                            source={heartIcon}
                        />
                    </RectButton>
                    <RectButton style={styles.buttonWhatsapp}>
                        <Image
                            source={whatsappIcon}
                        />
                        <Text style={styles.whatsappText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>
        </View >
    )
}

export default TeacherItem
