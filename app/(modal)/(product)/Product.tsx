import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useLocalSearchParams, useRouter } from 'expo-router'

import Animated, { FadeIn, FadeInLeft } from 'react-native-reanimated'
import * as Haptics from 'expo-haptics'

import useBasketStore from '@/context/basketStore'

import { productStyles as styles } from '@/app/(modal)/(product)/ProductStyle'

import { getProductById } from '@/util/getProductById'


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


export default Product