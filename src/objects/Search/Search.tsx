import React from "react"
import { TextInput, View } from "react-native"
import Icon from "react-native-ico-material-design"
import styles from './styles'

interface SearchProps {
  onSearch: (text: string) => void;
}

export const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const handleTextChange = (text: string) => {
    onSearch(text);
  }

  return (
    <View style={styles.containerPesquisa}>
      <TextInput
        placeholder="Pesquise aqui"
        style={styles.textPesquisa}
        onChangeText={handleTextChange}
      />
      <Icon name="searching-magnifying-glass" color='white' width={30} height={30}/>
    </View>
  )
}
