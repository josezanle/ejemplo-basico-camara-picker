import React, {useState} from 'react';
import {Button, StyleSheet, Text, View, Image} from 'react-native';

// image picker crop tiene 3 config..buscar documantacion para android

import ImagePicker from 'react-native-image-crop-picker';

const App = () => {
  const [imageState, setTempUri] = useState('');

  const openGallery = () => {
    ImagePicker.openPicker({
      width: 400,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(JSON.stringify(image, null, 3));
      setTempUri(image.path);
    });
  };

  return (
    <View style={styles.fondo}>
      <Text style={styles.text}>Hello Camara </Text>
        <Image source={{uri: imageState}} style={styles.image} />
      <Button title="Open Gallery" onPress={openGallery} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  fondo: {
    backgroundColor: 'coral',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    color: 'white',
  },
  image: {
    width: 300,
    height: 300,
    marginVertical: 20,
  },
});
