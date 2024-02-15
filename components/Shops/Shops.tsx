import { View, Text, Image } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { Link } from 'expo-router'

import Colors from '@/constants/Colors'
import { shopsStyles as styles } from '@/components/Shops/ShopsStyle';

import { shops } from '@/assets/data/home'

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



export default Shops