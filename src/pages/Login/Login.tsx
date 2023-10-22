import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styles from "./styles";
import { ContainerLogin } from "../../components/ContainerLogin";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native"; 
import { api } from "../../services/api";
import { useDispatch } from 'react-redux';
import { setUserData } from "../../services/redux/actions";
import useEffect from 'react';

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
        HandleLogin={(text) => setLogin(text)}
        HandlePassword={setPassword}
        Login={goLogin}
        Register={goRegister}
        LoginValue={login}
        PasswordValue={password}
      />
    </KeyboardAwareScrollView>
  );
};
