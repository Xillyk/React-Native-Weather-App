import React from 'react';
import Weather from './Weather'
import { StyleSheet, Button, Text } from 'react-native';

export default class WeatherScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: (<Text style={styles.text}>Weather</Text>),
            headerRight: (
                <Button title="Change zip" onPress={() => navigation.navigate('ZipCode')} />
            )
        }
    }

    render() {
        const zipCode = this.props.navigation.getParam('zipCode')
        return (
            <Weather zipCode={zipCode} />);
    }
}



const styles = StyleSheet.create({
    text: { textAlign: 'center', color: 'orange', paddingLeft: 0, fontSize: 20 ,marginLeft:20}
});