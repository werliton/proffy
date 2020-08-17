import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#f0f0f7',
    },
    teacherList:{
        marginTop: -40,
    },
    searchForm:{
        marginBottom: 8
    },
    textFilters:{
        color: '#d4c2ff',
        fontFamily: 'Poppins_400Regular',
        fontSize: 18,
        marginBottom: 24
    },
    buttonFilter:{
        backgroundColor: '#04d361',
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        height: 56
    },
    textButtonFilter:{
        color: '#fff',
        fontSize: 16,
        fontFamily: 'Archivo_700Bold'
    },
    label:{
        color: '#d4c2ff',
        fontFamily: 'Poppins_400Regular'
    },
    inputGroup:{
        flexDirection: "row",
        justifyContent: "space-between"
    },
    inputBlock:{
        width: '48%'
    },
    input:{
        height: 54,
        backgroundColor: '#fff',
        borderRadius:8,
        justifyContent: "center",
        paddingHorizontal: 16,
        marginTop: 4,
        marginBottom:16
    }
})

export default styles