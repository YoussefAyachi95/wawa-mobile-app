import { View, Text, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import { categoriesStyles as styles } from '@/components/Categories/CategoriesStyle';

import { categories } from '@/assets/data/home'

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


export default Categories