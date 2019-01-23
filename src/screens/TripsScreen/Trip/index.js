import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'

const Trip = props => {
    return(
        <TouchableOpacity onPress={props.onPress} style={styles.wrapperTrip}> 
            <View style={styles.image}><Text>Image</Text></View>
            <Text>{props.title}</Text>
            <Text style={styles.price}>{props.price}</Text>
        </TouchableOpacity>
    )
}
export default Trip