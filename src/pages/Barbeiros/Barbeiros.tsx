import { CardBarbeiro } from '../../objects/CardBarbeiro';
import { ScrollView, View } from "react-native"
import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Search } from '../../objects/Search';

interface BarbeiroData {
  id: string;
  nome: string;
  valor: string;
}

export const Barbeiros = () => {
  const [barbeiros, setBarbeiros] = useState<BarbeiroData[]>([]);
  const [searchText, setSearchText] = useState('');

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

  const filteredBarbeiros = barbeiros.filter((barbeiro) =>
    barbeiro.nome.toLowerCase().includes(searchText.toLowerCase())
  );

  function adicionarFormatoDeReais(valorString:string) {
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

  const removerBarbeiro = (idBarbeiro:number) => {

    api.delete(`/Barbearia/ApagarBarbeiro?idFuncionario=${idBarbeiro}`)
    .then((response) => {
      alert('Barbeiro removido com sucesso!')
    })
    .catch((err) => {
      console.log(err)
      alert('Impossivel deletar, ja existe um agendamento com esse barbeiro')
    })
  }

  return (
    <ScrollView
    contentContainerStyle={{ flexGrow: 1 }}
      style={{ marginTop: 35, height: '89.1%' }}
    >
      <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginBottom: 100}}>
        <Search onSearch={handleSearch} />
        {filteredBarbeiros.map((barbeiro) => (
            <CardBarbeiro 
            key={barbeiro.id}
            nomeBarbeiro={barbeiro.nome} 
            valorCorte={adicionarFormatoDeReais(barbeiro.valor)} 
            handlePress={() => removerBarbeiro(Number(barbeiro.id))}/>
        ))}
      </View>
    </ScrollView>
  );
}
