import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#e6e6f0',
        margin: 5,
        borderRadius: 8,
        marginBottom: 16,
        overflow: 'hidden'
    },
    profile: {
        flexDirection: "row",
        padding: 24,
        alignItems: "center"
    },
    avatar: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: '#eee'
    },
    profileInfo: {
        marginLeft: 16,
    },
    name: {
        fontFamily: 'Archivo_700Bold',
        fontSize: 20,
        color: '#32264d'
    },
    subject: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 12,
        marginTop: 4,
        color: '#6a6180'
    },
    bio: {
        marginHorizontal: 24,
        fontFamily: 'Poppins_400Regular',
        fontSize: 14,
        lineHeight: 24,
        color: '#6a6180',

    },
    footer: {
        alignItems: "center",
        borderTopWidth: 1,
        borderColor: '#e6e6f0',
        padding: 24,
        marginTop: 24
    },
    price: {
        justifyContent: "center",
        fontFamily: 'Poppins_400Regular',
        color: '#6a6180',
        fontSize: 14
    },
    priceValue: {
        fontFamily: 'Archivo_700Bold',
        fontSize: 16,
        color: '#8257e5'
    },
    buttonsContainer: {
        flexDirection: "row",
        marginTop: 16,
    },
    buttonFavorite: {
        backgroundColor: '#8257e5',
        borderRadius: 8,
        marginRight: 8,
        alignItems: "center",
        justifyContent: "center",
        width:56,
        height:56
    },
    favorited:{
        backgroundColor: '#e33d3d'
    },
    buttonWhatsapp: {
        backgroundColor: '#04d361',
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        flex:1
    },
    whatsappText: {
        fontFamily: 'Archivo_700Bold',
        fontSize: 16,
        color: '#fff',
        marginLeft: 16
    }
})

export default styles