import React from "react"
import { View, Text } from 'react-native'
import { LottieButton } from '../../objects/Lottie'
import styles from './styles'

export const Contatos = () => {
  const handleButtonPress = () => {
    console.log('Botão pressionado');
  };
  return(
    <>
      <Text style={styles.textoContato}>Contatos</Text>
      <View style={{flexDirection: 'row', top: -40, left: 10}}>
        <LottieButton variant="variant1" onPress={handleButtonPress} style={{width: 100, heigth:100}}/>
        <LottieButton variant="variant2" onPress={handleButtonPress} style={{width: 115, heigth:100}}/>
      </View>
    </>
  )
}