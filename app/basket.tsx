import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import useBasketStore from '@/context/basketStore'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import Colors from '@/constants/Colors'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from 'expo-router'
import ConfettiCannon from 'react-native-confetti-cannon'
import SwipeableRow from '@/components/SwipeableRow'

const Basket = () => {
    const { products, total, clearCart, reduceProduct } = useBasketStore()
    const [order, setOrder] = useState(false)
    const router = useNavigation()

    const FEES = {
        service: 2.99,
        delivery: 5.99
    }

    const startCheckout = () => {
        setOrder(true)
        setTimeout(() => {
            clearCart()
            setOrder(false)
            router.goBack()
        }, 3000)
    }


    return (
        <>
            {
                order && (
                    <ConfettiCannon count={200} origin={{ x: -10, y: 0 }} fallSpeed={2500} fadeOut={true} />
                )
            }
            {
                order && (
                    <View style={{ marginTop: '50%', padding: 20, alignItems: 'center'}}>
                        <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}>Thank you for your order!!</Text>
                    </View>
                )
            }
            {
                !order && (
                    <>
                        <FlatList
                            data={products}
                            ListHeaderComponent={
                                <Text style={styles.headerEl}>Items</Text>
                            }
                            ItemSeparatorComponent={ () =>
                                <View style={{ height: 1, backgroundColor: Colors.grey }} />
                            }
                            renderItem={({ item }) => (
                                <SwipeableRow onDelete={() => reduceProduct(item)}>
                                    <View style={styles.row}>
                                        <Text style={{ color: Colors.purple, fontSize: 18 }}>{item.quantity}x</Text>
                                        <Text style={{ flex: 1, fontSize: 18 }}>{item.name}</Text>
                                        <Text style={{ fontSize: 18 }}>{item.price} €</Text>
                                    </View>
                                </SwipeableRow>
                            )}
                            ListFooterComponent={
                                <View>
                                    <View style={{ height: 1, backgroundColor: Colors.grey }} />
                                    <View style={styles.totalRow}>
                                        <Text style={styles.total}>Subtotal</Text>
                                        <Text style={{ fontSize: 18 }}>{total} €</Text>
                                    </View>

                                    <View style={styles.totalRow}>
                                        <Text style={styles.total}>Service Fee</Text>
                                        <Text style={{ fontSize: 18 }}>{FEES.service} €</Text>
                                    </View>

                                    <View style={styles.totalRow}>
                                        <Text style={styles.total}>Delivery Fee</Text>
                                        <Text style={{ fontSize: 18 }}>{FEES.delivery} €</Text>
                                    </View>

                                    <View style={styles.totalRow}>
                                        <Text style={styles.total}>Order Total</Text>
                                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{(total + FEES.service + FEES.delivery).toFixed(2)} €</Text>
                                    </View>
                                </View>
                            }
                        />

                        <View style={styles.footer}>
                            <SafeAreaView edges={['bottom']} style={{ backgroundColor: '#fff' }}>
                                <TouchableOpacity style={styles.fullButton} onPress={startCheckout}>
                                        <Text style={styles.footerText}>Order now</Text>
                                </TouchableOpacity>
                            </SafeAreaView>
                        </View>
                    </>
                )
            }
        </>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 16,
        gap: 20,
        alignItems: 'center',
    },
    headerEl: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 16,
    },
    totalRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: '#fff',
    },
    total: {
        fontSize: 18,
        color: Colors.medium
    },
    footer: {
        position: 'absolute',
        backgroundColor: '#fff',
        bottom: 0,
        left: 0,
        width: '100%',
        padding: 10,
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
        justifyContent: 'center',
        flex: 1,
    },
    footerText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    }
})

export default Basket