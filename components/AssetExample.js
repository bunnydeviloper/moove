import * as React from 'react';
import { Text, TextInput, Button, View, StyleSheet, Image } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';

export default class AssetExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonBoth}>
          <Button title="One Way" color="#0261f9" />
          <Button title="Round Trip" color="#0c0c0c" />
        </View>
        
        <View style={styles.buttonBoth}>
        <TextInput
          style={{height: 40}}
          placeholder="Enter from location: San Francisco"
          onChangeText={(text) => this.setState({text})}
        />
        </View>

        <TextInput
          style={{height: 40}}
          placeholder="Enter to location: Los Angeles"
          onChangeText={(text) => this.setState({text})}
        />
        <TextInput
          style={{height: 40}}
          placeholder="hello"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={styles.paragraph}>
          {this.state.text.split(' ').map(word => word && '🍕').join(' ')}
        </Text>
        <Text style={styles.paragraph}>

        </Text>
        <Button title="SEARCH" color="#0095ff" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 60,
    width: 60,
  },
  buttonBoth: {
    flexWrap: 'wrap', 
    alignItems: 'flex-start',
    flexDirection:'row',
  },
});
