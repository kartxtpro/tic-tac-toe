import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  SafeAreaView,
  BackHandler,
  ScrollView,
  Alert,
} from "react-native";

export default class PlayScreen extends React.Component {
  state = {
    button: ["~", "~", "~", "~", "~", "~", "~", "~", "~"],
    c: -1,
  };

  gameOver = (h) => {
    const { navigation } = this.props;
    Alert.alert(
      "Game Over",
      h,
      [
        { text: "Home", onPress: () => navigation.goBack() },
        {
          text: "Exit",
          onPress: () => {
            navigation.goBack();
            BackHandler.exitApp();
          },
        },
      ],
      { cancelable: false }
    );
    return true;
  };

  calcResult = (c, b) => {
    const win = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    let a = -1;
    for (let i = 0; i < win.length; i++) {
      let c1 = win[i][0],
        c2 = win[i][1],
        c3 = win[i][2];

      let x = b;
      if (x[c1] === "X" && x[c2] === "X" && x[c3] === "X") {
        let h = "Player 'X' - Won the Game";
        this.gameOver(h);
        a = 1;
      } else if (x[c1] === "O" && x[c2] === "O" && x[c3] === "O") {
        let g = "Player O - Won the Game";
        this.gameOver(g);
        a = 1;
      }
    }
    if (c == 4 && a == -1) {
      let v = "Draw Match";
      this.gameOver(v);
    }
  };

  handlePress = (i) => {
    let b = [...this.state.button];
    b[i - 1] = "X";
    let m = -1,
    c = this.state.c + 1;
    if (c < 4) {
      while (m != 0) {
        let j = Math.floor(Math.random() * 9);
        if (b[j] == "~") {
          b[j] = "O";
          break;
        }
      }
    }
    this.setState({ button: b });
    this.setState({ c: c });
    this.calcResult(c, b);
    return;
  };

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={{ flex: 1 }}>
          <ScrollView>
            <View style={styles.container}>
              <View style={styles.dir}>
                <TouchableOpacity
                  onPress={() => {
                    if (this.state.button[0] == "~") {
                      this.handlePress(1);
                    }
                  }}
                  style={styles.button}
                >
                  <Text style={styles.text}>{this.state.button[0]}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    if (this.state.button[1] == "~") {
                      this.handlePress(2);
                    }
                  }}
                  style={styles.button}
                >
                  <Text style={styles.text}>{this.state.button[1]}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    if (this.state.button[2] == "~") {
                      this.handlePress(3);
                    }
                  }}
                  style={styles.button}
                >
                  <Text style={styles.text}>{this.state.button[2]}</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.dir}>
                <TouchableOpacity
                  onPress={() => {
                    if (this.state.button[3] == "~") {
                      this.handlePress(4);
                    }
                  }}
                  style={styles.button}
                >
                  <Text style={styles.text}>{this.state.button[3]}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    if (this.state.button[4] == "~") {
                      this.handlePress(5);
                    }
                  }}
                  style={styles.button}
                >
                  <Text style={styles.text}>{this.state.button[4]}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    if (this.state.button[5] == "~") {
                      this.handlePress(6);
                    }
                  }}
                  style={styles.button}
                >
                  <Text style={styles.text}>{this.state.button[5]}</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.dir}>
                <TouchableOpacity
                  onPress={() => {
                    if (this.state.button[6] == "~") {
                      this.handlePress(7);
                    }
                  }}
                  style={styles.button}
                >
                  <Text style={styles.text}>{this.state.button[6]}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    if (this.state.button[7] == "~") {
                      this.handlePress(8);
                    }
                  }}
                  style={styles.button}
                >
                  <Text style={styles.text}>{this.state.button[7]}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    if (this.state.button[8] == "~") {
                      this.handlePress(9);
                    }
                  }}
                  style={styles.button}
                >
                  <Text style={styles.text}>{this.state.button[8]}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 65,
    backgroundColor: "#179292",
  },
  dir: {
    flexDirection: "row",
  },
  button: {
    backgroundColor: "white",
    borderWidth: 45,
    borderColor: "white",
    opacity: 1,
    margin: 10,
  },
  text: {
    fontSize: 30,
  },
});
