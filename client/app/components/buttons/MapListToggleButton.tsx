import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const MapListToggleButton = () => {
  const [viewType, setViewType] = useState<"list" | "map">("list");

  return (
    <View className="flex-row bg-black rounded-full p-1 max-w-[140px] mb-6">
      <TouchableOpacity
        onPress={() => setViewType("list")}
        className={`px-3 py-1 rounded-full ${
          viewType === "list" ? "bg-white" : "bg-black"
        }`}
      >
        <Text
          className={`text-xs font-semibold ${
            viewType === "list" ? "text-black" : "text-white"
          }`}
        >
          List View
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setViewType("map")}
        className={`px-3 py-1 rounded-full ${
          viewType === "map" ? "bg-white" : "bg-black"
        }`}
      >
        <Text
          className={`text-xs font-semibold ${
            viewType === "map" ? "text-black" : "text-white"
          }`}
        >
          Map View
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default MapListToggleButton;
