import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { useTaskStore } from "@/store/taskStore";
import { useQuestionStore } from "@/store/questionStore";
import { DUMMY_QUESTIONS } from "@/constants/questions";

interface TaskCardProps {
  task: Task;
}

const TaskCard = ({ task }: TaskCardProps) => {
  const router = useRouter();
  const setCurrentTask = useTaskStore((state) => state.setCurrentTask);
  const setCurrentQuestions = useQuestionStore(
    (state) => state.setCurrentQuestions
  );

  const routeToTaskDetails = () => {
    setCurrentTask(task);
    setCurrentQuestions(DUMMY_QUESTIONS);
    router.push(`../components/task/${task.id}`);
  };

  return (
    <TouchableOpacity
      className="w-full bg-white rounded-2xl p-2 mb-2 shadow-md shadow-black/10"
      onPress={routeToTaskDetails}
    >
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
