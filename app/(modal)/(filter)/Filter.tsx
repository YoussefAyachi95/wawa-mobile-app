import { useEffect, useState } from 'react'
import { View, Text, ListRenderItem } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from 'expo-router'

import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import BouncyCheckbox from 'react-native-bouncy-checkbox'

import { Ionicons } from '@expo/vector-icons'
import { filterStyles as styles } from '@/app/(modal)/(filter)/FilterStyle'
import Colors from '@/constants/Colors'

import categories from '@/assets/data/filter.json'

interface Category {
    name: string;
    count: number;
    checked?: boolean;
}

const ItemBox = () => (
    <>
        <View style={styles.itemContainer}>
            <TouchableOpacity style={styles.item}>
                    <Ionicons name='arrow-down-outline' size={20} colors={Colors.medium} />
                    <Text style={{ flex: 1 }}>Sort</Text>
                    <Ionicons name='chevron-forward' size={22} colors={Colors.purple} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.item}>
                    <Ionicons name='fast-food-outline' size={20} colors={Colors.medium} />
                    <Text style={{ flex: 1 }}>Hygiene Rating</Text>
                    <Ionicons name='chevron-forward' size={22} colors={Colors.purple} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.item}>
                    <Ionicons name='pricetag-outline' size={20} colors={Colors.medium} />
                    <Text style={{ flex: 1 }}>Offers</Text>
                    <Ionicons name='chevron-forward' size={22} colors={Colors.purple} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.item}>
                    <Ionicons name='nutrition-outline' size={20} colors={Colors.medium} />
                    <Text style={{ flex: 1 }}>Dietary</Text>
                    <Ionicons name='chevron-forward' size={22} colors={Colors.purple} />
            </TouchableOpacity>
        </View>
        <Text style={styles.header}>Categories</Text>
    </>
)

const Filter = () => {
    const navigation = useNavigation()
    const [items, setItems] = useState<Category[]>(categories)
    const [selected, setSelected] = useState<Category[]>([])
    const flexWidth = useSharedValue(0)
    const scale = useSharedValue(0)

    useEffect(() => {
        const hasSelected = selected.length > 0
        const selectedItems = items.filter((item) => item.checked)
        const newSelected = selectedItems.length > 0

        if (hasSelected !== newSelected) {
            flexWidth.value = withTiming(newSelected ? 150 : 0)
            scale.value = withTiming(newSelected ? 1 : 0)
        }

        setSelected(selectedItems)

    }, [items])

    const handleClearAll = () => {
        const updatedItems = items.map((item) => {
            item.checked = false

            return item
        })

        setItems(updatedItems)
    }

    const animatedStyles = useAnimatedStyle(() => {
        return {
            width: flexWidth.value,
            opacity: flexWidth.value > 0 ? 1 : 0
        }
    })

    const animatedText = useAnimatedStyle(() => {
        return {
            transform: [{ scale: scale.value }]
        }
    })

    const renderItem: ListRenderItem<Category> = ({ item, index }) => (
        <View style={styles.row}>
            <Text style={styles.itemText}>{item.name} ({item.count})</Text>
            <BouncyCheckbox
                isChecked={items[index].checked}
                fillColor={Colors.purple}
                unfillColor='#fff'
                disableBuiltInState
                iconStyle={{ borderColor: Colors.purple, borderRadius: 4, borderWidth: 2 }}
                innerIconStyle={{ borderColor: Colors.purple, borderRadius: 4 }}
                onPress={() => {
                    const isChecked = items[index].checked

                    const updatedItems = items.map((item) => {
                        if (item.name === items[index].name) {
                            item.checked = !isChecked
                        }
                        return item
                    })

                    setItems(updatedItems)
                }}
            />
        </View>
    )
    

    return (
        <View style={styles.container}>
            <FlatList data={items} renderItem={renderItem} ListHeaderComponent={<ItemBox />} />
            <View style={{ height: 76 }}/>
            <View style={styles.footer}>
                <View style={styles.btnContainer}>
                    <Animated.View style={[styles.outlineButton, animatedStyles]}>
                        <TouchableOpacity onPress={handleClearAll}>
                            <Animated.Text style={[styles.outlineButtonText, animatedText]}>Clear All</Animated.Text>
                        </TouchableOpacity>
                    </Animated.View>

                    <TouchableOpacity style={styles.fullButton} onPress={() => navigation.goBack()}>
                        <Text style={styles.footerText}>Done</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Filter