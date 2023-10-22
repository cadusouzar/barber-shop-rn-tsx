import React from "react"
import { ScrollView, View } from "react-native"
import styles from './styles';
import { Search } from "../../objects/Search";
import { CardBarbeiro } from "../../objects/CardBarbeiro";
import {useEffect, useState} from 'react';
import { api } from "../../services/api";
import { useNavigation } from "@react-navigation/native";

interface BarbeiroData {
  id: string;
  nome: string;
  valor: string;
  telefone: string
}

export const Agendar = () => {
  const [barbeiros, setBarbeiros] = useState<BarbeiroData[]>([]);
  const [searchText, setSearchText] = useState('');
  const navigation = useNavigation();
  useEffect(() => {
    api.get('/Barbearia/ListarBarbeiro')
      .then((resp) => {
        setBarbeiros(resp.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSearch = (text: string) => {
    setSearchText(text);
  };

  function adicionarFormatoDeReais(valorString: string) {
    if (!valorString) {
      return 'R$ 0,00';
    }
  
    const valorNumerico = parseFloat(valorString);
  
    if (isNaN(valorNumerico)) {
      return 'R$ 0,00';
    }
  
    const valorFormatado = valorNumerico.toFixed(2);
    return `R$ ${valorFormatado}`;
  }

  const gotoBarbeiro = (barbeiroId: string, barbeiroNome: string, barbeiroTelefone: string, barbeiroValor: string) => {
    //@ts-ignore
    navigation.navigate('Barbeiro', { barbeiroId, barbeiroNome, barbeiroTelefone, barbeiroValor });
  }

  const filteredBarbeiros = barbeiros.filter((barbeiro) =>
    barbeiro.nome.toLowerCase().includes(searchText.toLowerCase())
  );
  return(
    <ScrollView
    contentContainerStyle={{ flexGrow: 1 }}
    style={styles.containerAgendamentos}
    >
      <Search onSearch={handleSearch} />
      {filteredBarbeiros.map((barbeiro) => (
        <CardBarbeiro 
        key={barbeiro.id} 
        nomeBarbeiro={barbeiro.nome} 
        valorCorte={adicionarFormatoDeReais(barbeiro.valor)} 
        handlePress={() => gotoBarbeiro(barbeiro.id, barbeiro.nome, barbeiro.telefone, barbeiro.valor)}
        />
      ))}
    </ScrollView>
  )
}