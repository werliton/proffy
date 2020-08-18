import React from 'react'
import { Text, View, Image } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import heartIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

import styles from './styles'

interface TeacherItemProps {
    id: number
    avatar: string
    name: string
    subject: string
    bio: string
    cost: string
    whatsapp: string
}

const TeacherItem: React.FC<TeacherItemProps> = ({ avatar, name, subject, bio, cost }) => {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image
                    style={styles.avatar}
                    source={{ uri: avatar }}
                />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.subject}>{subject}</Text>
                </View>
            </View>

            <Text style={styles.bio}>
                {bio}
            </Text>
            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora {'  '}
                    <Text style={styles.priceValue}>R$ {cost}</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton style={[styles.buttonFavorite, styles.favorited]}>
                        {/* <Image source={heartIcon} /> */}
                        <Image source={unfavoriteIcon} />
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
