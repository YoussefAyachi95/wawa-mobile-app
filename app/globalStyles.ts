import { StyleSheet } from 'react-native'
import Colors from '@/constants/Colors'

export const globalStyles = StyleSheet.create({
    container: {
        top: 100,
        backgroundColor: Colors.lightGrey,
    },
    header: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 16,
      marginBottom: 10,
      paddingHorizontal: 16,
    },
  })