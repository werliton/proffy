import React, { useState, useEffect } from 'react'
import { Text, View } from 'react-native'

import styles from './styles'
import PageHeader from '../../components/PageHeader'
import { ScrollView } from 'react-native-gesture-handler'
import TeacherItem, { Teacher } from '../../components/TeacherItem'
import AsyncStorage from '@react-native-community/async-storage'

export default function Favorites() {

    const [favorites, setFavorites] = useState<Teacher[]>([])

    function loadFavorites() {
        AsyncStorage.getItem('favorites')
        .then(response => {
           if (response) {
               setFavorites(JSON.parse(response))
           }     
        })
    }
    
    useEffect(() => {
        loadFavorites()
    }, [])

    return (
        <View style={styles.container}>
            <PageHeader title="Meus proffys Favoritos" />
            <ScrollView 
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16
                }}
            >
                {
                    favorites.map((item: Teacher, index) => {
                        return <TeacherItem teacher={item} favorited={true} key={index}/>
                    })
                }
            </ScrollView>
        </View>
    )
}
