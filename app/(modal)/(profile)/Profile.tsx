import { Text, View, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from 'expo-router';
import { useState } from 'react';

import { useAuthStore } from '@/context/authenticationStore';
import supabase from '@/util/supabase';
import * as ImagePicker from 'expo-image-picker';

import Colors from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';

const Profile = () => {
  const router = useNavigation()
  const { user, setUser } = useAuthStore();
  const [avatarURI, setAvatarURI] = useState(user?.avatar || null);


  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        throw new Error(error.message);
      } else {
        setUser(null);
        router.navigate('index' as never);
      }
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const handleChangeAvatar = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission required', 'Please allow access to your photo library to change your avatar.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setAvatarURI(result.assets[0].uri);
    }
  };

  const handleDeleteAvatar = async () => {
    setAvatarURI(null);
  };

  const handleCheckOrders = () => {
    
  };

  const handleChangeAddress = () => {
    
  };

  const handleAboutUs = () => {
  };


  const handleGiveFeedback = () => {

  };

  const renderAvatarOptions = () => {
    if (avatarURI) {
      return (
        <View style={styles.avatarOptions}>
          <TouchableOpacity style={styles.avatarOptionButton} onPress={handleChangeAvatar}>
            <Ionicons name="image-outline" size={20} color={Colors.mediumDark} />
            <Text style={styles.avatarOptionText}>Change Avatar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.avatarOptionButton} onPress={handleDeleteAvatar}>
            <Ionicons name="trash-outline" size={20} color={Colors.mediumDark} />
            <Text style={styles.avatarOptionText}>Delete Avatar</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <TouchableOpacity style={styles.uploadAvatarButton} onPress={handleChangeAvatar}>
          <Ionicons name="cloud-upload-outline" size={24} color={Colors.mediumDark} />
          <Text style={styles.uploadAvatarText}>Upload Avatar</Text>
        </TouchableOpacity>
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.avatarContainer}>
        {avatarURI ? (
          <TouchableOpacity onPress={() => alert('Avatar clicked')}>
            <Image source={{ uri: avatarURI }} style={styles.avatar} />
          </TouchableOpacity>
        ) : (
          renderAvatarOptions()
        )}
        <Text style={styles.username}>{user ? user.username : 'Guest'}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleLogout}>
          <Ionicons name="log-out-outline" size={24} color="white" />
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleCheckOrders}>
          <Ionicons name="receipt-outline" size={24} color="white" />
          <Text style={styles.buttonText}>Check Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleChangeAddress}>
          <Ionicons name="location-outline" size={24} color="white" />
          <Text style={styles.buttonText}>Change Delivery Address</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleAboutUs}>
          <Ionicons name="information-circle-outline" size={24} color="white" />
          <Text style={styles.buttonText}>About Us</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleGiveFeedback}>
          <Ionicons name="chatbox-ellipses-outline" size={24} color="white" />
          <Text style={styles.buttonText}>Give Feedback</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  avatarPlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: Colors.lightGrey,
    textAlign: 'center',
    lineHeight: 100,
    fontSize: 20,
  },
  username: {
    fontSize: 18,
    marginTop: 10,
  },
  buttonContainer: {
    width: '80%',
    marginTop: 20,
  },
  button: {
    backgroundColor: Colors.purple,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 10,
  },
  avatarOptions: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  avatarOptionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.lightGrey,
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  avatarOptionText: {
    marginLeft: 5,
    color: Colors.mediumDark,
  },
  uploadAvatarButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.lightGrey,
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  uploadAvatarText: {
    marginLeft: 5,
    fontSize: 16,
    color: Colors.mediumDark,
  },
});

export default Profile