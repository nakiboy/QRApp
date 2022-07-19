import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Button, TextInput, SafeAreaView , text, number, ScrollView, Image} from 'react-native';

const App = ({navigation}) => {
  const image = { uri: "https://i.vippng.com/png/small/380-3801441_qr-code-motif.png" };

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState(null);

  return (
    <SafeAreaView>
    <ScrollView>
    <ImageBackground source={image} resizeMode='cover' style={styles.container}>
    <Image style={styles.logo}
            source={require('../images/images.png')}>
            </Image>
    <Text style={styles.text}>Нэвтрэх</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={Email}
        placeholder="И-мэйл оруулах"
        keyboardType='email-address'
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={Password}
        placeholder="Нууц үг оруулах"
        secureTextEntry
      />
      <View style={styles.Button}>
       <Button style={styles.Button} color="#7B1ADB"  onPress = {() => navigation.navigate('MainContainer')} title='Start'></Button>
       </View>
      <StatusBar style="auto" />
    </ImageBackground>
    </ScrollView>
    </SafeAreaView>
  );
}
export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 95
  },
  textStyle: {
    color: "#ffffff",
    backgroundColor: "#00000099",
    padding: 16,
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 2,
    padding: 10,
    color: 'black',
    borderRadius:4,
    width: "150%"
  },
  text:{
    fontSize: 40,
    color: '#000000',
    fontStyle:'normal'
  },
  Button:{
    width:"95%",
    padding: 10,
  },
  logo:{
    width:"95%",
  }
});
