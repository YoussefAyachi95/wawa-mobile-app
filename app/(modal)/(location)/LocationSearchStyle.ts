import { StyleSheet } from 'react-native'
import Colors from '@/constants/Colors'

export const locationSearchStyles =StyleSheet.create({
    map: {
        flex: 1,
    },
    absoluteBox: {
        position: 'absolute',
        bottom: 20,
        width: '100%'
    },
    button: {
        backgroundColor: Colors.purple,
        padding: 16,
        margin: 16,
        alignItems: 'center',
        borderRadius: 8,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    autocompleteListContainer: {
        backgroundColor: '#fff',
    },
    autocompleteItem: {
        padding: 12,
        margin: 4,
        borderBottomColor: Colors.grey,
        borderBottomWidth: 1,
    },
    searchInput: {
        backgroundColor: Colors.grey,
        paddingLeft: 35,
        padding: 8,
        borderRadius: 10,
    },
    boxIcon: {
        position: 'absolute',
        left: 15,
        top: 18,
        zIndex: 1,
    },
})