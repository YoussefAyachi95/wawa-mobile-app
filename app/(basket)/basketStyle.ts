import { StyleSheet } from 'react-native'
import Colors from '@/constants/Colors'

export const basketStyles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 16,
        gap: 20,
        alignItems: 'center',
    },
    headerEl: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 16,
    },
    totalRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: '#fff',
    },
    total: {
        fontSize: 18,
        color: Colors.medium
    },
    footer: {
        position: 'absolute',
        backgroundColor: '#fff',
        bottom: 0,
        left: 0,
        width: '100%',
        padding: 10,
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
        justifyContent: 'center',
        flex: 1,
    },
    footerText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    }
})