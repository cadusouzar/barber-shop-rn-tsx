import { StyleSheet } from "react-native";
import { colorNavTop, colorZero } from "../../style/settings/colors";

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  containerBarbeiro:{
    backgroundColor: colorNavTop,
    height: 190,
    width: '45%',
    alignItems: 'center',
    borderRadius: 20,
    elevation: 20,
    margin: 7,
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
});

export default styles