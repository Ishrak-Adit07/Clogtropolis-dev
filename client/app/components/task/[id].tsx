import { View, ScrollView, Text, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import Header from "../Header";
import { RadioButton } from "react-native-paper";
import Checkbox from "expo-checkbox";
import { useRouter } from "expo-router";
import { useQuestionStore } from "@/store/questionStore";

const TaskDetails = () => {
  const current_questions = useQuestionStore(
    (state) => state.current_questions
  );

  if (!current_questions) {
    return (
      <View className="flex-1 justify-center items-center p-6">
        <Text className="text-black text-base text-center">
          Questions for selected tasks are not found. Please try again later.
        </Text>
      </View>
    );
  }

  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [key: string]: any }>({});

  const currentQuestion = current_questions[currentQuestionIndex];

  const handleShortAnswer = (text: string) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: text,
    }));
  };

  const handleSingleChoice = (id: string) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: id,
    }));
  };

  const handleMultipleChoice = (id: string) => {
    const prevAnswers = answers[currentQuestion.id] || [];
    if (prevAnswers.includes(id)) {
      setAnswers((prev) => ({
        ...prev,
        [currentQuestion.id]: prevAnswers.filter((i: string) => i !== id),
      }));
    } else {
      setAnswers((prev) => ({
        ...prev,
        [currentQuestion.id]: [...prevAnswers, id],
      }));
    }
  };

  return (
    <View className="flex-1 bg-white relative">
      <ScrollView
        contentContainerStyle={{ paddingBottom: 160 }}
        showsVerticalScrollIndicator={false}
      >
        <Header />
        <View className="mt-10 px-6">
          <Text className="text-xl font-bold text-emerald-600 mb-4">
            Q{currentQuestionIndex + 1}: {currentQuestion.question_text}
          </Text>

          {currentQuestion.type === "short_descriptive_answer" && (
            <TextInput
              className="border p-3 rounded-md text-base"
              placeholder="Type your answer..."
              value={answers[currentQuestion.id] || ""}
              onChangeText={handleShortAnswer}
              multiline
            />
          )}

          {currentQuestion.type === "multiple_choice_single" &&
            currentQuestion.options.map((opt) => (
              <Pressable
                key={opt.id}
                className="flex-row items-center mb-3"
                onPress={() => handleSingleChoice(opt.id)}
              >
                <RadioButton
                  value={opt.id}
                  status={
                    answers[currentQuestion.id] === opt.id
                      ? "checked"
                      : "unchecked"
                  }
                  onPress={() => handleSingleChoice(opt.id)}
                />
                <Text className="ml-2">{opt.text}</Text>
              </Pressable>
            ))}

          {currentQuestion.type === "multiple_choice_multiple" &&
            currentQuestion.options.map((opt) => (
              <View key={opt.id} className="flex-row items-center mb-3">
                <Checkbox
                  value={
                    answers[currentQuestion.id]
                      ? answers[currentQuestion.id].includes(opt.id)
                      : false
                  }
                  onValueChange={() => handleMultipleChoice(opt.id)}
                />
                <Text className="ml-2">{opt.text}</Text>
              </View>
            ))}
        </View>
      </ScrollView>

      <View className="absolute bottom-10 left-4 right-4 bg-[#0e343d] rounded-lg px-6 py-4 flex-row justify-between">
        {currentQuestionIndex > 0 ? (
          <Pressable
            className="bg-gray-300 px-4 py-2 rounded-md"
            onPress={() =>
              setCurrentQuestionIndex((prev) => Math.max(prev - 1, 0))
            }
          >
            <Text>Back</Text>
          </Pressable>
        ) : (
          <View />
        )}

        {currentQuestionIndex < current_questions.length - 1 ? (
          <Pressable
            className="bg-emerald-500 px-4 py-2 rounded-md ml-auto"
            onPress={() => setCurrentQuestionIndex((prev) => prev + 1)}
          >
            <Text className="text-white">Next</Text>
          </Pressable>
        ) : (
          <Pressable
            className="bg-[#3080db] px-4 py-2 rounded-md ml-auto"
            onPress={() => {
              console.log("Submitted answers:", answers);
              router.push("../../(tabs)");
            }}
          >
            <Text className="text-white">Submit</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default TaskDetails;
