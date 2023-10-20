import React from 'react'
import styles from './styles'
import { View, Text } from 'react-native'
import { Mapa  } from '../../components/Mapa'
import { Contatos } from "../../components/Contatos"

export const Localizacao = () => {
  return(
    <>
      <View style={styles.containerMap}>
        <Mapa/>
        <Text style={styles.textoEndereco}>Endereço aqui digitado</Text>
      </View>
      <View style={styles.containerContato}>
        <Contatos/>
      </View>
    </>
  )
}