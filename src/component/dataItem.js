//props import
import React, {Component} from 'react-native';
import { ListItem, Left, Thumbnail, Body, Text, Button } from 'native-base';

export default class DataItem extends Component {

    constructor(props) {
        super(props);
        this.data = props.data;
    }
//Article listitem
    render() {
        return(
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: this.data.urlToImage !=
                null ? this.data.urlToImage : 'https://i.ibb.co/71p216S/verenigde-staten-usa-vs-new-york-city-hq-5a0ec5fea2a27.jpg' }} />
              </Left>
              <Body>
                <Text>{this.data.title}</Text>
                <Text note numberOfLines={2}>{this.data.description}</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
        );
      
      }

    }
