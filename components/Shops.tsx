import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { shops } from '@/assets/data/home'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { Link } from 'expo-router'
import Colors from '@/constants/Colors'

const Shops = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ padding: 15 }}>
        {
            shops.map((shop, index) => (
              <Link href={'/details'} key={index} asChild>
                <TouchableOpacity>
                    <View style={styles.categoryCard}>
                        <Image source={shop.img} style={styles.image} />
                        <View style={styles.categoryBox}>
                            <Text style={styles.categoryText}>
                                {shop.name}
                            </Text>
                            <Text style={{ color: Colors.green }}>
                                {shop.rating}  ({shop.ratings})
                            </Text>
                            <Text style={{ color: Colors.medium }}>
                                {shop.distance}
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
              </Link>
            ))
        }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  categoryCard: {
      width: 300,
      height: 250,
      backgroundColor: '#fff',
      marginEnd: 10,
      elevation: 2,
      shadowColor: '#000',
      shadowOffset: {
          width: 0,
          height: 4,
      },
      shadowOpacity: 0.06,
      borderRadius: 4,
  },
  categoryText: {
      paddingVertical: 5,
      fontSize: 14,
      fontWeight: 'bold',
  },
  image: {
    flex: 5,
    width: undefined,
    height: undefined 
  },
  categoryBox: {
    flex: 2,
    padding: 10,
  },
})

export default Shops