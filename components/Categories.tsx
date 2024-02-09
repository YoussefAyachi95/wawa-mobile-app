import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { categories } from '@/assets/data/home'
import { ScrollView } from 'react-native-gesture-handler'

const Categories = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ padding: 15 }}>
        {
            categories.map((category, index) => (
                <View style={styles.categoryCard} key={index}>
                    <Image source={category.img} style={styles.categoryImage} resizeMode="cover" />
                    <Text style={styles.categoryText}>{category.name}</Text>
                </View>
            ))
        }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    categoryCard: {
        width: 100,
        height: 150,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 50,
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
    categoryImage: {
        width: '100%',
        height: '70%', 
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
    },
    categoryText: {
        padding: 6,
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center', 
        flexWrap: 'wrap',
        flex: 1,
    },
})

export default Categories