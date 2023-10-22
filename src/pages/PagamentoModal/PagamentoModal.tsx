import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Clipboard } from 'react-native';
import Modal from 'react-native-modal';
import { colorZero } from '../../style/settings';
import QRCode from 'react-native-qrcode-svg';
import styles from './styles'
import { api } from '../../services/api';
import { useNavigation } from '@react-navigation/native';

type propsPagamentoModal = {
  idBarbeiro: string
  idUsuario: string
  dataCorte: Date
  cpf: string
  valor: string
}

export const PagamentoModal:React.FC<propsPagamentoModal> = ({idBarbeiro, idUsuario, dataCorte, cpf, valor}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [chavePix, setChavePix] = useState('')
  const navigation = useNavigation(); 

  const registrarAgendamento = () => {
    const agendamento = {
      idFuncionario: idBarbeiro,
      idUsuario: idUsuario,
      dataInicio: dataCorte
    }

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    api.post('/Agendamento/Registrar', agendamento, config)
    .then((resp) => {
      alert('Agendado com sucesso!')
    })
    .catch((err) => console.log(err))

    setModalVisible(!isModalVisible);
  }

  const toggleModal = () => {
    const clientePagamento = {
      cpf: cpf,
      valor: valor
    }

    api.post('/Usuario/PagamentoPix', null, {
      params: clientePagamento
    })
    .then((resp) => {
      setChavePix(resp.data.toString())
    })
    .catch((err) => console.log(err))

    setModalVisible(!isModalVisible);
  };

  const handleCopyToClipboard = () => {
    Clipboard.setString(chavePix);
    alert('Dado PIX copiado para a área de transferência!');
    
  }

  return (
    <View>
      <TouchableOpacity onPress={toggleModal} style={styles.Button}>
        <Text style={styles.texto}>Agendar</Text>
      </TouchableOpacity>

      <Modal isVisible={isModalVisible}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.textoPix}>Toque para copiar seu PIX:</Text>
            <TouchableOpacity onPress={handleCopyToClipboard}>
            {chavePix !== '' &&
              <QRCode
              value={chavePix}
              size={200}
              />
            }
            </TouchableOpacity>
            <TouchableOpacity onPress={registrarAgendamento} style={styles.buttonPaguei}>
              <Text style={styles.textoFechar}>Efetuei o pagamento!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};
