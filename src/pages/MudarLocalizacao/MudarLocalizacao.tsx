import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {useState} from 'react';
import { NavBarBarbeiro } from "../../components/NavBarBarbeiro";
import { Input } from "../../objects/Input";
import { View } from 'react-native';
import { backgroundMenuColor } from "../../style/settings";
import { ButtonOpacity } from "../../objects/ButtonOpacity";
import { api } from "../../services/api";

export const MudarLocalizacao = () => {
  const [endereco, setEndereco] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [telefone, setTelefone] = useState('');

  const mudarLocalizacao = () => {
    const localizacao = {
      latitude: latitude,
      longitude: longitude,
      endereco: endereco,
      whatsapp: whatsapp,
      telefone: telefone
    }

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    api.patch('/Barbearia/Barbearia', JSON.stringify(localizacao), config)
    .then((resp) => {
      alert('Localização e contato alterados com sucesso')
      setEndereco('')
      setLatitude('')
      setLongitude('')
      setWhatsapp('')
      setTelefone('')
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
        <NavBarBarbeiro paginaAtual='Mudar localização e contato' />

        <View style={{alignItems: 'center'}}>
          <Input
            text='Endereço'
            placeholder='Digite o endereço'
            value={endereco}
            onChangeText={setEndereco}
            marginTop={40}
            tipo="numeric"
          />
          <Input
            text='Latitude'
            placeholder='Digite a latitude'
            value={latitude}
            onChangeText={setLatitude}
            marginTop={30}
            tipo="numeric"
          />
          <Input
            text='Longitude'
            placeholder='Digite a longitude'
            value={longitude}
            onChangeText={setLongitude}
            marginTop={30}
            tipo="numeric"
          />
          <Input
            text='Whatsapp'
            placeholder='Digite o numero whatsapp'
            value={whatsapp}
            onChangeText={setWhatsapp}
            marginTop={30}
            tipo="numeric"
          />
          <Input
            text='Telefone'
            placeholder='Digite o telefone'
            value={telefone}
            onChangeText={setTelefone}
            marginTop={30}
            tipo="numeric"
          />
          <View>
            <ButtonOpacity txtButton='Mudar localização e contato' handlePress={mudarLocalizacao} width={250}/>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  )
}