import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { getProductById } from '@/assets/data/shop'
import Colors from '@/constants/Colors'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import Animated, { FadeIn, FadeInLeft } from 'react-native-reanimated'
import * as Haptics from 'expo-haptics'
import useBasketStore from '@/context/basketStore'

const Product = () => {
    const { id } = useLocalSearchParams()
    const item = getProductById(+id)!
    const router = useRouter()
    const { addProduct } = useBasketStore()

    const addToCart = () => {
        addProduct(item)
        Haptics.notificationAsync(
            Haptics.NotificationFeedbackType.Success
        )
        router.back()
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }} edges={['bottom']}>
            <View style={styles.container}>
                <Animated.Image 
                    entering={FadeIn.duration(400).delay(200)}
                    style={styles.img} 
                    source={item?.img} 
                />
                <View style={{ padding: 20}}>
                    <Animated.Text 
                        entering={FadeInLeft.duration(400).delay(200)}
                        style={styles.productName}>
                        {item?.name}
                    </Animated.Text>
                    <Animated.Text
                        entering={FadeInLeft.duration(400).delay(400)}
                        style={styles.productInfo}>
                        {item?.info}
                    </Animated.Text>
                </View>
                
                <View style={styles.footer}>
                    <TouchableOpacity style={styles.fullButton} onPress={addToCart}>
                        <Text style={styles.buttonText}>Add for {item?.price} €</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
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

export default Product