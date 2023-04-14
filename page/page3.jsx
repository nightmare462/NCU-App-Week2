import React from 'react';
import {Text, View, Button, Image} from 'react-native';

function Page3({ navigation }) {
  return (
    //顯示在螢幕畫面上的都要放在這
    <View style={{alignSelf:'center',alignItems:'center'}}>
      <View style={{width:300,height:300,marginTop:100}}>
        <Image
          style={{width: '100%',height: '100%'}}
          source={{
            uri: 'https://images.plurk.com/6gH1MjysTmhyOORBNxC5qk.png',
          }}
        />
      </View>
      <View style={{width: 300, backgroundColor:'#91B493'}} >
        <Text style = {{textAlign: "left", fontSize: 20}}> 克洛格</Text>
      </View>
      {/* <View style={{height:20}}></View> */}
      <View style={{backgroundColor:'white'}} >
        <Text style = {{textAlign: 'center', width: 300, height: 100, fontSize: 20}}>
          呀哈哈！</Text>
      </View>
    </View>
  );
}
export default Page3;