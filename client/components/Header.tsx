import { View, Text, Image } from "react-native";
import React from "react";
import { icons } from "@/constants/icons";

const Header = () => {
  return (
    <View>
      <Image
        source={icons.logo}
        style={{
          width: 100,
          height: 100,
          marginTop: 20,
          marginBottom: 5,
          marginHorizontal: "auto",
        }}
        resizeMode="contain"
      />
      <Text className="text-2xl text-center">
        <Text className="text-blue-500">Clog</Text>
        <Text className="text-emerald-500">Tropolis</Text>
      </Text>
    </View>
  );
};

export default Header;
