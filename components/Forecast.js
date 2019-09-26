import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Forecast extends React.Component {
    render() {
        return (
            <View>
                <Text style={styles.childBlock}>City : {this.props.province}</Text>
                <Text style={styles.childBlock}>{this.props.main}</Text>
                <Text style={styles.childBlock}>{this.props.description}</Text>
                <Text style={styles.childBlock}>Average Temp : {this.props.temp}°C</Text>
                <Text style={styles.childBlock}>Min Temp : {this.props.minTemp}°C</Text>
                <Text style={styles.childBlock}>Max Temp : {this.props.maxTemp}°C</Text>
                <Text style={styles.childBlock}>Pressure : {this.props.pressure} hPa</Text>
                <Text style={styles.childBlock}>Humidity : {this.props.humidity} %</Text>
                <Text style={styles.childBlock}>Wind Speed : {this.props.windSpeed} Kmph</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    // container: { paddingTop: 25 },
    // backdrop: { width: '100%', height: '100%' },
    childBlock: {
        margin: 10,
        backgroundColor: '#ffdb03',
        textAlign: 'center',
        // flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        justifyContent: 'space-between',
        marginTop: 15,
        marginBottom: 15,
        fontSize: 25,
        color: 'blue'
        // alignItems: 'center'
    }
});