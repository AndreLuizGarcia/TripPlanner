import React, { Component } from 'react'
import { AsyncStorage ,View, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from './styles'

class AddTripScreen extends Component{
    static navigationOptions = {
        header: null
    }
    //estado interno influencia em como os dados estão sendo renderizados na tela
    state = {
        trip: ''
    }
    renderItem = item => {
        return(
            <View style={styles.item}>
                <View style={{
                    flex:1
                }}>
                    <Text style={styles.itemName}>{item.item.name}</Text>
                    <Text>{item.item.description}</Text>
                </View>
                
                <View style={styles.wrapperItemPrice}>
                    <Text style={styles.itemPrice} >{item.item.price}</Text>
                </View>

               
            </View>
        )
    }

    handleSave = async() => {
        const trip = {
            id: new Date().getTime(),
            trip: this.state.trip,
            price: 0,
            latitude: 0,
            longitude: 0
        }

        const tripsAS = await AsyncStorage.getItem('trips')
        
        let trips = []
        if(tripsAS){
            trips = JSON.parse(tripsAS)
        }
        console.log(trips)
        trips.push(trip)
        await AsyncStorage.setItem('trips', JSON.stringify(trips))
        //this.props.navigation.navigate('AddPoint', { id: trip.id })
        this.props.navigation.state.params.refresh()
        this.props.navigation.goBack()




        /*
        const id = 1544203194903
        const pointsAS = await AsyncStorage.getItem('trip-' + id )
        let points = []
        if(pointsAS){
            points = JSON.parse(pointsAS)
        }
        points.push(this.state)
        await AsyncStorage.setItem('trip-'+id, JSON.stringify(points)) 
        
        let total = 0
        points.forEach ( p => {
            total+= p.price
        })

        const tripsAS = await AsyncStorage.getItem('trips')
        let trips = []
        if(tripsAS){
            trips = JSON.parse(tripsAS)
        }
        trips.forEach( trip, index => {
            if(trip.id === id){
                trip[index].price = total
                trips[index].latitude = points[0].position.latitude
                trips[index].latitude = points[0].position.longitude

            }
        })
        await AsyncStorage.setItem('trips', JSON.stringify(trips))
        */
    }

    render(){
        return(
            <View style={styles.wrapper}>
                <TextInput style={styles.input} placeholder='Nome da Viagem' onChangeText={ txt => this.setState({ trip: txt })} />
                <TouchableOpacity style={styles.btn} onPress={this.handleSave}>
                    <Text style={{textAlign: 'center'}}>Salvar Viagem</Text>
                </TouchableOpacity>
            </View>
        )   
    }
}

export default AddTripScreen