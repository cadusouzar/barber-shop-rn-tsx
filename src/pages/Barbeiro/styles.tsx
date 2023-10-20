import { StyleSheet } from "react-native";
import { backgroundColor, colorZero, primaryColor, textColor } from "../../style/settings/colors";

const styles = StyleSheet.create({
  containerPerfil:{
    marginTop: 70,
    alignItems: 'center',
  },
  Perfil:{
    alignItems: 'center'
  },
  fotoPerfil:{ 
    width: 200,
    height: 200, 
  },
  nomePerfil:{
    fontSize: 22, 
    paddingTop: 15, 
    fontFamily: 'Montserrat_700Bold',
    paddingBottom: 8,
    color: colorZero,
    textAlign: 'center'
  },
  dadosPerfil:{
    fontSize: 18,
    fontFamily: 'Montserrat_700Bold',
    color: colorZero,
    textAlign: 'center'
  },
  containerBotoesTempo:{
    flexDirection: 'row',
    justifyContent: 'center'
  },
  buttonTempo:{
    backgroundColor: primaryColor,
    padding: 15,
    borderRadius: 30,
    width: 170,
    marginRight: 10,
    marginLeft: 10,
    top: 200
  },
  containerButton:{
    alignItems: 'center',
    top: 190
  },
  Button:{
    backgroundColor: primaryColor,
    padding: 15,
    borderRadius: 30,
    width: 130,
    marginTop: 40
  },
  textButton:{
    fontFamily: 'Montserrat_700Bold', 
    color: colorZero, 
    textAlign: 'center'
  }
});

export default styles