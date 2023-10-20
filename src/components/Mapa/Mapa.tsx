import React from 'react'
import MapView, { Marker } from 'react-native-maps'
import styles from './styles'

export const Mapa = () => {
  return(
    <MapView
    style={styles.map}
    initialRegion={{
      latitude: 50.0910966,
      longitude: 14.4016165,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    }}
    >
      <Marker
      coordinate={{        
        latitude: 50.0910966,
        longitude: 14.4016165
      }}
      />
    </MapView>
  )
}