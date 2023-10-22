import { Image, Text, TextStyle, TouchableOpacity, View } from "react-native"
import styles from './styles'
//@ts-ignore
import ImagePerfil from '../../images/perfil.png'
import { useSelector } from "react-redux";
import { RootState } from "services/redux/store";
import { colorNavTop } from "../../style/settings";

type PropsCardBarbeiro = {
  nomeBarbeiro: string
  valorCorte: string
  handlePress?: () => void
}

export const CardBarbeiro:React.FC<PropsCardBarbeiro> = ({nomeBarbeiro, valorCorte, handlePress}) => {
  const userData = useSelector((state: RootState) => state.auth.userData)
  
  const containerBarbeiro:TextStyle  = {
    backgroundColor: colorNavTop,
    height: userData.tipoAcesso == 'cliente' ? 190 : 245,
    width: '45%',
    alignItems: 'center',
    borderRadius: 20,
    elevation: 20,
    margin: 7
  }

  return(
  <>
    {userData.tipoAcesso == 'cliente' ? 
      <TouchableOpacity onPress={handlePress} style={containerBarbeiro}>
        <Image source={ImagePerfil} style={styles.imagePerfilBarbeiro}/>
        <Text style={styles.textoBarbeiro}>{nomeBarbeiro}</Text>
        <Text style={styles.textoBarbeiro}>{valorCorte}</Text>
      </TouchableOpacity>
  :     
    <View style={containerBarbeiro}>
      <Image source={ImagePerfil} style={styles.imagePerfilBarbeiro}/>
      <Text style={styles.textoBarbeiro}>{nomeBarbeiro}</Text>
      <Text style={styles.textoBarbeiro}>{valorCorte}</Text>
      <TouchableOpacity onPress={handlePress} style={styles.containerBarbeiroDelete}>
        <Text style={styles.textoDelete}>Remover Barbeiro</Text>
      </TouchableOpacity>
    </View>
    } 
  </>

  )
}