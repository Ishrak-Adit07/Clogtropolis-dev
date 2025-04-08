import { View, Text, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { DUMMY_USER } from "@/constants/dummy";
import Header from "@/components/Header";

const Profile = () => {
  const router = useRouter();

  return (
    <View className="flex-1 items-center px-6 mt-10">
      <Header />
      <Text className="text-3xl font-bold text-blue-400 mb-8 mt-6">
        User Profile
      </Text>

      {/* User Info */}
      <View className="bg-slate-300 p-4 rounded-lg w-full text-black text-base gap-2">
        <Text className="text-xl">
          <Text className="font-semibold ">Name:</Text> {DUMMY_USER.name}
        </Text>
        <Text className="text-blue-400 font-bold text-xl">
          <Text className="font-semibold text-black">Role:</Text>
          {DUMMY_USER.role}
        </Text>
      </View>

      <View className="bg-dark-200 rounded-lg w-full mt-8 ml-2 mb-8 text-black text-base gap-2">
        <Text className="font-semibold text-black text-xl">
          Employee ID: {DUMMY_USER.id}
        </Text>
      </View>

      {/* Logout Button */}
      <Pressable
        className="w-full h-12 bg-blue-400 rounded-md flex items-center justify-center"
        onPress={() => router.push("../login")}
      >
        <Text className="text-white text-lg font-bold">Log out</Text>
      </Pressable>
    </View>
  );
};

export default Profile;
