import { createStackNavigator } from 'react-navigation-stack';
import WeatherScreen from './components/WeatherScreen'
import ZipCodeScreen from './components/ZipCodeScreen'
import { createAppContainer } from "react-navigation";

const RootStack = createStackNavigator({
  Weather: WeatherScreen, ZipCode: ZipCodeScreen
},
  {
    initialRouteName: 'Weather',
    initialRouteParams: { zipCode: '90110' }
  })

// export default class App extends React.Component {
//   render() {
//     return (<RootStack />);
//   }
// }

const App = createAppContainer(RootStack);
export default App;