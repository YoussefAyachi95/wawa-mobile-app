import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import MapView from 'react-native-maps'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import Colors from '@/constants/Colors'
import { useNavigation } from 'expo-router'
import Autocomplete from 'react-native-autocomplete-input';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons'

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
        latitude: 51.5078788,
        longitude: -0.0877321,
        latitudeDelta: 0.02,
        longitudeDelta: 0.02,
    })
    const [query, setQuery] = useState<string>('');
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [isTyping, setIsTyping] = useState<boolean>(false);

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
                setLocation({
                    latitude: lat,
                    longitude: lng,
                    latitudeDelta: 0.02,
                    longitudeDelta: 0.02
                });
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
                            <Text style={styles.autocompleteText}>{item}</Text>
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

const styles =StyleSheet.create({
    map: {
        flex: 1,
    },
    absoluteBox: {
        position: 'absolute',
        bottom: 20,
        width: '100%'
    },
    button: {
        backgroundColor: Colors.purple,
        padding: 16,
        margin: 16,
        alignItems: 'center',
        borderRadius: 8,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    autocompleteListContainer: {
        
    },
    autocompleteItem: {
        width: '100%',
        padding: 6,
        borderBottomColor: Colors.grey,
        borderBottomWidth: 1,
    },
    autocompleteText: {
    },
    searchInput: {
        backgroundColor: Colors.grey,
        paddingLeft: 35,
        padding: 8,
        borderRadius: 10,
    },
    boxIcon: {
        position: 'absolute',
        left: 15,
        top: 18,
        zIndex: 1,
    },
})

export default LocationSearch