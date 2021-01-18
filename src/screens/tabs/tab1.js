//props import
import React, { Component } from 'react';
import { Alert, View, ActivityIndicator, Text,  alert } from 'react-native';
import { Container, Header, Content, List, ListItem, Thumbnail, Left, Body, Right, Button } from 'native-base';

import DataItem  from '../../component/dataItem';

import { getArticles } from '../../service/news';

export default class ListThumbnailExample extends Component {

  constructor(props) {
    super(props);

    this.state= {
      isLoading: true,
      data: null
    }
  }
//gets API info
  componentDidMount() {
    getArticles().then(data => {
      this.setState({
        isLoading: false,
        data: data
      });
      //if not succeeded error
    }, error => {
      Alert.alert('Error', 'something went wrong!');
    }
    )
  }
  //shows render screen
  render() {
    console.log(this.state.data);

    let view = this.state.isLoading ? (
      <View>
        <ActivityIndicator animating={this.state.isLoading}/>
        <Text style={{marginTop: 10}}>Please wait...</Text>
      </View>
    ) : (
// loads data from API
      <List
          dataArray={this.state.data}
          renderRow={(item) =>{
            return (<DataItem data={item} />
            )
          }}
          />
    )
//Shows view content
    return (
      <Container>
        <Content>
              {View} 
        </Content>
      </Container>
          )
        }
      }