import { StyleSheet } from "react-native";
import { colorZero, textColor } from "../../style/settings/colors";

const styles = StyleSheet.create({
  Container:{
    alignItems: 'center',
  },
  Image:{
    width: 300,
    height: 450,
    marginLeft: -15
  },
  ContainerLogin:{
    padding: 25,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: colorZero,
    overflow: 'hidden',
  },
  ContainerButtons:{
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  ButtonLogin:{

  },
  ButtonRegistro:{
    
  }
});

export default styles