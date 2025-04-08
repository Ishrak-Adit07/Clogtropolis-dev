import { useState } from "react";
import { View, Text, TextInput, Pressable, Image } from "react-native";
import { useRouter } from "expo-router";
import { icons } from "@/constants/icons";

export default function Login() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const signin = async () => {
    try {
      // const response = await fetch("https://your-api.com/api/login", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ name, password }),
      // });

      // const data = await response.json();

      // if (!response.ok) {
      //   alert(data.message || "Login failed");
      //   return;
      // }

      console.log("Logged in");
      router.push("./(tabs)");
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <View className="flex-1 justify-center items-center bg-gray-100 px-6 my-auto">
      <Image
        source={icons.logo}
        style={{
          width: 100,
          height: 100,
          marginTop: 20,
          marginBottom: 15,
          marginHorizontal: "auto",
        }}
        resizeMode="contain"
      />

      <Text className="text-3xl text-center text-[#0d8eb5] font-bold mb-8">
        Log in to account
      </Text>

      <TextInput
        className="w-72 h-12 bg-white border-2 border-gray-300 rounded-md px-4 text-gray-700"
        placeholder="Name"
        placeholderTextColor="#9CA3AF"
        keyboardType="default"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        className="w-72 h-12 bg-white border-2 border-gray-300 rounded-md px-4 text-gray-700 mt-4"
        placeholder="Password"
        placeholderTextColor="#9CA3AF"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Pressable
        className="w-72 h-12 bg-[#1387ab] mt-6 rounded-md flex items-center justify-center"
        onPress={signin}
      >
        <Text className="text-white text-lg font-bold">Sign in</Text>
      </Pressable>

      <View className="flex-row mt-3">
        <Text className="text-[#1387ab]">Don't have an account? </Text>
        <Pressable>
          <Text className="text-[#1387ab] underline">Sign up</Text>
        </Pressable>
      </View>
    </View>
  );
}
