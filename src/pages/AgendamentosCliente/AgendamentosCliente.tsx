import { Text, Image, View, TouchableOpacity, ScrollView } from 'react-native';
import { NavBarBarbeiro } from '../../components/NavBarBarbeiro';
import { backgroundColor, backgroundMenuColor } from '../../style/settings';
import { Search } from '../../objects/Search';
import {useEffect, useState} from 'react';
import { api } from '../../services/api';
import { useSelector } from 'react-redux';
import { RootState } from 'services/redux/store';
import { format } from 'date-fns';
import styles from './styles'

interface meusCortesData {
  id: number
  dataInicio: string
}

export const AgendamentosCliente = () => {
  const [meusCortes, setMeusCortes] = useState<meusCortesData[]>([]);
  const userData = useSelector((state: RootState) => state.auth.userData);

  function formatarDataHoraBrasileira(dataHora: string) {
    try {
      const data = new Date(dataHora);
      const dataFormatada = format(data, 'dd/MM/yyyy HH:mm:ss');
      return dataFormatada;
    } catch (error) {
      console.error('Erro ao formatar a data:', error);
      return null;
    }
  }

  useEffect(() => {
    api
      .get(`/Agendamento/ListarPorUsuario?cpf=${userData.cpf}`)
      .then((resp) => {
        const cortesData = resp.data;
        cortesData.sort((a: meusCortesData, b: meusCortesData) => {
          const dateA = new Date(a.dataInicio);
          const dateB = new Date(b.dataInicio);
          return dateB.getTime() - dateA.getTime();
        });
        setMeusCortes(cortesData);
        console.log(cortesData);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <View style={{ backgroundColor: backgroundMenuColor, height: '100%' }}>
      <NavBarBarbeiro paginaAtual="Meus Agendamentos" />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={{ marginTop: 35 }}>
        <View style={{ marginBottom: 100, alignItems: 'center' }}>
          {meusCortes.map((cortes) => (
            <View key={cortes.id} style={styles.containerData}>
              <Text style={styles.textoData}>{formatarDataHoraBrasileira(cortes.dataInicio)}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
