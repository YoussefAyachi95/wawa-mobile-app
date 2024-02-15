import { StyleSheet } from 'react-native'

export const shopsStyles = StyleSheet.create({
    categoryCard: {
        width: 300,
        height: 250,
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
    categoryText: {
        paddingVertical: 5,
        fontSize: 14,
        fontWeight: 'bold',
    },
    image: {
      flex: 5,
      width: undefined,
      height: undefined 
    },
    categoryBox: {
      flex: 2,
      padding: 10,
    },
  })