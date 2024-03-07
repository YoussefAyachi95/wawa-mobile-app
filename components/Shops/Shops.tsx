import { useEffect } from 'react';
import { View, Text, Image } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { Link } from 'expo-router'

import Colors from '@/constants/Colors'
import { shopsStyles as styles } from '@/components/Shops/ShopsStyle';

import useShopStore from '@/context/shopsStore';
import { truncateString } from '@/util/truncateString';

const Shops = () => {
  const { shops, fetchShops } = useShopStore();

  useEffect(() => {
    fetchShops();
  }, []);

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ padding: 15 }}>
        {
            shops.map((shop, index) => (
              <Link href={'/details'} key={index} asChild>
                <TouchableOpacity>
                    <View style={styles.categoryCard}>
                        <Image source={{ uri: shop.img }} style={styles.image} />
                        <View style={styles.categoryBox}>
                            <Text style={styles.categoryText}>
                                {shop.name} - {truncateString(shop.location, 30)}
                            </Text>
                            <Text style={{ color: Colors.green }}>
                                {`${shop.rating} ⭐`}  ({`${shop.ratings} reviews`})
                            </Text>
                            <Text style={{ color: Colors.medium }}>
                                {`${shop.distance} km away from you`}
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