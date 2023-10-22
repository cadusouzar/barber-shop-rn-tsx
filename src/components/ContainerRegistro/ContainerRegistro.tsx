import { View } from "react-native";
import { Input } from '../../objects/Input';
import { ButtonOpacity } from '../../objects/ButtonOpacity';
import { useState } from 'react';
import cpfCheck from 'cpf-check';
import { api } from "../../services/api";
import { useNavigation } from "@react-navigation/native"; 

export const ContainerRegistro = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [cpf, setCpf] = useState('');
  const navigation = useNavigation(); 

  const validarEmail = (email:string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailRegex.test(email);
  }
      
  const Registrar = () => {
    const usuario = {
      nome,
      email,
      cpf,
      senha,
    };

    if(nome == ''){
      alert("O nome não pode estar em branco");
      return;
    }

    if (!cpfCheck.validate(usuario.cpf) || cpf == '') {
      alert("CPF inválido ou em branco");
      return;
    }

    if (!validarEmail(usuario.email) || email == '') {
      alert("E-mail inválido ou em branco");
      return;
    }

    if (senha === '' || confirmarSenha === '') {
      alert("A nova senha e a confirmação de senha não podem estar em branco");
      return;
    }

    if (usuario.senha !== confirmarSenha) {
      alert("Senha e confirmação de senha não coincidem");
      return;
    }


    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    api.post('Usuario/Registrar', JSON.stringify(usuario), config)
    .then((resp) => {
      //@ts-ignore
      navigation.navigate("Login")
      setNome('')
      setSenha('')
      setEmail('')
      setConfirmarSenha('')
      setCpf('')
    })
    .catch((err)=> {
      console.log(err)
    })
  }

  return (
    <View style={{ alignItems: 'center' }}>
      <Input
        text='Nome'
        placeholder='Escreva seu nome'
        value={nome}
        marginTop={70}
        onChangeText={text => setNome(text)}
      />
      <Input
        text='Cpf'
        placeholder='Digite seu CPF'
        value={cpf}
        marginTop={20}
        onChangeText={text => setCpf(text)}
      />
      <Input
        text='E-mail'
        placeholder='Escreva seu e-mail'
        value={email}
        marginTop={20}
        onChangeText={text => setEmail(text)}
      />
      <Input
        text='Senha'
        placeholder='Escreva sua senha'
        value={senha}
        marginTop={20}
        onChangeText={text => setSenha(text)}
        secure={true}
      />
      <Input
        text='Confirme a senha'
        placeholder='Escreva sua senha novamente'
        value={confirmarSenha}
        marginTop={20}
        onChangeText={text => setConfirmarSenha(text)}
        secure={true}
      />

      <View>
        <ButtonOpacity txtButton='Registrar' handlePress={Registrar} />
      </View>
    </View>
  )
}
