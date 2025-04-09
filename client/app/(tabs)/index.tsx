import { View, Text, ScrollView, FlatList } from "react-native";
import React from "react";
import IndexProfile from "@/app/components/IndexProfile";
import { ASSIGNED_TASKS } from "@/constants/dummy";
import TaskCard from "@/app/components/TaskCard";
import MapListToggleButton from "@/app/components/buttons/MapListToggleButton";

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

        <View className="w-full mb-20">
          <View>
            <Text className="text-2xl text-black font-bold text-left mt-4 mb-2">
              Assigned Tasks
            </Text>
            <MapListToggleButton />
          </View>
          <View className="bg-[#0e343d] px-2 rounded-lg">
            <FlatList
              data={ASSIGNED_TASKS}
              renderItem={({ item }) => <TaskCard task={item} />}
              keyExtractor={(item) => item.id.toString()}
              className="mt-2 w-full"
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              scrollEnabled={false}
            />
          </View>
        </View>

        <View className="w-full mb-20">
          <View>
            <Text className="text-2xl text-black font-bold text-left mt-4 mb-2">
              Past Tasks
            </Text>
            <MapListToggleButton />
          </View>
          <View className="bg-[#0e343d] px-2 rounded-lg">
            <FlatList
              data={ASSIGNED_TASKS}
              renderItem={({ item }) => <TaskCard task={item} />}
              keyExtractor={(item) => item.id.toString()}
              className="mt-2 w-full"
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              scrollEnabled={false}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default index;
