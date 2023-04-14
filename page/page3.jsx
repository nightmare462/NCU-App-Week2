import React from 'react';
import {Text, View, Button, Image} from 'react-native';

function Page3({ navigation }) {
  return (
    //顯示在螢幕畫面上的都要放在這
    <View style={{alignSelf:'center',alignItems:'center'}}>
      <View style={{width:300,height:300,marginTop:120}}>
        <Image
          style={{width: '100%',height: '100%'}}
          source={{
            uri: 'https://images.plurk.com/6gH1MjysTmhyOORBNxC5qk.png',
          }}
        />
      </View>
      <View style={{width: 300, backgroundColor:'#91B493'}} >
        <Text style = {{fontSize: 20, color:'white', marginLeft:5}}> 克洛格</Text>
      </View>
      <View style={{backgroundColor:'white'}} >
        <Text style = {{textAlign: 'center', width: 300, height: 50, fontSize: 20, marginTop:20}}>
          呀哈哈！</Text>
      </View>
    </View>
  );
}
export default Page3;