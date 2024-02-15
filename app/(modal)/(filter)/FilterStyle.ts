import { StyleSheet} from 'react-native'
import Colors from '@/constants/Colors'

export const filterStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: Colors.lightGrey,
    },
    fullButton: {
        backgroundColor: Colors.purple,
        padding: 16,
        margin: 16,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        // flex: 1,
        height: 56,
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 100,
        padding: 4,
        backgroundColor: '#fff',
        elevation: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        shadowOffset: {
            width: 0,
            height: -10,
        }
    },
    footerText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    itemContainer: {
        backgroundColor: '#fff',
        padding: 8,
        borderRadius: 8,
        marginBottom: 16,
    },
    header: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    item: {
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingVertical: 10,
        borderColor: Colors.grey,
        borderBottomWidth: 1,
    },
    itemText: {
        flex: 1,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#fff',
    },
    btnContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4,
    },
    outlineButton: {
        borderColor: Colors.purple,
        borderWidth: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        height: 56,
    },
    outlineButtonText: {
        color: Colors.purple,
        fontWeight: 'bold',
        fontSize: 16,
    },
})