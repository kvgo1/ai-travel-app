import { View, Text, Image,StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors';

export default function Login() {
  return (
    <View>
      <Image source={require('./../assets/images/travelnew.jpeg')}
       style={{
        
        height:500,
        width:412,
      }}
      />
      <View style={styles.container}>
        <Text style={{
            fontSize:28,
            fontFamily:'outfit-bold',
        }}>  AI Travel Planner</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:
    {
        backgroundColor:Colors.WHITE,
        marginTop:-20,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        height:'100%',
        padding:15,
    }
    
});