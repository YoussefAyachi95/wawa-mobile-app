import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native-gesture-handler'

import Categories from '@/components/Categories/Categories'
import Shops from '@/components/Shops/Shops'

import { globalStyles as styles } from '@/app/globalStyles'

const Page = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <Categories />
        <Text style={styles.header}>Top picks in your neighborhood</Text>
        <Shops />
        <Text style={styles.header}>Offers near you</Text>
        <Shops />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Page