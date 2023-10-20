import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {useState} from 'react';
import { NavBarBarbeiro } from "../../components/NavBarBarbeiro";
import { Input } from "../../objects/Input";
import { View } from 'react-native';
import { backgroundMenuColor } from "../../style/settings";
import { ButtonOpacity } from "../../objects/ButtonOpacity";

export const MudarLocalizacao = () => {
  const [endereco, setEndereco] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [telefone, setTelefone] = useState('');
  const adicionarBarbeiro = () => {

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
            secure={true}
          />
          <Input
            text='Latitude'
            placeholder='Digite a latitude'
            value={latitude}
            onChangeText={setLatitude}
            marginTop={30}
            secure={true}
          />
          <Input
            text='Longitude'
            placeholder='Digite a longitude'
            value={longitude}
            onChangeText={setLongitude}
            marginTop={30}
            secure={true}
          />
          <Input
            text='Whatsapp'
            placeholder='Digite o numero whatsapp'
            value={whatsapp}
            onChangeText={setWhatsapp}
            marginTop={30}
            secure={true}
          />
          <Input
            text='Telefone'
            placeholder='Digite o telefone'
            value={telefone}
            onChangeText={setTelefone}
            marginTop={30}
            secure={true}
          />
          <View>
            <ButtonOpacity txtButton='Mudar localização e contato' handlePress={adicionarBarbeiro} width={250}/>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  )
}