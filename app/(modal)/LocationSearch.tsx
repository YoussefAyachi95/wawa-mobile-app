import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import MapView from 'react-native-maps'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Colors from '@/constants/Colors'
import { useNavigation } from 'expo-router'
import Autocomplete from 'react-native-autocomplete-input';
import axios from 'axios';

interface Prediction {
    description: string;
}


const LocationSearch = () => {
    const navigation = useNavigation()
    const [location, setLocation] = useState({
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
            const response = await axios.get<{ predictions: Prediction[] }>(process.env.EXPO_PUBLIC_RAPID_API_URL as string, {
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

    return (
        <View style={{ flex: 1 }}>
            <Autocomplete
                data={suggestions}
                defaultValue={query}
                onChangeText={handleInputChange}
                onBlur={handleInputBlur}
                flatListProps={{
                    keyExtractor: (_, idx) => idx.toString(),
                    renderItem: ({ item }) => (
                        <TouchableOpacity onPress={() => setQuery(item)}>
                            <Text>{item}</Text>
                        </TouchableOpacity>
                    ),
                }}
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
})

export default LocationSearch