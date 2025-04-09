import { View, Text, Image } from "react-native";
import React from "react";
import { DUMMY_USER } from "@/constants/dummy";

const IndexProfile = () => {
  return (
    <View className="bg-white w-full rounded-xl p-4 mt-6 flex-row items-center justify-between shadow-md">
      <View className="flex-1 p-2">
        <Text className="text-black text-lg font-bold">{DUMMY_USER.name}</Text>
        <Text className="text-black text-base">{DUMMY_USER.role}</Text>
        <Text className="text-black text-sm">{DUMMY_USER.org}</Text>
      </View>
      <Image
        source={{ uri: DUMMY_USER.image || "https://via.placeholder.com/80" }}
        className="w-16 h-16 rounded-full ml-4 bg-gray-200"
        resizeMode="cover"
      />
    </View>
  );
};

export default IndexProfile;
