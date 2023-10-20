import { Image, Text, TouchableOpacity, View } from "react-native"
import { NavBarBarbeiro } from "../../components/NavBarBarbeiro"
import React, {useState} from "react"
import {  backgroundMenuColor } from "../../style/settings"
//@ts-ignore
import ImagePerfil from '../../images/perfil.png'
import styles from './styles';
import DateTimePicker from '@react-native-community/datetimepicker';
import { addMonths, format } from 'date-fns';
import { ptBR } from "date-fns/locale";

export const Barbeiro = () => {
  const dataAtual = new Date()
  const [date, setDate] = useState(new Date())
  const [show, setShow] = useState(false)
  const [mode, setMode] = useState<'date' | 'time'>('date');
  const dataAtualMaisUmMes = addMonths( dataAtual, 1)

  const Agendar  = (data:Date) => {
    const DataFormatada = format(data, "dd/MM/yyyy HH:mm", { locale: ptBR })
    console.log(DataFormatada)
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
          <Text style={styles.nomePerfil}>Nome aqui bla bla bla</Text>
          <Text style={styles.dadosPerfil}>Numero de telefone</Text>
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
        <TouchableOpacity onPress={() => Agendar(date)} style={styles.Button}>
          <Text style={styles.textButton}>Agendar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}