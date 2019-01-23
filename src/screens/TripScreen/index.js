import React, { Component } from 'react'
import { View, Text, FlatList, TouchableOpacity, Image, AsyncStorage } from 'react-native'
import styles from './styles'

class TripScreen extends Component{
    static navigationOptions = {
        header: null
    }
    state = {
        trip: [],
        points: []
    }
    renderItem = item => {
        return(
            <View style={styles.item}>
                <View style={{
                    flex:1
                }}>
                    <Text style={styles.itemName}>{item.item.pointName}</Text>
                    <Text>{item.item.description}</Text>
                </View>
                
                <View style={styles.wrapperItemPrice}>
                    <Text style={styles.itemPrice} >{item.item.price.toFixed(2)}</Text>
                </View>

               
            </View>
        )
    }

    componentDidMount(){
        this.loadData()
    }
    
    loadData = async() => {
        const id = this.props.navigation.state.params.id
        const tripsAS = await AsyncStorage.getItem('trips')
        let trips = []
        if(tripsAS){
            trips = JSON.parse(tripsAS)
        }

        const pointsAS = await AsyncStorage.getItem('trip-' + id)
        let points = []
        if(pointsAS){
            points = JSON.parse(pointsAS)
        }

        let trip = {
            trip: '',
            price: 0
        }

        trips.forEach(t  => {
            if (t.id === id){
                trip.trip = t.trip,
                trip.price = t.price ? t.price : 0
            }
        })
       

        this.setState({
            trip: trip,
            points: points })
    }
    
    render(){
        /*const trip = {
            name: 'EuroTrip 2019',
            price: 'R$ 5000',
            places: [
                {id: '1', name: 'Amsterdan', description: 'Chegada', price: 100, lat: 0, long: 0},
                {id: '2', name: 'Bruxelas', description: 'Hospedagem', price: 100, lat: 0, long: 0},
                {id: '3', name: 'Amsterdan', description: 'Chegada', price: 100, lat: 0, long: 0},
                {id: '4', name: 'Bruxelas', description: 'Hospedagem', price: 100, lat: 0, long: 0},
                {id: '5', name: 'Amsterdan', description: 'Chegada', price: 100, lat: 0, long: 0},
                {id: '6', name: 'Bruxelas', description: 'Hospedagem', price: 100, lat: 0, long: 0}
            ]
        }*/

        const { points, trip } = this.state //const points = this.state.points // construct assined
        const id = this.props.navigation.state.params.id
        return(
            <View style={styles.wrapper}>  
                <View style={styles.header}>
                    <View style={styles.backButton}>
                        <TouchableOpacity onPress={() => {
                            this.props.navigation.state.params.refresh(),
                            this.props.navigation.goBack()
                        }
                        }>
                            <Image source={require('../../../assets/arrow-left-white.png')} />
                        </TouchableOpacity>
                    </View>   
                    <Text style={styles.tripName}>{trip.trip}</Text>
                    <Text style={styles.tripPrice}>R${parseFloat(trip.price).toFixed(2)}</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('AddPoint', { id: id ,refresh: this.loadData })}
                        style={{
                            position: 'absolute',
                            bottom: 40,
                            right: 20,
                            padding: 10
                        }}
                        >
                        <Image source={require('../../../assets/add.png')} />
                </TouchableOpacity>
                </View>

                <FlatList style={{
                    flex: 1
                }}
                    contentContainerStyle={{
                        paddingTop: 16,
                        paddingLeft: 16
                    }}
                    data = {points}
                    renderItem={this.renderItem}
                    keyExtractor = { item => item.id.toString() }
                />
            </View>
        )   
    }
}

export default TripScreen