import { Image, Text, TouchableOpacity, View } from "react-native"
import styles from './styles'
//@ts-ignore
import ImagePerfil from '../../images/perfil.png'
import { useNavigation } from "@react-navigation/native"; 

export const CardBarbeiro = () => {
  const navigation = useNavigation(); 
  
  const gotoBarbeiro = () => {
    //@ts-ignore
    navigation.navigate('Barbeiro')
  }
  return(
    <View style={styles.container}>
      <TouchableOpacity onPress={gotoBarbeiro} style={styles.containerBarbeiro}>
        <Image source={ImagePerfil} style={styles.imagePerfilBarbeiro}/>
        <Text style={styles.textoBarbeiro}>Carlos Eduardo</Text>
        <Text style={styles.textoBarbeiro}>R$ 30,00</Text>
      </TouchableOpacity>
    </View>
  )
}