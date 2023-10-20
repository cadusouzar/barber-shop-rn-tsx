import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styles from "./styles";
import { ContainerLogin } from "../../components/ContainerLogin";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native"; 
import { api } from "../../services/api";
import { useDispatch } from 'react-redux';
import { setUserData } from "../../services/redux/actions";

export const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation(); 
  const dispatch = useDispatch();

  const goLogin = () => {
    if (!login || !password) {
      alert("Login e Senha não coincidem");
      return;
    }
    const url = `/Usuario/Login?cpf=${login}&senha=${password}`;
    api.get(url)
      .then((resp) => {
        if(resp.data){
        dispatch(setUserData(resp.data)); 
        //@ts-ignore
        navigation.navigate('SinglePage');
        setLogin('')
        setPassword('')
        }else{
          alert("Login e Senha não coincidem");
        }
      })
      .catch((err) => console.log(err));
  };

  const formatCPF = (input:string) => {
    const numericInput = input.replace(/\D/g, '');
  
    const formattedCPF =
      numericInput
        .slice(0, 3) +
      '.' +
      numericInput.slice(3, 6) +
      '.' +
      numericInput.slice(6, 9) +
      '-' +
      numericInput.slice(9, 11);
  
    return formattedCPF;
  };

  const goRegister = () => {
    //@ts-ignore
    navigation.navigate('Registro')
  };

  return (
    <KeyboardAwareScrollView
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={{ flexGrow: 1 }}
      scrollEnabled={false}
      style={styles.Background}
    >
      <ContainerLogin
        HandleLogin={(text) => setLogin(formatCPF(text))}
        HandlePassword={setPassword}
        Login={goLogin}
        Register={goRegister}
        LoginValue={login}
        PasswordValue={password}
      />
    </KeyboardAwareScrollView>
  );
};
