import * as React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

const Home = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#fff' }}>
        <Image
              source={require('../images/koliseo_drb.gif')}
              style={{ width: "200%", height: "70%" }}
            />
            <View style={styles.Button}>
            <Button color="#7B1ADB" onPress = {() => navigation.navigate('QrScanner')} title='Qr, Barcode Уншуулах'></Button>
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({

Button: {
  textAlign: 'center',
  marginVertical: 8,
  borderRadius: 5
},
});