import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { icons } from "@/constants/icons"; // Ensure you have icons.person, icons.calendar, etc.

interface TaskCardProps {
  task: Task;
}

const TaskCard = ({ task }: TaskCardProps) => {
  return (
    <TouchableOpacity className="w-full bg-white rounded-2xl p-2 mb-2 shadow-md shadow-black/10">
      {/* Location title */}
      <Text className="text-lg font-semibold text-gray-900 mb-1">
        {task.location.name}
      </Text>

      {/* Address & Date Row */}
      <View className="flex-row justify-between items-center mb-2">
        <View className="flex-row items-center flex-1 mr-2">
          <Text className="text-sm text-gray-700" numberOfLines={1}>
            {`${task.location.address}, ${task.location.city}-${task.location.postal_code}`}
          </Text>
        </View>
        <View className="flex-row items-center">
          <Text className="text-sm text-gray-700">{task.date}</Text>
        </View>
      </View>

      {/* Description */}
      {/* <Text className="text-sm text-gray-800 mb-3" numberOfLines={2}>
        {task.description}
      </Text> */}
    </TouchableOpacity>
  );
};

export default TaskCard;
