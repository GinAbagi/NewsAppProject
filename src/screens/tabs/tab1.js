import React, { Component } from 'react';
import { Alert, alert } from 'react-native';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';

import { getArticles } from '../../service/news';

export default class ListThumbnailExample extends Component {

  constructor(props) {
    super(props);

    this.state= {
      isLoading: true,
      data: null
    }
  }

  componentDidMount() {
    getArticles().then(data => {
      this.setState({
        isLoading: false,
        data: data
      });
    }, error => {
      Alert.alert('Error', 'something went wrong!');
    }
    )
  }
  render() {
    console.log(this.state.data);
    return (
      <Container>
        <Content>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://i.ibb.co/71p216S/verenigde-staten-usa-vs-new-york-city-hq-5a0ec5fea2a27.jpg' }} />
              </Left>
              <Body>
                <Text>News Article</Text>
                <Text note numberOfLines={2}>Its time to build a difference . . Its time to build a difference . . Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://i.ibb.co/71p216S/verenigde-staten-usa-vs-new-york-city-hq-5a0ec5fea2a27.jpg' }} />
              </Left>
              <Body>
                <Text>News Article</Text>
                <Text note numberOfLines={2}>Its time to build a difference . . Its time to build a difference . . Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://i.ibb.co/71p216S/verenigde-staten-usa-vs-new-york-city-hq-5a0ec5fea2a27.jpg' }} />
              </Left>
              <Body>
                <Text>News Article</Text>
                <Text note numberOfLines={2}>Its time to build a difference . . Its time to build a difference . . Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://i.ibb.co/71p216S/verenigde-staten-usa-vs-new-york-city-hq-5a0ec5fea2a27.jpg' }} />
              </Left>
              <Body>
                <Text>News Article</Text>
                <Text note numberOfLines={2}>Its time to build a difference . . Its time to build a difference . . Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
          );
        }
      }