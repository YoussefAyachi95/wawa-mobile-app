import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'
import Colors from '@/constants/Colors'
import { Link } from 'expo-router'

const SearchBar = () => {
    return (
        <View style={styles.searchContainer}>
            <View style={styles.searchSection}>
                <View style={styles.searchField}>
                    <Ionicons style={styles.searchIcon} name='ios-search' size={20} color={Colors.medium} />
                    <TextInput style={styles.textInput} placeholder='Baby products, brands, food...' />
                </View>
                <Link href={'/'} asChild>
                    <TouchableOpacity style={styles.optionButton}>
                        <Ionicons name='options-outline' size={20} color={Colors.purple} />
                    </TouchableOpacity>
                </Link>
            </View>
        </View>
    )
}

const CustomHeader = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TouchableOpacity>
            <Image source={require('@/assets/images/logo.png')} style={styles.logo}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.titleContainer}>
            <Text style={styles.title}>Delivery - Now</Text>
            <View style={styles.locationName}>
                <Text style={styles.subtitle}>Köln</Text>
                <Ionicons name='chevron-down' size={20} color={Colors.purple} />
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.profileButton}>
            <Ionicons name='person-outline' size={20} color={Colors.purple}/>
        </TouchableOpacity>

      </View>
      <SearchBar />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 5,
    },
    container: {
        height: 60,
        backgroundColor: '#fff',
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    titleContainer: {
        flex: 1,
        marginRight: 140,
        marginTop: 8,
    },
    logo: {
        width: 40,
        height: 40,
    },
    profileButton: {
        backgroundColor: Colors.lightGrey,
        padding: 10,
        borderRadius: 50,
    },
    title: {
        fontSize: 14,
        color: Colors.medium,
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    locationName: {
        flexDirection: 'row', 
        alignItems: 'center' 
    },
    searchContainer: {
        height: 60,
        backgroundColor: '#fff'
    },
    searchSection: {
        flexDirection: 'row',
        gap: 10,
        paddingHorizontal: 20,
        alignItems: 'center'
    },
    searchField: {
        flex: 1,
        backgroundColor: Colors.lightGrey,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
    },
    textInput: {
        padding: 10,
        color: Colors.mediumDark,
    },
    searchIcon: {
        paddingLeft: 10,
    },
    optionButton: {
        padding: 10,
        borderRadius: 50,
    },
})

export default CustomHeader