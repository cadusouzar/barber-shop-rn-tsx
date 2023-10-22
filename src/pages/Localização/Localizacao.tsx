import React, { useEffect, useState } from 'react';
import styles from './styles';
import { View, Text } from 'react-native';
import { Mapa } from '../../components/Mapa';
import { Contatos } from '../../components/Contatos';
import { api } from '../../services/api';


export const Localizacao = () => {
  const [endereco, setEndereco] = useState('')
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)


  useEffect(() => {
    api.get('/Barbearia/Barbearia')
      .then((resp) => {
        if (resp.data) {
          setEndereco(resp.data.endereco);
          setLatitude(resp.data.latitude)
          setLongitude(resp.data.longitude)
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <View style={styles.containerMap}>
        {latitude !== 0 && longitude !== 0 && (
          <Mapa latitude={latitude} longitude={longitude} />
        )}
        <Text style={styles.textoEndereco}>{endereco}</Text>
      </View>
      <View style={styles.containerContato}>
        <Contatos />
      </View>
    </>
  );
};
