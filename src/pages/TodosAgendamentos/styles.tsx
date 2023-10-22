import { StyleSheet } from "react-native";
import { backgroundColor, colorZero, primaryColor, textColor } from "../../style/settings/colors";

const styles = StyleSheet.create({
  containerData:{
    padding: 15,borderRadius: 30,
    backgroundColor: primaryColor, 
    width: '70%', 
    alignItems: 'center', 
    marginBottom: 20
  },
  textoData:{
    fontFamily: 'Montserrat_700Bold',
    color: colorZero, 
    textAlign: 'center',
    fontSize: 20
  },
  containerPago:{
    backgroundColor: 'green', 
    borderRadius: 20, 
    padding: 10, 
    width: 100, 
    alignItems: 'center', 
    marginTop: 10
  },
  textoPago:{
    fontFamily: 'Montserrat_700Bold',
    color: colorZero, 
    textAlign: 'center',
    fontSize: 20
  }
});

export default styles