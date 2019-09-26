import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Forecast from './Forecast'

export default class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            forecast: {
                province: '-', main: '-', description: '-', temp: 0.0, minTemp: 0.0, maxTemp: 0.0, humidity: 0, pressure: 0, windSpeed: 0
            }
        }
    }
    fetchData = () => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.props.zipCode},th&units=metric&APPID=fd68c0f2039c5a25f666a9ff374bc93e`)
            .then((response) => response.json())
            .then((json) => {
                this.setState(
                    {
                        forecast: {
                            province: json.name,
                            main: json.weather[0].main,
                            description: json.weather[0].description,
                            temp: json.main.temp,
                            minTemp: json.main.temp_min,
                            maxTemp: json.main.temp_max,
                            humidity: json.main.humidity,
                            pressure: json.main.pressure,
                            windSpeed: json.wind.speed
                        }
                    });
                console.log(json)
            })
            .catch((error) => {
                console.warn(error);
            });
    }

    componentDidMount = () => this.fetchData()

    componentDidUpdate = (prevProps) => {
        if (prevProps.zipCode !== this.props.zipCode) {
            this.fetchData()
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../assets/bg.jpeg')} style={styles.backdrop}>
                    <Text style={styles.block}>Zip code is {this.props.zipCode}.</Text>
                    <Forecast {...this.state.forecast} />
                </ImageBackground>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: { paddingTop: 0 },
    backdrop: { width: '100%', height: '100%' },
    block: {
        margin: 10,
        marginTop: 15,
        backgroundColor: '#FFDD33',
        fontSize: 30,
        textAlign: 'center',
        // flex: 1,
        flexDirection: 'column',
        // opacity: 0.4,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

