import { View, Text, ScrollView } from "react-native";
import React from "react";
import IndexProfile from "@/components/IndexProfile";

const index = () => {
  return (
    <View className="flex-1 items-center my-auto">
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          minHeight: "100%",
          paddingBottom: 10,
        }}
      >
        <IndexProfile />
      </ScrollView>
    </View>
  );
};

export default index;
