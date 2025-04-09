import { View, Text, ScrollView } from "react-native";
import React from "react";
import Header from "../Header";

const TaskDetails = () => {
  return (
    <View>
      <ScrollView className="flex-1 bg-dark-100 p-4">
        <Header />
        <Text>This is for task details</Text>
      </ScrollView>
    </View>
  );
};

export default TaskDetails;
