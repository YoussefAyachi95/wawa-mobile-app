import { useEffect } from 'react';
import { View, Text, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import useCategoryStore, { Category } from '@/context/categoriesStore';

import { categoriesStyles as styles } from '@/components/Categories/CategoriesStyle';


const Categories = () => {
  const { categories, fetchCategories } = useCategoryStore();

  useEffect(() => {
    fetchCategories();
  }, []); 

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ padding: 15 }}>
        {
            categories.map((category: Category) => (
                <View style={styles.categoryCard} key={category.id}>
                    <Image source={{uri: category.imageURL}} style={styles.categoryImage} resizeMode="cover" />
                    <Text style={styles.categoryText}>{category.name}</Text>
                </View>
            ))
        }
    </ScrollView>
  )
}


export default Categories