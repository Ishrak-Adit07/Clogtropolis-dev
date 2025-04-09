import { View, Text, Pressable } from "react-native";
import { useRouter } from "expo-router";
import Header from "@/app/components/Header";
import { useUserStore } from "@/store/useStore";

const Profile = () => {
  const router = useRouter();
  const currentUser = useUserStore((state) => state.currentUser);

  if (!currentUser) {
    return (
      <View className="flex-1 justify-center items-center p-6">
        <Text className="text-black text-base text-center">
          User profile not found.
        </Text>
      </View>
    );
  }

  return (
    <View className="flex-1 items-center px-6 mt-10">
      <Header />
      <Text className="text-3xl font-bold text-[#1387ab] mb-8 mt-10">
        User Profile
      </Text>

      {/* User Info */}
      <View className="bg-slate-300 p-4 rounded-lg w-full text-black text-base gap-2">
        <Text className="text-xl">
          <Text className="font-semibold ">Name: </Text>
          {currentUser.name}
        </Text>
        <Text className="text-[#1387ab] font-bold text-xl">
          <Text className="font-semibold text-black">Role: </Text>
          {currentUser.role}
        </Text>
      </View>

      <View className="bg-dark-200 rounded-lg w-full mt-10 ml-2 mb-20 text-black text-base gap-2">
        <Text className="font-semibold text-black text-xl">
          Employee ID: {currentUser.id}
        </Text>
      </View>

      {/* Logout Button */}
      <Pressable
        className="w-full h-12 bg-[#1387ab] rounded-md flex items-center justify-center"
        onPress={() => router.push("../login")}
      >
        <Text className="text-white text-lg font-bold">Log out</Text>
      </Pressable>
    </View>
  );
};

export default Profile;
