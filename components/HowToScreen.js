import * as React from "react";
import { Text, View, StyleSheet, ImageBackground } from "react-native";

export default function HowToScreen() {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.head}> How To Play A Game Of Tic-Tac-Toe</Text>
        <Text style={styles.paragraph}>
          You probably already know how to play Tic-Tac-Toe. It's a really
          simple game, right? That's what most people think. But if you really
          wrap your brain around it, you'll discover that Tic-Tac-Toe isn't
          quite as simple as you think! Tic-Tac -Toe (along with a lot of other
          games) involves looking ahead and trying to figure out what the person
          playing against you might do next.
        </Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.head}> Rules For Tic-Tac-Toe</Text>
        <Text style={styles.paragraph}>
          The game is played on a grid that's 3 squares by 3 squares. You are X,
          your friend (or the computer in this case) is O. Players take turns
          putting their marks in empty squares.The first player to get 3 of her
          marks in a row (up, down, across, or diagonally) is the winner. When
          all 9 squares are full, the game is over. If no player has 3 marks in
          a row, the game ends in a tie.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 25,
    backgroundColor: "#4f3bb3",
  },
  head: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    textDecorationLine: "underline",
    paddingBottom: 10,
    color: "white",
  },
  paragraph: {
    fontSize: 18,
    textAlign: "justify",
    color: "white",
    paddingBottom: 25,
  },
});
