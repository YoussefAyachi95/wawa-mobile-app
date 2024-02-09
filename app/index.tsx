import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Categories from '@/components/Categories'
import Shops from '@/components/Shops'
import { ScrollView } from 'react-native-gesture-handler'
import Colors from '@/constants/Colors'

const Page = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Categories />
        <Text style={styles.header}>Top picks in your neighborhood</Text>
        <Shops />
        <Text style={styles.header}>Offers near you</Text>
        <Shops />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
      top: 100,
      backgroundColor: Colors.lightGrey,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    paddingHorizontal: 16,
  }
})

export default Page