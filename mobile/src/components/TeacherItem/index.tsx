import React, { useState } from 'react'
import { Text, View, Image, Linking } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import heartIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

import styles from './styles'
import AsyncStorage from '@react-native-community/async-storage'

export interface Teacher {
    id: number
    avatar: string
    name: string
    subject: string
    bio: string
    cost: string
    whatsapp: string
}

interface TeacherItemProps {
    teacher: Teacher
    favorited: boolean
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher, favorited }) => {
    const [isFavorited, setIsFavorited] = useState(favorited)

    function handleLinkTowhatsapp() {
        Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`)
    }

    async function handleToggleFavorite() {

        const favoritedTeachers = await AsyncStorage.getItem('favorites')
        let favoritedArray = []

        // Adicionar na lista
        if (favoritedTeachers) {
            favoritedArray = JSON.parse(favoritedTeachers)
        }

        if (isFavorited) {
            // remover da lista
            favoritedArray = favoritedArray.filter((item: Teacher) => item.id !== teacher.id)
            setIsFavorited(false)
        } else {
            // Adicionar na lista
            favoritedArray.push(teacher)
            setIsFavorited(true)
        }

        if (favoritedArray.length > 0) {
            await AsyncStorage.setItem('favorites', JSON.stringify(favoritedArray))
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image
                    style={styles.avatar}
                    source={{ uri: teacher.avatar }}
                />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>{teacher.name}</Text>
                    <Text style={styles.subject}>{teacher.subject}</Text>
                </View>
            </View>

            <Text style={styles.bio}>
                {teacher.bio}
            </Text>
            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora {'  '}
                    <Text style={styles.priceValue}>R$ {teacher.cost}</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton
                        style={[styles.buttonFavorite,
                        isFavorited ? styles.favorited : {}]}
                        onPress={handleToggleFavorite}
                    >
                        {
                            isFavorited ?
                                <Image source={unfavoriteIcon} />
                                :
                                <Image source={heartIcon} />
                        }
                    </RectButton>

                    <RectButton style={styles.buttonWhatsapp} onPress={handleLinkTowhatsapp}>
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
