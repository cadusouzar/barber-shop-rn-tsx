import { Image, Text, TouchableOpacity, View } from "react-native"
import { NavBarBarbeiro } from "../../components/NavBarBarbeiro"
import React, {useState} from "react"
import {  backgroundMenuColor } from "../../style/settings"
//@ts-ignore
import ImagePerfil from '../../images/perfil.png'
import styles from './styles';
import DateTimePicker from '@react-native-community/datetimepicker';
import { addMonths } from 'date-fns';
import { useRoute } from '@react-navigation/native';
import { api } from "../../services/api"
import { useSelector } from "react-redux"
import { RootState } from "services/redux/store"
import { PagamentoModal } from "../../pages/PagamentoModal"

export const Barbeiro = () => {
  const userData = useSelector((state: RootState) => state.auth.userData)
  const dataAtual = new Date()
  const [date, setDate] = useState(new Date())
  const [show, setShow] = useState(false)
  const [mode, setMode] = useState<'date' | 'time'>('date');
  const dataAtualMaisUmMes = addMonths( dataAtual, 1)
  const route = useRoute();
  const barbeiroId = (route.params as { barbeiroId: string })?.barbeiroId;
  const barbeiroNome = (route.params as { barbeiroNome: string })?.barbeiroNome;
  const barbeiroTelefone = (route.params as { barbeiroTelefone: string })?.barbeiroTelefone;
  const barbeiroValor = (route.params as { barbeiroValor: string })?.barbeiroValor;

  function nomeFormatado(nome:string) {
    if(nome){
      const nomes = nome.split(' ');
    
      if (nomes.length >= 2) {
        const primeiroNome = nomes[0].charAt(0).toUpperCase() + nomes[0].slice(1).toLowerCase();
        const segundoNome = nomes[1].charAt(0).toUpperCase() + nomes[1].slice(1).toLowerCase();

        return `${primeiroNome} ${segundoNome}`;
      } else {
        return nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();
      }
    }
  }

  function formatarTelefoneComParentesesEDeTraco(telefone: string) {
    const numeroNumerico = telefone.replace(/\D/g, '');
  
    if (numeroNumerico.length < 10) {
      return telefone;
    }
  
    const ddd = numeroNumerico.substring(0, 2);
    const restanteDoNumero = numeroNumerico.substring(2);
  
    const telefoneFormatado = `(${ddd}) ${restanteDoNumero.substring(0, 5)}-${restanteDoNumero.substring(5)}`;
  
    return telefoneFormatado;
  }

  const Agendar  = () => {


  }
  
  const onChange = (e: any, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    setShow(false);
  }

  const showMode = (modeToShow: 'date' | 'time') => {
    setShow(true)
    setMode(modeToShow)
  }

  return(
    <View style={{backgroundColor: backgroundMenuColor, height:'100%'}}>
      <NavBarBarbeiro paginaAtual="Barbeiro"/>

      <View style={styles.containerPerfil}>
        <View style={styles.Perfil}>
          <Image source={ImagePerfil} style={styles.fotoPerfil} />
          <Text style={styles.nomePerfil}>{nomeFormatado(barbeiroNome)}</Text>
          <Text style={styles.dadosPerfil}>{formatarTelefoneComParentesesEDeTraco(barbeiroTelefone)}</Text>
        </View>
      </View>

      <View style={styles.containerBotoesTempo}>
        <TouchableOpacity style={styles.buttonTempo} onPress={() => showMode('date')}>
          <Text style={styles.textButton}>Selecionar Data</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonTempo} onPress={() => showMode('time')}>
          <Text style={styles.textButton}>Selecionar Hora</Text>
        </TouchableOpacity>
      </View>

      {show && (
        <DateTimePicker
        value={date}
        mode={mode}
        is24Hour={true}
        onChange={onChange}
        minimumDate={dataAtual}
        maximumDate={dataAtualMaisUmMes}
        />
      )}

      <View style={styles.containerButton}>
        <PagamentoModal idBarbeiro={barbeiroId} idUsuario={userData?.id} dataCorte={date} cpf={userData?.cpf} valor={barbeiroValor}/>
      </View>
    </View>
  )
}