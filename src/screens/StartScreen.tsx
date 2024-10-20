import { View, Text, Image } from 'react-native'
import React from 'react'
import { style } from '../style/font_style'

const StartScreen = () => {
  return (
    <View style={{
      backgroundColor: 'black',
      flex: 1,
      position: 'relative',
    }}>
      <Image source={require('../../assets/startBackground.png')} style={{
        width: '100%',
        height: 500,
      }}/>
      <View style={{
        position: 'absolute', 
        bottom: 0, 
        justifyContent: 'center', 
        alignItems: 'center', 
       width: '100%'
        }} >
        <Text style={[style.whiteLarge, {textAlign: 'center', width: 280},]} > Coffee so good, your taste buds will love it.</Text>
        <Text style={[style.whiteHint, {width: 270, textAlign: 'center'}]} > The best grain, the finest roast, the powerful flavor. </Text>
        <View style={}>
          <Text style={style.whiteMedium}> Get Started </Text>
        </View>
      </View>
    </View>
  )
}

export default StartScreen