import { StyleSheet } from "react-native";
import { colorNavTop, colorZero } from "../../style/settings/colors";

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  containerBarbeiroDelete:{
    backgroundColor: `red`,
    width: '70%',
    height: 47,
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 10
  },
  imagePerfilBarbeiro:{
    width: 80,
    height: 80,
    marginTop: 20,
  },
  textoBarbeiro:{
    fontFamily: 'Montserrat_700Bold',
    fontSize: 17,
    color: colorZero,
    marginTop: 10
  },
  textoDelete:{
    fontFamily: 'Montserrat_700Bold',
    fontSize: 17,
    color: colorZero,
    textAlign: 'center'
  }
});

export default styles