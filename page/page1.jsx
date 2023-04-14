import React from 'react';
import {Text, View, Button, Image} from 'react-native';

function Page1({ navigation }) {
  return (
    //顯示在螢幕畫面上的都要放在這
    <View style={{alignSelf:'center',alignItems:'center'}}>
      <View style={{width:240,height:200,marginTop:200}}>
        <Image
          style={{width: '100%',height: '100%'}}
          source={{
            uri: 'https://images.plurk.com/37SF6qx1U0XwcwTcsojass.png',
          }}
        />
      </View>
      <View style = {{width:300,height:10}}></View>
      <Button
          title="舉起"
          onPress={() => navigation.navigate('Next')}
        />  
    </View>
  );
}
export default Page1;