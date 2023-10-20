import React from "react"
import { View, Text, Image } from 'react-native'
import styles from "./styles"
import { Texts } from "../../data"
//@ts-ignore
import BarbWhite from '../../images/barbwhite.png'
import { useSelector } from 'react-redux';
import { RootState } from "../../services/redux/store"

export const BemVindo = () => {
  const userData = useSelector((state: RootState) => state.auth.userData)

  function nomeFormatado(nome:string) {
    if(nome){
      const nomes = nome.split(' ');
    
      if (nomes.length >= 2) {
        const primeiroNome = nomes[0].charAt(0).toUpperCase() + nomes[0].slice(1).toLowerCase();
        const segundoNome = nomes[1].charAt(0).toUpperCase() + nomes[1].slice(1).toLowerCase();

        return `${primeiroNome} ${segundoNome}`;
      } else {
        return nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();
      }
    }
  }

  return(
    <View style={{alignItems: 'center'}}>
      <View style={styles.containerTextNome}>
        <Text style={styles.texts}>{Texts.Hello}</Text>
        <Text style={styles.textNome}>{nomeFormatado(userData.nome)}</Text>
      </View>
      <View style={styles.containerTextNome}>
        <Text style={styles.texts}>{Texts.BemVindo}</Text>
      </View>
      <View style={styles.containerTextNome}>
        <Text style={styles.texts}>{Texts.Barbearia}</Text>
      </View>
      <View>
        <Image style={styles.image} source={BarbWhite} />
      </View>
    </View>
  )
}

