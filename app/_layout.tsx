import { TouchableOpacity } from 'react-native-gesture-handler';
import { Stack, useNavigation } from 'expo-router';

import CustomHeader from '@/components/CustomHeader/CustomHeader';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

import { Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'index',
};

export default function RootLayoutNav() {
  const navigation = useNavigation()

  return (
    <BottomSheetModalProvider>
      <Stack>
        <Stack.Screen 
          name="index" 
          options={{
            header: () => <CustomHeader />
          }}
        />
        <Stack.Screen 
          name='(modal)/(filter)/Filter'
          options={{
            presentation: 'modal',
            headerTitle: 'Filter',
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: Colors.lightGrey,
            },
            headerLeft: () => (
              <TouchableOpacity onPress={() => {navigation.goBack()}}>
                <Ionicons name='close-outline' size={28} color={Colors.purple} />
              </TouchableOpacity>
            )
          }}
       />
       <Stack.Screen 
          name='(modal)/(login)/Login'
          options={{
            presentation: 'modal',
            headerTitle: 'Login',
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: Colors.lightGrey,
            },
            headerLeft: () => (
              <TouchableOpacity onPress={() => {navigation.goBack()}}>
                <Ionicons name='close-outline' size={28} color={Colors.purple} />
              </TouchableOpacity>
            )
          }}
       />
       <Stack.Screen 
          name='(modal)/(register)/Register'
          options={{
            presentation: 'modal',
            headerTitle: 'Register',
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: Colors.lightGrey,
            },
            headerLeft: () => (
              <TouchableOpacity onPress={() => {navigation.goBack()}}>
                <Ionicons name='close-outline' size={28} color={Colors.purple} />
              </TouchableOpacity>
            )
          }}
       />
       <Stack.Screen 
          name='(modal)/(location)/LocationSearch'
          options={{
            presentation: 'fullScreenModal',
            headerTitle: 'Select Location',
            headerLeft: () => (
              <TouchableOpacity onPress={() => {navigation.goBack()}}>
                <Ionicons name='close-outline' size={28} color={Colors.purple} />
              </TouchableOpacity>
            )
          }}
       />
       <Stack.Screen 
          name='(modal)/(product)/Product'
          options={{
            presentation: 'modal',
            headerTitle: '',
            headerTransparent: true,
            headerLeft: () => (
              <TouchableOpacity 
                style={{ backgroundColor: '#fff', borderRadius: 20, padding: 6 }}
                onPress={() => {navigation.goBack()}}>
                <Ionicons name='close-outline' size={28} color={Colors.purple} />
              </TouchableOpacity>
            )
          }}
       />
       <Stack.Screen 
          name='(modal)/(profile)/Profile'
          options={{
            presentation: 'modal',
            headerTitle: '',
            headerTransparent: true,
            headerLeft: () => (
              <TouchableOpacity 
                style={{ backgroundColor: '#fff', borderRadius: 20, padding: 6 }}
                onPress={() => {navigation.goBack()}}>
                <Ionicons name='close-outline' size={28} color={Colors.purple} />
              </TouchableOpacity>
            )
          }}
       />
       <Stack.Screen 
          name='(basket)/basket'
          options={{
            headerTitle: 'Basket',
            headerLeft: () => (
              <TouchableOpacity 
                onPress={() => {navigation.goBack()}}>
                <Ionicons name='arrow-back' size={28} color={Colors.purple} />
              </TouchableOpacity>
            )
          }}
       />
      </Stack> 
    </BottomSheetModalProvider>
  );
}
