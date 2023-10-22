import { ScrollView, View, Text } from 'react-native';
import { format } from 'date-fns';
import styles from './styles'
import {useState, useEffect} from 'react';
import { api } from '../../services/api';
import { backgroundColor } from '../../style/settings/colors';

interface TodosCortes {
  id: number
  dataInicio: string
}

export const TodosAgendamentos = () => {
  const [todosCortes, setTodosCortes] = useState<TodosCortes[]>([]);

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
    api.get('/Agendamento/Listar')
      .then((resp) => {
        const cortesData = resp.data;
        cortesData.sort((a: TodosCortes, b: TodosCortes) => {
          const dateA = new Date(a.dataInicio);
          const dateB = new Date(b.dataInicio);
          return dateB.getTime() - dateA.getTime();
        });
        setTodosCortes(cortesData);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={{ marginTop: 35 }}
    >
      <View style={{ marginBottom: 100, alignItems: 'center' }}>
        {todosCortes.map((cortes) => (
          <View key={cortes.id} style={styles.containerData}>
            <Text style={styles.textoData}>{formatarDataHoraBrasileira(cortes.dataInicio)}</Text>
            <View style={styles.containerPago}>
              <Text style={styles.textoPago}>Pago</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}