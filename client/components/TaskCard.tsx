import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
// import { useRouter } from "expo-router";
import { icons } from "@/constants/icons"; // replace or add appropriate icons

interface TaskCardProps {
  task: Task;
}

const BillCard = ({ task }: TaskCardProps) => {
  //   const router = useRouter();
  //   const setSelectedBill = useBillStore((state) => state.setSelectedBill);

  //   const routeToBillDetails = () => {
  //     setSelectedBill(bill);
  //     router.push(`../components/bill/৳ {bill.bill_id}`);
  //   };

  return (
    <TouchableOpacity
      className="w-full bg-dark-200 rounded-xl p-4 mb-4 shadow-md shadow-black/20"
      //   onPress={routeToBillDetails}
    >
      <View className="flex-row justify-between items-center mb-2 pt-2">
        <Text className="text-black font-bold text-base" numberOfLines={1}>
          {task.location.name}
        </Text>

        <Text className="text-red-500 font-semibold text-sm">
          <Image source={icons.person} className="size-4" />
          {`${task.location.address}, ${task.location.city}-${task.location.postal_code}`}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default BillCard;
