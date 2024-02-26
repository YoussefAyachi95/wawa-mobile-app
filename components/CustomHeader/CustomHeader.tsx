import { View, Text, Image } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { Link, useNavigation } from 'expo-router'
import { useAuthStore } from '@/context/authenticationStore'

import BottomSheet from '@/components/BottomSheet/BottomSheet'
import { BottomSheetModal } from '@gorhom/bottom-sheet'

import { Ionicons } from '@expo/vector-icons'
import Colors from '@/constants/Colors'
import { customHeaderStyles as styles } from '@/components/CustomHeader/CustomHeaderStyles';
import useLocationStore from '@/context/locationStore'
import axios from 'axios'

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
    const { selectedLocation } = useLocationStore();
    const [cityName, setCityName] = useState<string>('');

    useEffect(() => {
        if (selectedLocation) {
            fetchCityName(selectedLocation.latitude, selectedLocation.longitude);
        }
    }, [selectedLocation]);

    const fetchCityName = async (latitude: number, longitude: number) => {
        try {
            const options = {
                method: 'GET',
                url: 'https://trueway-geocoding.p.rapidapi.com/ReverseGeocode',
                params: {
                    location: `${latitude},${longitude}`,
                    language: 'en'
                },
                headers: {
                    'X-RapidAPI-Key': process.env.EXPO_PUBLIC_RAPID_API_KEY,
                    'X-RapidAPI-Host': process.env.EXPO_PUBLIC_RAPID_API_TRUEWAY_HOST
                }
            };

            const response = await axios.request(options);
            if (response.data && response.data.results && response.data.results.length > 0) {
                const formattedAddress = formatAddress(response.data);
                setCityName(formattedAddress);
            }
        } catch (error) {
            console.error('Error fetching city name:', error);
        }
    };

    const formatAddress = (data: any) => {
        const address = data.results[0];
        if (!address) return '';
        const city = address.locality || address.area || '';
        return `${city}`;
    };


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
                    {cityName ? (
                            <>
                                <Text style={styles.subtitle}>{cityName}</Text>
                                <Ionicons name='chevron-down' size={20} color={Colors.purple} />
                            </>
                        ) : (
                            <Text style={styles.subtitle}>No location selected</Text>
                    )}
                    </View>
                </TouchableOpacity>

                {user ? (
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