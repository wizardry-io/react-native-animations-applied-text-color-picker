import React, { Component } from "react";
import { View, Text } from "react-native";

class App extends Component {
  render() {
    return (
      <View style={{ height: "100%", justifyContent: "center" }}>
        <Text
          style={{
            textAlign: "center",
            fontFamily: "sans-serif",
            fontSize: 30
          }}
        >
          Hello, world!
        </Text>
      </View>
    );
  }
}

export default App;
