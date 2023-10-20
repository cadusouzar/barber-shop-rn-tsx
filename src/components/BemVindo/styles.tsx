import { StyleSheet } from "react-native";
import { backgroundMenuColor } from "../../style/settings/colors";

const styles = StyleSheet.create({
  texts:{
    fontFamily: 'Montserrat_700Bold',
    color: 'white',
    fontSize: 24
  },
  textNome:{
    fontFamily: 'Montserrat_700Bold',
    color: 'white',
    fontSize: 28,
    backgroundColor: 'black',
    paddingLeft: 6,
    paddingRight: 6,
    borderRadius: 5,
    marginLeft: 5
  },
  containerTextNome:{
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3
  },
  image:{
    width: 550,
    height: 550,
    marginTop: -40,
    marginLeft: -20
  },
});

export default styles