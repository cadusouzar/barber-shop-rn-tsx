import { backgroundMenuColor } from "../../style/settings";
import { NavBarBarbeiro } from "../../components/NavBarBarbeiro"
import { View } from 'react-native';
import { Input } from "../../objects/Input";
import { useState } from 'react';
import { ButtonOpacity } from "../../objects/ButtonOpacity";
import { useSelector } from "react-redux";
import { RootState } from "../../services/redux/store";
import { api } from "../../services/api";
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export const TrocarSenha = () => {
  const userData = useSelector((state: RootState) => state.auth.userData)
  const [novaSenha, setNovaSenha] = useState('');
  const [confirmarNovaSenha, setConfirmarNovaSenha] = useState('');
  const navigation = useNavigation(); 

  const trocarSenha = () => {
    const usuario={
      cpf: userData?.cpf,
      senha: novaSenha
    }

    if (novaSenha === '' || confirmarNovaSenha === '') {
      alert("A nova senha e a confirmação de senha não podem estar em branco");
      return;
    }

    if (novaSenha !== confirmarNovaSenha) {
      alert("A nova senha e a confirmação de senha não coincidem");
      return;
    }

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    api.patch('/Usuario/AlterarSenha', JSON.stringify(usuario), config)
    .then((resp) => {
      if(resp){
      //@ts-ignore
      navigation.navigate("SinglePage")
      }
    })
    .catch((err) => console.log(err))
  }

  return(
    <KeyboardAwareScrollView
    resetScrollToCoords={{ x: 0, y: 0 }}
    contentContainerStyle={{ flexGrow: 1 }}
    scrollEnabled={false}
    >
      <View style={{backgroundColor: backgroundMenuColor, height:'100%'}}>
        <NavBarBarbeiro paginaAtual='Trocar Senha' />

        <View style={{alignItems: 'center'}}>
          <Input
            text='Nova senha'
            placeholder='Digite a nova senha'
            value={novaSenha}
            onChangeText={setNovaSenha}
            marginTop={70}
            secure={true}
          />
          <Input
            text='Confirme a nova senha'
            placeholder='Digite a senha novamente'
            value={confirmarNovaSenha}
            onChangeText={setConfirmarNovaSenha}
            marginTop={30}
            secure={true}
          />

          <View>
            <ButtonOpacity txtButton='Registrar' handlePress={trocarSenha} />
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  )
}