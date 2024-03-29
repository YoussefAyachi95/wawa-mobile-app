import { StyleSheet } from 'react-native'
import Colors from '@/constants/Colors'

export const detailsStyles = StyleSheet.create({
    detailsContainer: {
        backgroundColor: Colors.lightGrey,
    },
    stickySection: {
        backgroundColor: '#fff',
        marginLeft: 65,
        height: 85,
        justifyContent: 'flex-end',
    },
    stickySectionText: {
        fontSize: 20,
        margin: 10,
        fontWeight: 'bold',
    },
    roundedButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    },
    shopName: {
        fontSize: 30,
        margin: 16,
    },
    shopDescription: {
        fontSize: 16,
        margin: 16,
        lineHeight: 22,
        color: Colors.medium,
    },
    shopAbout: {
        fontSize: 16,
        margin: 16,
        lineHeight: 22,   
    },
    sectionHeader: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 40,
        margin: 16,
    },
    productDetail: {
        backgroundColor: '#fff',
        padding: 16,
        flexDirection: 'row', 
    },
    displayImg: {
        height: 80,
        width: 80,
        borderRadius: 4,
    },
    itemName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    itemInfo: {
        fontSize: 14,
        color: Colors.mediumDark,
        paddingVertical: 4,
    },
    segmentScrollView: {
        paddingHorizontal: 16,
        alignItems: 'center',
        gap: 20,
    },
    stickySegments: {
        position: 'absolute',
        height: 50,
        left: 0,
        right: 0,
        top: 100,
        backgroundColor: '#fff',
        overflow: 'hidden',
        paddingBottom: 1,
    },
    segmentsShadow: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 2,
        width: '100%',
        height: '100%',
    },
    segmentsButtonActive: {
        backgroundColor: Colors.purple,
        paddingHorizontal: 16,
        paddingVertical: 4,
        borderRadius: 50,
    },
    segmentsButtonInactive: {
        paddingHorizontal: 16,
        paddingVertical: 4,
        borderRadius: 50,
    },
    segmentsTextActive: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    segmentsTextInactive: {
        color: Colors.purple,
        fontSize: 16,
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
    basket: {
        color: '#fff',
        backgroundColor: '#9750a6',
        padding: 8,
        fontWeight: 'bold',
        borderRadius: 2,
    },
    basketText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    fullButton: {
        backgroundColor: Colors.purple,
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
    },
})