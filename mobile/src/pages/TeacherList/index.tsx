import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'
import { ScrollView, TextInput } from 'react-native-gesture-handler'

export default function TeacherList() {
    return (
        <View style={styles.container}>
            <PageHeader title="Proffys Disponíveis">
                <View style={styles.searchForm}>
                    <Text style={styles.label}>Matéria</Text>
                    <TextInput style={styles.input}
                        placeholder="Qual a matéria?"
                        placeholderTextColor="#c1bccc"
                    />


                    <View style={styles.inputGroup}>
                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>Dia da semana</Text>
                            <TextInput style={styles.input}
                                placeholder="Qual o dia"
                                placeholderTextColor="#c1bccc"
                            />
                        </View>

                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>Horário</Text>
                            <TextInput style={styles.input}
                                placeholder="Qual o horário?"
                                placeholderTextColor="#c1bccc"
                            />
                        </View>
                    </View>
                </View>
            </PageHeader>
            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16
                }}
            >
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </ScrollView>
        </View>
    )
}
