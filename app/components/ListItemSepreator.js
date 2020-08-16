import React from "react";
import { StyleSheet, View } from "react-native";

import Colors from "../config/colors";

function ListItemSepreator() {
  return <View style={styles.sepreator} />;
}

const styles = StyleSheet.create({
  sepreator: {
    width: "100%",
    height: 5,
    backgroundColor: Colors.light,
  },
});
export default ListItemSepreator;
