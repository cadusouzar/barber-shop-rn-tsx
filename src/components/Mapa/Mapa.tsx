import React from 'react'
import MapView, { Marker } from 'react-native-maps'
import styles from './styles'
import { useSelector } from 'react-redux'
import { RootState } from 'services/redux/store'

type PropsMapa = {
  longitude: number
  latitude: number
}

export const Mapa:React.FC<PropsMapa> = ({latitude, longitude}) => {
  return(
    <MapView
    style={styles.map}
    initialRegion={{
      latitude: -22.951804,
      longitude: -43.210760,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    }}
    >
      <Marker
      coordinate={{        
        latitude: -22.951804,
        longitude: -43.210760
      }}
      />
    </MapView>
  )
}