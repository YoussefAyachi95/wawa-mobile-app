import Colors from '@/constants/Colors';
import { StyleSheet } from 'react-native';

export const customHeaderStyles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 5,
    },
    container: {
        height: 60,
        backgroundColor: '#fff',
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    titleContainer: {
        flex: 1,
        marginRight: 140,
        marginTop: 8,
    },
    logo: {
        width: 40,
        height: 40,
    },
    profileButton: {
        backgroundColor: Colors.lightGrey,
        padding: 10,
        borderRadius: 50,
    },
    title: {
        fontSize: 14,
        color: Colors.medium,
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    locationName: {
        flexDirection: 'row', 
        alignItems: 'center' 
    },
    searchContainer: {
        height: 60,
        backgroundColor: '#fff'
    },
    searchSection: {
        flexDirection: 'row',
        gap: 10,
        paddingHorizontal: 20,
        alignItems: 'center'
    },
    searchField: {
        flex: 1,
        backgroundColor: Colors.lightGrey,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
    },
    textInput: {
        padding: 10,
        color: Colors.mediumDark,
    },
    searchIcon: {
        paddingLeft: 10,
    },
    optionButton: {
        padding: 10,
        borderRadius: 50,
    },
})