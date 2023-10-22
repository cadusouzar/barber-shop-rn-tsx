import { StyleSheet } from "react-native";
import { colorNavTop, colorZero } from "../../style/settings/colors";

const styles = StyleSheet.create({
  containerPesquisa:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    marginLeft: 25
  },
  textPesquisa:{
    backgroundColor: colorZero,
    width: '85%',
    height: 45,
    borderRadius: 30,
    marginRight: 10,
    textAlign: 'center',
    fontFamily: 'Montserrat_700Bold',
  },
});

export default styles