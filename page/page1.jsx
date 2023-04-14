import React from 'react';
import {Text, View, Button, Image} from 'react-native';

function Page1({ navigation }) {
  return (
    //顯示在螢幕畫面上的都要放在這
    <View style={{flex:1, alignSelf:'center',alignItems:'center', justifyContent:'center'}}>
      {/* 圖片 */}
      <View style={{width:240,height:200, marginTop:200}}>
        <Image
          style={{width: '100%',height: '100%'}}
          source={{
            uri: 'https://images.plurk.com/37SF6qx1U0XwcwTcsojass.png',
          }}
        />
      </View>

      {/* 對話框 */}
      <View style={{width: 300, backgroundColor:'#91B493', marginTop: 20}} >
        <Text style = {{fontSize: 20, color:'white', marginLeft:5}}> 石頭</Text>
      </View>
      <View style={{backgroundColor:'white'}} >
        <Text style = {{textAlign: 'center', width: 300, height: 50, fontSize: 20, marginTop:20}}>
        只是一顆石頭</Text>
      </View>

      {/* 按鈕 */}
      <View style={{ flex: 1, flexDirection: 'row',marginTop:20 }}>
        <View style={{ height:40, backgroundColor: '#91B493' }}>
          <Button
            title="手持"
            color={'white'}
            onPress={() => navigation.navigate('PickUp')}
          />  
        </View>
        <View style={{ height:50, width: 50}}/>
        <View style={{ height:40,backgroundColor: '#91B493' }}>
            <Button
            title="經過"
            color={'white'}
            onPress={() => navigation.navigate('Ignore')}
          />
        </View>
      </View>
    </View>
  );
}
export default Page1;