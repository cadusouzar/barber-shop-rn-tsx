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
    const id = JSON.stringify(idBarbeiro)

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    api.post(`/Barbearia/ApagarBarbeiro/${id}`, config)
    .then((response) => {
      alert('Barbeiro removido com sucesso!')
    })
    .catch((err) => console.log(err))
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={{ marginTop: 35 }}
    >
      <View style={{ marginBottom: 100 }}>
        <Search onSearch={handleSearch} />
        {filteredBarbeiros.map((barbeiro) => (
          <View key={barbeiro.id} style={{marginBottom:20}}>
            <CardBarbeiro key={barbeiro.id} nomeBarbeiro={barbeiro.nome} valorCorte={adicionarFormatoDeReais(barbeiro.valor)} handlePress={() => removerBarbeiro(Number(barbeiro.id))}/>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
