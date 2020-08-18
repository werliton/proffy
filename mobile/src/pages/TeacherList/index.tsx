import React, { useState } from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'
import { Feather } from '@expo/vector-icons'
import { ScrollView, TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler'
import api from '../../services/api'

export default function TeacherList() {
    const [isFilterVisible, setIsFilterVisible] = useState(false)
    const [subject, setSubject] = useState('')
    const [week_day, setWeek_day] = useState('')
    const [time, setTime] = useState('')
    const [listTeachers, setListTeachers] = useState([])
    
    function handleFilter() {
        setIsFilterVisible(!isFilterVisible)
    }

    async function handleFiltersSubmit() {
        try {
            const response = await api.get('classes',{
                params:{
                    subject,
                    week_day,
                    time
                }
            })
            setListTeachers(response.data)
            setIsFilterVisible(false)
        } catch (error) {
            console.log('Erro', error)
        }
    }

    return (
        <View style={styles.container}>
            <PageHeader
            title="Proffys Disponíveis"
            headerRight={(
                <BorderlessButton onPress={handleFilter}>
                    <Feather name="filter" color="#fff" size={20} />
                </BorderlessButton>
            )}
            >
                {
                    isFilterVisible &&
                    <View style={styles.searchForm}>
                        <Text style={styles.label}>Matéria</Text>
                        <TextInput style={styles.input}
                            placeholder="Qual a matéria?"
                            placeholderTextColor="#c1bccc"
                            value={subject}
                            onChangeText={text => setSubject(text)}
                        />


                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Dia da semana</Text>
                                <TextInput style={styles.input}
                                    placeholder="Qual o dia"
                                    placeholderTextColor="#c1bccc"
                                    value={week_day}
                                    onChangeText={text => setWeek_day(text)}
                                />
                            </View>

                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Horário</Text>
                                <TextInput style={styles.input}
                                    placeholder="Qual o horário?"
                                    placeholderTextColor="#c1bccc"
                                    value={time}
                                    onChangeText={text => setTime(text)}
                                />
                            </View>
                        </View>
                        <RectButton style={styles.buttonFilter} onPress={handleFiltersSubmit}>
                            <Text style={styles.textButtonFilter}>
                                Filtrar
                            </Text>
                        </RectButton>
                    </View>
                }
            </PageHeader>
            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16
                }}
            >
                {
                    listTeachers && listTeachers.map((item, index) => <TeacherItem {...item} key={index}/>)
                }
                
            </ScrollView>
        </View>
    )
}
