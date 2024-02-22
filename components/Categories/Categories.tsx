import { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import supabase from '@/util/supabase';

import { categoriesStyles as styles } from '@/components/Categories/CategoriesStyle';

// import { categories } from '@/assets/data/home'

interface Category {
  id: number;
  name: string;
  imageURL: string;
}

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data, error } = await supabase.from('Category').select('*');
        if (error) {
          throw error;
        }
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []); 

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ padding: 15 }}>
        {
            categories.map((category) => (
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