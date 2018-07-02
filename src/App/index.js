import React, { PureComponent } from 'react';
import { InteractionManager, View, Text, StyleSheet } from 'react-native';
import {
  Container,
  Header,
  Left,
  Right,
  Body,
  Title,
  Content,
  Spinner,
  Switch,
  List,
  ListItem
} from 'native-base';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      switch1Enabled: false,
      switch2Enabled: false,
    };
    this.toggleSwitch1 = this.toggleSwitch1.bind(this);
    this.toggleSwitch2 = this.toggleSwitch2.bind(this);
  }

  toggleSwitch1() { 
    this.setState({switch1Enabled: !this.state.switch1Enabled});
  }

  toggleSwitch2() { 
    this.setState({switch2Enabled: !this.state.switch2Enabled});
  }

  render() {
    return (
        <Container>
        <Header>
          <Left/>
          <Body>
            <Title>Configuration</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <View style={styles.section}>
            <Text>Switch outside List</Text>
            <View style={styles.section}>
              <Switch
                value={this.state.switch1Enabled}
                onValueChange={this.toggleSwitch1}
              />
            </View>
          </View>
          <List style={{ flex: 1, backgroundColor: '#fff' }}>
            <ListItem itemDivider>
              <Text>iOS</Text>
            </ListItem>
            <ListItem>
              <Body>
                <Text>Test Switch</Text>
              </Body>
              <Right>
                <Switch
                  value={this.state.switch2Enabled}
                  onValueChange={this.toggleSwitch2}
                />
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    section: {
      marginLeft: 10,
      marginTop: 10,
      marginBottom: 20,
    },
    link: {
      color: 'blue',
      textDecorationLine: 'underline'
    }
  });

  export default App;
