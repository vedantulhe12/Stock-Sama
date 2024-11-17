import React from "react";
import { View, Text, Image } from "react-native";

const Group = () => {
  return (
    <View className="flex-1 w-full h-[268px] relative">
      {/* Background Rectangle */}
      <View className=" left-0 w-[371px] h-[268px] bg-[#326afd] rounded-2xl" />

      {/* Results Overview Section */}
      <View className=" top-[100px] left-1/2 -ml-[185.5px] w-[371px] h-[168px] bg-white rounded-b-2xl">
        <Text className=" top-[16px] left-[12px] text-[#333] text-[20px] font-semibold">Results Overview</Text>
        <View className=" top-[72px] flex-row justify-center w-[371px] space-x-1.5">
          {/* Confidence Level */}
          <View className="w-[114px] items-center">
            <Text className="text-[28px] text-[#333] font-semibold">88%</Text>
            <Text className="text-[14px] text-[#747474] text-center font-semibold">Confidence Level Percentage</Text>
          </View>
          {/* Manipulation Likelihood */}
          <View className="w-[114px] items-center">
            <Text className="text-[28px] text-[#333] font-semibold">53%</Text>
            <Text className="text-[14px] text-[#747474] text-center font-semibold">Manipulation Likelihood</Text>
          </View>
          {/* Authentic Content */}
          <View className="w-[128px] items-center">
            <Text className="text-[28px] text-[#333] font-semibold">63%</Text>
            <Text className="text-[14px] text-[#747474] text-center font-semibold">Authentic Content Percentage</Text>
          </View>
        </View>
      </View>

      {/* Detection Interval Section */}
      <View className="absolute top-[12px] left-1/2 -ml-[165.5px] w-[332px] space-y-1 justify-center items-center">
        <View className="relative h-[46px] w-[314px]">
          <View className="absolute top-[6px] w-[314px] h-[10px] rounded-xl bg-[#e0e0e0]">
            <View className="absolute top-0 left-[41px] w-[122px] h-full bg-[#ff7d79]" />
          </View>
          <View className="absolute top-0 left-[41px] w-[3px] h-[20px] bg-white rounded-full" />
          <View className="absolute top-0 left-[160px] w-[3px] h-[20px] bg-white rounded-full" />
          <Text className="absolute top-[26px] left-[30px] text-white text-[16px] font-semibold">1:10</Text>
          <Text className="absolute top-[26px] left-[146px] text-white text-[16px] font-semibold">3:20</Text>
        </View>

        {/* Deepfake Detection Text */}
        <View className="flex-row justify-center items-center space-x-1">
          <Image className="w-[18px] h-[18px]" resizeMode="cover" source={{ uri: "Group.png" }} />
          <Text className="text-[12px] text-white font-semibold text-center w-[314px]">
            Deepfake detected in the above given time interval
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Group;
