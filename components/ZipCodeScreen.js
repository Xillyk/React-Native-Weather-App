import React from 'react';
import { ImageBackground, StyleSheet, FlatList, View, Text, TouchableHighlight } from 'react-native';

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
]

const ZipItem = ({ place, code, navigate }) => (
    <TouchableHighlight onPress={() => navigate('Weather', { zipCode: code })}>
        <View style={styles.block}>
            <Text style={styles.zipPlace}>{place}   {code}</Text>
            {/* <Text style={styles.zipCode}>{code}</Text> */}
        </View>
    </TouchableHighlight>)


const _keyExtractor = item => item.code

export default class ZipCodeScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: (<Text>Choose a zip code</Text>),
        }
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../assets/bg2.jpg')} style={styles.backdrop}>
                    <View>
                        <FlatList
                            data={availableZipItems}
                            keyExtractor={_keyExtractor}
                            renderItem={({ item }) => <ZipItem {...item} navigate={navigate} />} />
                    </View>
                </ImageBackground>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: { paddingTop: 0 },
    backdrop: { width: '100%', height: '100%' },
    zipPlace: { textAlign: 'center', color: 'black', fontSize: 30, marginBottom: 20, marginTop: 20 },
    zipCode: { textAlign: 'center', color: 'blue', paddingLeft: 0, fontSize: 20 },
    block: {
        margin: 10,
        backgroundColor: 'white',
        fontSize: 30,
        textAlign: 'center',
        // flex: 1,
        flexDirection: 'column',
        opacity: 0.65,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
