import React from 'react';
import {Text, View, Button, Image} from 'react-native';

function page2({ navigation }) {
  return (
    //顯示在螢幕畫面上的都要放在這
    <View style={{alignSelf:'center',alignItems:'center'}}>
      <View style={{width:240,height:200,marginTop:200}}>
        <View style={styles.fixToText}>
            <Text>經過</Text>
            <Button
            title="回頭查看"
            onPress={() => navigation.goBack()}
            />
        </View>
      </View>
    </View>
  );
}
export default page2;