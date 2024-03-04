import { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from 'expo-router'
import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from 'expo-location';


import axios from 'axios';
import MapView from 'react-native-maps'
import Autocomplete from 'react-native-autocomplete-input';

import Colors from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import { locationSearchStyles as styles } from '@/app/(modal)/(location)/LocationSearchStyle'
import useLocationStore from '@/context/locationStore';

interface Prediction {
    description: string;
}

interface Location {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
}

interface Geometry {
    location: {
        lat: number;
        lng: number;
    };
}


const LocationSearch = () => {
    const navigation = useNavigation()
    const [location, setLocation] = useState<Location>({
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0.02,
        longitudeDelta: 0.02,
    });
    const [query, setQuery] = useState<string>('');
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [isTyping, setIsTyping] = useState<boolean>(false);

    useEffect(() => {
        fetchUserLocation();
      }, []);
    
      const fetchUserLocation = async () => {
        const { status } = await requestForegroundPermissionsAsync();
        if (status === 'granted') {
          const { coords } = await getCurrentPositionAsync({});
          setLocation({
            latitude: coords.latitude,
            longitude: coords.longitude,
            latitudeDelta: 0.02,
            longitudeDelta: 0.02,
          });
          useLocationStore.getState().setSelectedLocation({
            latitude: coords.latitude,
            longitude: coords.longitude,
            latitudeDelta: 0.02,
            longitudeDelta: 0.02,
          });
        }
      };

    useEffect(() => {
        const debounce = setTimeout(() => {
            if (isTyping && query.trim() !== '') {
                fetchSuggestions();
            }
        }, 500);

        return () => clearTimeout(debounce);
    }, [query, isTyping]);

    const fetchSuggestions = async () => {
        try {
            const response = await axios.get<{ predictions: Prediction[] }>(process.env.EXPO_PUBLIC_RAPID_API_URL_AUTOCOMPLETE as string, {
                params: {
                    input: query,
                    radius: '50000'
                },
                headers: {
                    'X-RapidAPI-Key': process.env.EXPO_PUBLIC_RAPID_API_KEY,
                    'X-RapidAPI-Host': process.env.EXPO_PUBLIC_RAPID_API_HOST
                }
            });
            if (response.data && response.data.predictions) {
                setSuggestions(response.data.predictions.map(prediction => prediction.description));
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleInputChange = (text: string) => {
        setIsTyping(true);
        setQuery(text);
        if (text.trim() === '') {
            setSuggestions([]);
        }
    };

    const handleInputBlur = () => {
        setIsTyping(false);
        if (query.trim() === '') {
            setSuggestions([]);
        }
    };

    const handleLocationSelection = async (selectedLocation: string) => {
        try {
            const response = await axios.get<{ candidates: { formatted_address: string; geometry: Geometry }[] }>(process.env.EXPO_PUBLIC_RAPID_API_KEY_SEARCH as string, {
                params: {
                    input: selectedLocation,
                    inputtype: 'textquery',
                    fields: 'formatted_address,name,rating,opening_hours,geometry'
                },
                headers: {
                    'X-RapidAPI-Key': process.env.EXPO_PUBLIC_RAPID_API_KEY,
                    'X-RapidAPI-Host': process.env.EXPO_PUBLIC_RAPID_API_HOST
                }
            });
            if (response.data && response.data.candidates && response.data.candidates.length > 0) {
                const candidate = response.data.candidates[0];
                const { lat, lng } = candidate.geometry.location;
                const selectedLocation = {
                    latitude: lat,
                    longitude: lng,
                    latitudeDelta: 0.02,
                    longitudeDelta: 0.02
                };
                useLocationStore.getState().setSelectedLocation(selectedLocation);
            }
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <View style={{ flex: 1 }}>
            <Autocomplete
                placeholder='Search or move the map...'
                data={suggestions}
                defaultValue={query}
                onChangeText={handleInputChange}
                onBlur={handleInputBlur}
                flatListProps={{
                    keyExtractor: (_, index) => index.toString(),
                    renderItem: ({ item }) => (
                        <TouchableOpacity style={styles.autocompleteItem} onPress={() => handleLocationSelection(item)}>
                            <Text>{item}</Text>
                        </TouchableOpacity>
                    ),
                }}
                containerStyle={{ flex: 0 }}
                inputContainerStyle= {{
                    backgroundColor: '#fff',
                    padding: 8,
                }}
                listContainerStyle={styles.autocompleteListContainer}
                renderTextInput={() => (
                    <>
                        <View style={styles.boxIcon}>
                            <Ionicons name="search-outline" size={24} color={Colors.medium} />
                        </View>
                            <TextInput
                                style={styles.searchInput}
                                placeholder="Search or move the map..."
                                value={query}
                                onChangeText={handleInputChange}
                                onBlur={handleInputBlur}
                            />
                    </>
                )}
            />
            <MapView showsUserLocation={true} style={styles.map} region={location} />
            <View style={styles.absoluteBox}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                    <Text style={styles.buttonText}>Confirm</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


export default LocationSearch