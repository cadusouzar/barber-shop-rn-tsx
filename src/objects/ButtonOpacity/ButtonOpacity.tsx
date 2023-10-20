import React from 'react'
import {TextStyle} from 'react-native'
import {Text, TouchableOpacity } from "react-native";
import { colorZero, primaryColor } from '../../style/settings/colors';
import styles from './styles'


type ButtonOpacityProps= {
  txtButton: string
  handlePress: () => void
  width?: number
}

export const ButtonOpacity:React.FC<ButtonOpacityProps> = ({txtButton, handlePress, width = 120}) => {
  const inputButtonStyle: TextStyle = {
    backgroundColor: primaryColor,
    padding: 15,
    borderRadius: 30,
    width: width,
    marginTop: 40
  }
  return(
    <TouchableOpacity
    onPress={handlePress}
    style={inputButtonStyle}
    >
      <Text style={styles.TextButton}>
        {txtButton}
      </Text>
    </TouchableOpacity>
  )
}