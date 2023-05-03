import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Button, Image, StyleSheet, FlatList, Alert } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

const App = () => {
  const [images, setImages] = useState([]);
  const navigation = useNavigation();

  const pickImages = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        selectionLimit: 5, // limit the number of images to pick
      },
      response => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else {
          const selectedImages = response.assets.map(asset => ({
            uri: asset.uri,
            type: asset.type,
            name: asset.fileName || asset.uri.split('/').pop(),
          }));
          setImages([...images, ...selectedImages]);
        }
      },
    );
  };
  
  const uploadImages = () => {
    // implement image upload logic here using fetch or axios
    console.log(images);
  };

  const renderItem = ({ item }) => (
    <Image source={{ uri: item.uri }} style={styles.image} />
  );

  return (
    <View style={styles.container}>
      <Button title="Pick Images" onPress={pickImages} />

      {/* <Button title="Upload Images" onPress={uploadImages} disabled={!images.length} /> */}
      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={item => item.uri}
        numColumns={3}
      />

      {/* Back button */}
      <Button
        title="Back"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
  },
});

export default App;
