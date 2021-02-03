import * as React from 'react';
import { Text, View, StyleSheet, Button, BackHandler, ImageBackground } from 'react-native'; 


export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
    <ImageBackground source={require('../mainimage.jpg')} style={styles.image}>
       <Button
        title="Play"
        onPress={() => navigation.navigate("Play")}
      />
      <Button
        title="How To Play?"
        onPress={() => navigation.navigate("How To Play?")}
      />
      <Button
        title="Exit"
        onPress={() => BackHandler.exitApp()}
      />
    </ImageBackground>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
   image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
});
