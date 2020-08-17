import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#8257e5',
        padding: 40 
    },
    topBar:{
        flexDirection: "row",
        alignItems:"center",
        justifyContent: "space-between"
    },
    title:{
        color:"#FFF",
        fontFamily: "Archivo_700Bold",
        lineHeight: 32,
        fontSize: 24,
        maxWidth: 160,
        marginVertical: 40
    },
    header:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    }
})

export default styles