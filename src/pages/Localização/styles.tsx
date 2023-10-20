import { StyleSheet } from "react-native";
import { backgroundMenuColor, colorZero } from "../../style/settings/colors";

const styles = StyleSheet.create({
  containerMap:{
    marginTop: 70,
    alignItems: 'center',
  },
  textoEndereco:{
    fontSize: 16, 
    fontFamily: 'Montserrat_700Bold',
    top: 10,
    color: colorZero
  },
  containerContato:{
    alignItems: 'center',
    marginTop: -90
  },
});

export default styles