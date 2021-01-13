import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import Tab1 from './tabs/tab1';
import Tab2 from './tabs/tab2';
import Tab3 from './tabs/tab3';
export default class TabsExample extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs />
        <Tabs>
          <Tab heading="tab1">
            <Tab1 />
          </Tab>
          <Tab heading="tab2">
            <Tab2 />
          </Tab>
          <Tab heading="tab3">
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}