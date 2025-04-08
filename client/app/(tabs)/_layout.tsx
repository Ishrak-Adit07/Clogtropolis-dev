// app/(employee)/tabs/_layout.tsx
import { Tabs } from "expo-router";
import { View, Image } from "react-native";
import { icons } from "@/constants/icons";

function TabIcon({ focused, icon }: any) {
  if (focused) {
    return (
      <View className="flex flex-row w-full flex-1 gap-1 min-w-[112px] min-h-14 mt-4 justify-center items-center rounded-full overflow-hidden">
        <Image source={icon} tintColor="#30dbc7" className="size-5" />
      </View>
    );
  }

  return (
    <View className="size-full justify-center items-center mt-4 rounded-full">
      <Image source={icon} tintColor="#3080db" className="size-5" />
    </View>
  );
}

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: "#0e343d",
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 20,
          height: 52,
          position: "absolute",
          overflow: "hidden",
          borderWidth: 1,
          borderColor: "#0e343d",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "index",
          headerShown: false,
          tabBarIcon: ({ focused }: { focused: boolean }) => (
            <TabIcon focused={focused} icon={icons.home} title="Pending" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "profile",
          headerShown: false,
          tabBarIcon: ({ focused }: { focused: boolean }) => (
            <TabIcon focused={focused} icon={icons.person} title="Pending" />
          ),
        }}
      />
    </Tabs>
  );
}
