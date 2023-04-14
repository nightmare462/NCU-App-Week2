import React from 'react';
import {Text, View, Button, Image} from 'react-native';

function Page2({ navigation }) {
  return (
    
    <View style={{alignSelf:'center',alignItems:'center'}}>
      <View style={{width: 300, backgroundColor:'#91B493', marginTop: 420}} >
        <Text style = {{fontSize: 20, color:'white', marginLeft:5}}> 經過</Text>
      </View>
      <View style={{backgroundColor:'white'}} >
        <Text style = {{textAlign: 'center', width: 300, height: 50, fontSize: 20, marginTop:20}}>
        ...有點在意</Text>
      </View>
      <View style={{ height:40, backgroundColor: '#91B493', marginTop:20 }}>
        <Button
          title="回頭查看"
          color={'white'}
          onPress={() => navigation.goBack()}/>
      </View>
    </View>
    
  );
}
export default Page2;