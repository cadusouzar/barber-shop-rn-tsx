import { StyleSheet } from "react-native";
import { backgroundColor, colorZero, primaryColor, textColor } from "../../style/settings/colors";

const styles = StyleSheet.create({
  texto:{
    fontFamily: 'Montserrat_700Bold',
    color: colorZero, 
    textAlign: 'center'
  },
  textoPix:{
    fontFamily: 'Montserrat_700Bold',
    color: colorZero, 
    textAlign: 'center',
    top: -20,
    fontSize: 20
  },
  textoFechar:{
    fontFamily: 'Montserrat_700Bold',
    color: colorZero, 
    textAlign: 'center',
    fontSize: 20
  },
  buttonPaguei:{
    padding: 15,
    borderRadius: 30,
    backgroundColor: 'cyan',
    top: 40
  },
  Button:{
    backgroundColor: primaryColor,
    padding: 15,
    borderRadius: 30,
    width: 130,
    marginTop: 40
  },
});

export default styles