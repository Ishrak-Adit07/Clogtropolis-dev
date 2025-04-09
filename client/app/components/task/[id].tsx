import { View, ScrollView, Text } from "react-native";
import React from "react";
import Header from "../Header";

const TaskDetails = () => {
  return (
    <View>
      <ScrollView>
        <Header />
        <Text className="text-center text-xl font-bold text-emerald-400 mt-20">
          Hello world
        </Text>
      </ScrollView>
    </View>
  );
};

export default TaskDetails;
