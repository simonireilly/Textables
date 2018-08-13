import { StackNavigator } from 'react-navigation'
import TextScreen from '../Containers/TextScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  TextScreen: { screen: TextScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'TextScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
