import React, {useEffect, useState} from "react"
import { View, Text } from 'react-native'
import { LottieButton } from '../../objects/Lottie'
import styles from './styles'
import { Linking } from 'react-native';
import { useSelector } from "react-redux"
import { RootState } from "services/redux/store"
import { api } from "../../services/api";

export const Contatos = () => {
  const [whatsapp, setWhatsapp] = useState('')
  const [telefone, setTelefone] = useState('')

  useEffect(() => {
    api.get('/Barbearia/Barbearia')
      .then((resp) => {
        if (resp.data) {
          setWhatsapp(resp.data.whatsapp)
          setTelefone(resp.data.telefone)
        }
      })
      .catch((err) => console.log(err));
  }, []);


  const handleWhatsapp = () => {
    Linking.openURL(`https://api.whatsapp.com/send?phone=${whatsapp}`)
  };
  const handleTelefone = () => {
    Linking.openURL(`tel:${telefone}`)
  };
  return(
    <>
      <Text style={styles.textoContato}>Contatos</Text>
      <View style={{flexDirection: 'row', top: -40, left: 10}}>
        <LottieButton variant="variant1" onPress={handleWhatsapp} style={{width: 100, heigth:100}}/>
        <LottieButton variant="variant2" onPress={handleTelefone} style={{width: 115, heigth:100}}/>
      </View>
    </>
  )
}