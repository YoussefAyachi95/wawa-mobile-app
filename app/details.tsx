import ParallaxScrollView from '@/components/ParallaxScrollView'
import Colors from '@/constants/Colors'
import React, { useLayoutEffect } from 'react'
import { shop } from '@/assets/data/shop'
import { Image, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from 'expo-router'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'

const Details = () => {
    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTransparent: true,
            headerTitle: '',
            headerTingColor: Colors.purple,
            headerLeft: () => 
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.roundedButton}>
                    <Ionicons name="arrow-back" size={24} color={Colors.purple} />
                </TouchableOpacity>,
            headerRight: () => 
                <View style={styles.bar}>
                    <TouchableOpacity style={styles.roundedButton}>
                        <Ionicons name="share-outline" size={24} color={Colors.purple} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.roundedButton}>
                        <Ionicons name="search-outline" size={24} color={Colors.purple} />
                    </TouchableOpacity>
                </View>,
        })
    }, [])

    return (
        <>
            <ParallaxScrollView 
                style={{ flex: 1 }}
                backgroundColor={'#fff'}
                parallaxHeaderHeight={250}
                stickyHeaderHeight={100}
                renderBackground={() => <Image source={shop.img} style={{ height: 300, width: '100%'}} />}
                contentBackgroundColor={Colors.lightGrey}
                renderStickyHeader={() => (
                    <View key='sticky-header' style={styles.stickySection}>
                        <Text style={styles.stickySectionText}>
                            {shop.name}
                        </Text>
                    </View>
                )}
                >
                <View style={styles.detailsContainer}>
                    <Text>Details</Text>
                </View>
            </ParallaxScrollView>
        </>
    )
}

const styles = StyleSheet.create({
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
})

export default Details