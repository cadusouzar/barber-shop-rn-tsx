import React, { useState, useRef, useEffect } from "react"
import { Text, TouchableOpacity, Image, Animated, View } from "react-native"
import Icon from 'react-native-ico-material-design';
import { backgroundMenuColor, colorNavTop } from "../../style/settings";
import styles from './styles'
import { Localizacao } from "../../pages/Localização";
import { Home } from "../../pages/Home";
import { Creditos } from "../../pages/Creditos";
import {  Perfil } from "../../pages/Perfil";
import { Agendar } from "../../pages/Agendar";
//@ts-ignore
import Menu from '../../images/Menu.png'
import { Barbeiros } from "../../pages/Barbeiros/Barbeiros";
import { TodosAgendamentos } from "../../pages/TodosAgendamentos";

type PropsPagina = {
  PaginaAtual: string
}

export const Pagina: React.FC<PropsPagina> = ({ PaginaAtual }) => {
  const [showMenu, setShowMenu] = useState(false);
  const offsetValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;

  // Função para abrir ou fechar o menu
  const toggleMenu = () => {
    Animated.timing(scaleValue, {
      toValue: showMenu ? 1 : 0.88,
      duration: 300,
      useNativeDriver: true
    }).start();

    Animated.timing(offsetValue, {
      toValue: showMenu ? 0 : 250,
      duration: 300,
      useNativeDriver: true
    }).start();

    Animated.timing(closeButtonOffset, {
      toValue: !showMenu ? -30 : 0,
      duration: 300,
      useNativeDriver: true
    }).start();

    setShowMenu(!showMenu);
  };

  // Função para fechar o menu
  const closeMenu = () => {
    if (showMenu) {
      toggleMenu();
    }
  };

  useEffect(() => {
    // Feche o menu quando um item do menu for pressionado
    closeMenu();
  }, [PaginaAtual]);

  return (
    <Animated.View style={{ flexGrow: 1, backgroundColor: backgroundMenuColor, position: "absolute", top: 0, bottom: 0, left: 0, right: 0, borderRadius: showMenu ? 15 : 0, transform: [{ scale: scaleValue }, { translateX: offsetValue }] }}>
      <Animated.View style={{
        transform: [{
          translateY: closeButtonOffset
        }]
      }}>
        <View style={{backgroundColor:colorNavTop ,borderTopLeftRadius: 15, paddingHorizontal: 20, paddingVertical: 5, paddingBottom: 30}}>
          <TouchableOpacity onPress={toggleMenu}>
            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
              {!showMenu ?
                <Image source={Menu} style={styles.imageMenu} /> :
                //@ts-ignore
                <Icon name="close-button" style={styles.iconClose} color='white' />
              }
              <Text style={styles.paginaAtual}>{PaginaAtual}</Text>
            </View>
          </TouchableOpacity>
        </View>
        { 
          PaginaAtual === 'Perfil' ? 
          <Perfil/>  : 
          PaginaAtual == 'Home' ?
          <Home/> :
          PaginaAtual == 'Agendar' ?
          <Agendar/> :
          PaginaAtual == 'Localização e contato' ? 
          <Localizacao/> : 
          PaginaAtual == 'Créditos' ?
          <Creditos/> :
          PaginaAtual == 'Barbeiros' ?
          <Barbeiros/> :
          PaginaAtual == 'Agendamentos' ?
          <TodosAgendamentos/> :
          <></>
        }
      </Animated.View>
    </Animated.View>
  )
}
