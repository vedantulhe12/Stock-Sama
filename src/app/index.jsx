import React, { useEffect } from "react";
import {  ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import apiService from "../services/apiService";
import { useGlobalContext } from "../context/GlobalProvider";
import AddGifImage from "../components/Gif"
import CustomButton from "../components/CustomButton"
import { Link, router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Home() {
  const { setIsLogged, setUser } = useGlobalContext();
  const [route, setRoute] = React.useState("");
  const checkLogin = async () => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      // setUser(JSON.parse(user));
      setIsLogged(true);
      setRoute("/home");
    } else {
      setRoute("/signup");
    }
  };

  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <SafeAreaView className="flex bg-[#070420]">
      <ScrollView contentContainerStyle={{ height: "100%" }}>

        <View className=" flex flex-col w-full h-full justify-center  ">

          <Text className="text-[#00ff1a] text-[30px] font-semibold items-center mb-6 mt-8 ml-4 ">
          Stock-
          <Text className="text-[#c20505] text-[30px] font-semibold  ">
          Sama
          </Text>
          </Text>
          <View className=" flex grow justify-center  ">
            <AddGifImage />
          </View>
          <View className=" flex flex-col grow justify-center items-center mt-[-200px] ">
            <CustomButton title="Get Started" handlePress={() => { router.push(route) }} containerStyles="bg-[#88A3EE]  rounded-[30px] w-[200px] h-[50px]" textStyles="text-[#4A10C5] text-xl" />
            {/* <CustomButton title="Get Started" handlePress={() => { router.push("/signup") }} containerStyles="bg-[#88A3EE]  rounded-[30px] w-[200px] h-[50px]" textStyles="text-[#4A10C5] text-xl" /> */}
            <View className="flex flex-row grow mt-[-60px] items-center " >
              <Text className="text-[16px] text-[#ffffff99]">Already have an account?</Text>
              <Link href={"/signin"} className="text-lg font-bold text-white"> Login </Link>
            </View>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>

  );
};


