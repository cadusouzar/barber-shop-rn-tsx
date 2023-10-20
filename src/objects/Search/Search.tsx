import React from "react"
import { TextInput, View } from "react-native"
import Icon from "react-native-ico-material-design"
import styles from './styles'

export const Search = () => {
  return(
    <View style={styles.containerPesquisa}>
      <TextInput
      placeholder="Pesquise aqui"
     style={styles.textPesquisa}
      />
     <Icon name="searching-magnifying-glass" color='white' width={30} height={30}/>
    </View>
  )
}