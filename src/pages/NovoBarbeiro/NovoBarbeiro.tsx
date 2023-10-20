import { NavBarBarbeiro } from '../../components/NavBarBarbeiro';
import { Input } from '../../objects/Input';
import { View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {useState} from 'react';
import { backgroundMenuColor } from '../../style/settings';
import { ButtonOpacity } from '../../objects/ButtonOpacity';



export const NovoBarbeiro = () => {
  const [nomeBarbeiro, setNomeBarbeiro] = useState('');
  const [telefoneBarbeiro, setTelefoneBarbeiro] = useState('');
  const [valorCorte, setValorCorte] = useState('');
  const adicionarBarbeiro = () => {

  }
  return(
    <KeyboardAwareScrollView
    resetScrollToCoords={{ x: 0, y: 0 }}
    contentContainerStyle={{ flexGrow: 1 }}
    scrollEnabled={false}
    >
      <View style={{backgroundColor: backgroundMenuColor, height:'100%'}}>
        <NavBarBarbeiro paginaAtual='Adicionar barbeiro' />

        <View style={{alignItems: 'center'}}>
          <Input
            text='Nome'
            placeholder='Digite o nome do barbeiro'
            value={nomeBarbeiro}
            onChangeText={setNomeBarbeiro}
            marginTop={70}
            secure={true}
          />
          <Input
            text='Telefone'
            placeholder='Digite o telefone'
            value={telefoneBarbeiro}
            onChangeText={setTelefoneBarbeiro}
            marginTop={30}
            secure={true}
          />
          <Input
            text='Valor do corte'
            placeholder='Digite o valor do corte'
            value={valorCorte}
            onChangeText={setValorCorte}
            marginTop={30}
            secure={true}
          />
          <View>
            <ButtonOpacity txtButton='Adicionar Barbeiro' handlePress={adicionarBarbeiro} width={250}/>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  )
}