import { View, Text, ScrollView, FlatList } from "react-native";
import React from "react";
import IndexProfile from "@/components/IndexProfile";
import { ASSIGNED_TASKS } from "@/constants/dummy";
import TaskCard from "@/components/TaskCard";

const index = () => {
  return (
    <View className="flex-1 items-center my-auto w-full">
      <ScrollView
        className="flex-1 px-5 w-full"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          minHeight: "100%",
          paddingBottom: 10,
        }}
      >
        <IndexProfile />

        <View className="w-full">
          <FlatList
            data={ASSIGNED_TASKS}
            renderItem={({ item }) => <TaskCard task={item} />}
            keyExtractor={(item) => item.id.toString()}
            className="mt-2 pb-32 w-full"
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            scrollEnabled={false}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default index;
