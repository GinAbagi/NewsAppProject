import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs, Left, Body, Right, Title } from 'native-base';
import Tab1 from '../screens/tabs/tab1';
import Tab2 from '../screens/tabs/tab2';
import Tab3 from '../screens/tabs/tab3';

export default class TabsExample extends Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor:'#37897E'}} hasTabs>
        <Left/>
          <Body>
            <Title style={{color:'#FFFFFF'}}>News App</Title>
          </Body>
          <Right/>
        </Header>
        <Tabs>
          <Tab tabStyle={{backgroundColor:'#37897E'}}  
          activeTabStyle={{backgroundColor:'#37897E'}} 
          textStyle={{color:'#FFFFFF'}}
          activeTextStyle={{color:'#FFFFFF'}} heading="Tab1">
            <Tab1 />
          </Tab>
          <Tab tabStyle={{backgroundColor:'#37897E'}} 
          activeTabStyle={{backgroundColor:'#37897E'}} 
          textStyle={{color:'#FFFFFF'}}
          activeTextStyle={{color:'#FFFFFF'}} heading="Tab2">
            <Tab2 />
          </Tab>
          <Tab tabStyle={{backgroundColor:'#37897E'}} 
          activeTabStyle={{backgroundColor:'#37897E'}} 
          textStyle={{color:'#FFFFFF'}}
          activeTextStyle={{color:'#FFFFFF'}} heading="Tab3">
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}