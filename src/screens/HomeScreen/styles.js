import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    background: {
        flex:1,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'space-between'
    },

    wrapperLogoTripPlanner: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center'
    },

    wrapperLogoDevPleno: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingBottom: 32
    },

    buttonBackground: {
        backgroundColor: 'white',
        paddingBottom: 16,
        paddingBottom: 16
    },

    buttonText: {
        textAlign:  'center',
        fontSize: 18
    },

    pin: {
        marginTop: 16,
        marginBottom: 16
    },

    arrow : {
        marginTop: 16,
    },

    buttonEmptyStateBackground: {
        backgroundColor: 'white',
        paddingBottom: 16,
        alignItems: 'center'
    },

    buttonEmptyStateText: {
        backgroundColor: 'white',
        paddingBottom: 16,
        fontSize: 18,
        width: 220,
        textAlign: 'center'
    }
    
})