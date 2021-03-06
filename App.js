//props import
import React from 'react';
import * as Font from 'expo-font';
import {
  Ionicons
} from '@expo/vector-icons';
import TabScreen from './src/screens/TabScreen';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }
  //loads roboto font
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({
      isReady: true
    });
  }
  //shows Tabscreen (app)
  render() {
    return ( <
      TabScreen / >
    );
  }
}