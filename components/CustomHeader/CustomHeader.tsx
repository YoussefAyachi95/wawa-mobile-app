import { View, Text, Image } from 'react-native'
import React, { useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { Link } from 'expo-router'

import BottomSheet from '@/components/BottomSheet/BottomSheet'
import { BottomSheetModal } from '@gorhom/bottom-sheet'

import { Ionicons } from '@expo/vector-icons'
import Colors from '@/constants/Colors'
import { customHeaderStyles as styles } from '@/components/CustomHeader/CustomHeaderStyles';

const SearchBar = () => {
    return (
        <View style={styles.searchContainer}>
            <View style={styles.searchSection}>
                <View style={styles.searchField}>
                    <Ionicons style={styles.searchIcon} name='ios-search' size={20} color={Colors.medium} />
                    <TextInput style={styles.textInput} placeholder='Baby products, brands, food...' />
                </View>
                <Link href={'/(modal)/(filter)/Filter'} asChild>
                    <TouchableOpacity style={styles.optionButton}>
                        <Ionicons name='options-outline' size={20} color={Colors.purple} />
                    </TouchableOpacity>
                </Link>
            </View>
        </View>
    )
}

const CustomHeader = () => {
    const bottomSheetRef = useRef<BottomSheetModal>(null)


    const openModal = () => {
        bottomSheetRef.current?.present()
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <BottomSheet ref={bottomSheetRef} />
            <View style={styles.container}>
                <TouchableOpacity onPress={openModal}>
                    <Image source={require('@/assets/images/logo.png')} style={styles.logo}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.titleContainer} onPress={openModal}>
                    <Text style={styles.title}>Delivery - Now</Text>
                    <View style={styles.locationName}>
                        <Text style={styles.subtitle}>Köln</Text>
                        <Ionicons name='chevron-down' size={20} color={Colors.purple} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.profileButton}>
                    <Link href={'/(modal)/(login)/Login'}>
                        <Ionicons name='person-outline' size={20} color={Colors.purple}/>
                    </Link>
                </TouchableOpacity>

            </View>
        <SearchBar />
        </SafeAreaView>
    )
}

export default CustomHeader