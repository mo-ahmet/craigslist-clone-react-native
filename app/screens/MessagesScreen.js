import React, { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";

import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemSepreator from "../components/ListItemSepreator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/mosh.jpg"),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);

  const handleDelete = (message) => {
    const newMessages = messages.filter(m.id !== message.id);
    setMessages(newMessages);
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            tite={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Messages Selected", item)}
            renderRightActions={() => <ListItemDeleteAction onPress={} />}
          />
        )}
        ItemSeparatorComponent={ListItemSepreator}
      />
    </Screen>
  );
}

export default MessagesScreen;
