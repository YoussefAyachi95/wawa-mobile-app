import { View, Text, Image } from 'react-native'
import React, { useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { Link, useNavigation } from 'expo-router'
import { useAuthStore } from '@/context/authenticationStore'

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
    const navigation = useNavigation(); 
    const { user } = useAuthStore();

    console.log(user)

    const openModal = () => {
        bottomSheetRef.current?.present()
    }

    const handleProfilePress = () => {
        if (user) {
            navigation.navigate('(modal)/(profile)/Profile' as never); 
        } else {
            navigation.navigate('(modal)/(login)/Login' as never);
        }
    };

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

                {user && user !== null ? (
                    <TouchableOpacity style={styles.profileButton} onPress={handleProfilePress}>
                        <Ionicons name='person-outline' size={20} color={Colors.purple}/>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity style={styles.profileButton} onPress={handleProfilePress}>
                        <Ionicons name='log-in-outline' size={20} color={Colors.purple}/>
                    </TouchableOpacity>
                )}

            </View>
        <SearchBar />
        </SafeAreaView>
    )
}

export default CustomHeader