import React, { useState } from "react";
import { Alert, FlatList, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native";
import apiService from "../../services/apiService";

export default function Result() {

  const [responses, setResponses] = useState("");
  const [isresponse, setisresponse] = useState("true");

  const handlepredict = async () => {
    try {
      const res = await apiService.post("/predict");
      Alert.alert("sucess", "suedvdf");
      console.log(res);
      setResponses(res);
      setisresponse(false);

    } catch (error) {
      Alert.alert("Error", error.message);
    }
  }
  const textLines = responses ? responses.split('\n') : [];

  return (
    <SafeAreaView className="flex bg-[#1a1a1a] w-full h-full">
     
        <View className=" w-full h-full justify-center ">
        {isresponse && (
          
          <TouchableOpacity className="flex items-center justify-center  bg-[#068057] p-4 m-4 border-rounded-[8px] " onPress={handlepredict}>
            <Text className = "text-[#FFFFFF] text-[20px] ">Result</Text>
          </TouchableOpacity>
          
        )}
      
        
          {!isresponse && (
            <FlatList
              data={textLines}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <Text className="text-xl font-bold text-[#fff] m-4 ">{item}</Text>
              )}
            />

          )}

        </View>
      
    </SafeAreaView >

  );
};
