import { StyleSheet } from 'react-native'
import Colors from '@/constants/Colors'

export const productStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    img: {
        width: '100%',
        height: 300,
    },
    productName: {
        fontSize: 24, 
        fontWeight: 'bold', 
        marginBottom: 8
    },
    productInfo: {
        fontSize: 16, 
        color: Colors.mediumDark
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        padding: 10,
        backgroundColor: '#fff',
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -10 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        paddingTop: 20,
    },
    fullButton: {
        backgroundColor: Colors.purple,
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
})