import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import MapView from 'react-native-maps'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Colors from '@/constants/Colors'
import { useNavigation } from 'expo-router'

const LocationSearch = () => {
    const navigation = useNavigation()
    const [location, setLocation] = useState({
        latitude: 51.5078788,
        longitude: -0.0877321,
        latitudeDelta: 0.02,
        longitudeDelta: 0.02,
    })


    return (
        <View style={{ flex: 1 }}>
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