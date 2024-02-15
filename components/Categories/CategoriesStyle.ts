import { StyleSheet } from 'react-native'

export const categoriesStyles = StyleSheet.create({
    categoryCard: {
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'flex-start',        
        backgroundColor: '#fff',
        marginEnd: 10,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.06,
        borderRadius: 4,
    },
    categoryImage: {
        width: '100%',
        height: '70%', 
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
    },
    categoryText: {
        padding: 6,
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center', 
        flexWrap: 'wrap',
        flex: 1,
    },
})