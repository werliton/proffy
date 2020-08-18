import React, { useState, useEffect } from 'react'
import { Text, View, RefreshControl } from 'react-native'

import styles from './styles'
import PageHeader from '../../components/PageHeader'
import { ScrollView } from 'react-native-gesture-handler'
import TeacherItem, { Teacher } from '../../components/TeacherItem'
import AsyncStorage from '@react-native-community/async-storage'

export default function Favorites() {

    const [favorites, setFavorites] = useState<Teacher[]>([])
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        loadFavorites()
        .then(() => setRefreshing(false))
        
    }, []);

    async function loadFavorites() {
        const response = await AsyncStorage
            .getItem('favorites')
        if (response) {
            setFavorites(JSON.parse(response))
        }
        return response
    }

    useEffect(() => {
        loadFavorites()
    }, [favorites])

    return (
        <View style={styles.container}>
            <PageHeader title="Meus proffys Favoritos" />
            <ScrollView
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
                        return <TeacherItem teacher={item} favorited={true} key={index} />
                    })
                }
            </ScrollView>
        </View>
    )
}
