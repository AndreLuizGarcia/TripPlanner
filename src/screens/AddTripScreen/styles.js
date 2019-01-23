import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        paddingTop: 120
    },

    header: {
        height: 192,
        backgroundColor: 'grey'
    },

    backButton: {
        position: 'absolute',
        top: 16,
        left: 16,
        bottom: 30,
        paddingTop: 10,
        paddingRight: 10,
        paddingLeft: 10,
        paddingBottom: 10
    },

    tripName: {
        position: 'absolute',
        left: 16,
        bottom: 16
    },

    tripPrice: {
        position:'absolute',
        bottom:16,
        right:32,
        textAlign:'right',
        backgroundColor: '#0D0AA7',
        paddingTop: 4,
        paddingRight: 4,
        paddingLeft: 4,
        color: 'white'
    },

    item: {
        flex: 1,
        flexDirection: 'row',
        paddingBottom: 16
    },

    itemName: {
        fontWeight: 'bold',
        fontSize: 18
    },

    wrapperItemPrice: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 16
    },

    itemPrice: {
        textAlign: 'right',
        color: '#0D0AA7',
        fontWeight: 'bold'
    },

    input: {
        backgroundColor: '#C4C4C4',
        padding: 20,
        marginBottom: 16
    },

    btn: {
        backgroundColor: '#C4C4C4',
        padding: 20,
        marginBottom: 16
    },

})

export default styles