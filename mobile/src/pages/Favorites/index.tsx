import React, { useState, useCallback } from 'react'
import { View, RefreshControl } from 'react-native'
import { AppLoading } from 'expo'

import styles from './styles'
import PageHeader from '../../components/PageHeader'
import { ScrollView } from 'react-native-gesture-handler'
import TeacherItem, { Teacher } from '../../components/TeacherItem'
import AsyncStorage from '@react-native-community/async-storage'
import { useFocusEffect } from '@react-navigation/native'
import FirestoreClient from '../../services/firestoreClient'
import getDocument from '../../services/firestoreClient'

export default function Favorites() {

    const [favorites, setFavorites] = useState<Teacher[]>([])
    const [refreshing, setRefreshing] = React.useState(false);
    const [isReady, setIsReady] = useState(false)

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        loadFavorites()
           .then(() => setRefreshing(false))

    }, []);

    const loadFavorites = useCallback(
        async () => {
           
                const data =  await getDocument("classes")        
                setFavorites(data)
       
        },
        [],
    )

    useFocusEffect(
        React.useCallback(() => {
            loadFavorites();
        }, [])
    )

    return (
        <View style={styles.container}>
            <PageHeader title="Meus proffys Favoritos" />

            { 
            isReady ?
                <AppLoading 
                    onFinish={() => setIsReady(true)}
                />
                : <ScrollView
                    style={styles.teacherList}
                    contentContainerStyle={{
                        paddingHorizontal: 16,
                        paddingBottom: 16
                    }}
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                    }
                >
                    {
                        favorites.map((item: Teacher, index) => {
                            return <TeacherItem teacher={item} favorited key={index} />
                        })
                    }
                </ScrollView>
            }
        </View>
    )
}
