import React from "react"
import { ScrollView, View } from "react-native"
import styles from './styles';
import { Search } from "../../objects/Search";
import { CardBarbeiro } from "../../objects/CardBarbeiro";

export const Agendamentos = () => {
  return(
    <ScrollView
    contentContainerStyle={{ flexGrow: 1 }}
    style={styles.containerAgendamentos}
    >
      <View style={{marginBottom: 100}}>
        <Search/>
        <CardBarbeiro/>
      </View>
    </ScrollView>
  )
}