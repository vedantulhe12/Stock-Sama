import React, { useState, useEffect } from "react";
import { Alert, ScrollView, Text, View } from "react-native";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router";
import apiService from "../../services/apiService";



export default function SignUp() {
// 	const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSubmitting, setSubmitting] = useState(false);

	const [form, setForm] = useState({
		email: "",
		password: "",
		name: "",

	});


  const handleSignUp = () => {
    // Handle the sign-up logic here
    // console.log('Sign Up details:', { username,email, password });
    if (form.username === "" || form.email === "" || form.password === "") {
      Alert.alert("Error", "Please fill in all fields");
    } else {
		setSubmitting(true);
      router.push("/home"); // Simulate loading delay
    }
}

	return (
		<SafeAreaView className="flex-1 bg-[#000000] rounded-2xl">
			<ScrollView contentContainerStyle={{ height: "100%" }}>
						<View className="relative top-[186px] left-[50%] -mx-[161.5px] w-[330px] gap-5 z-10   " >
							<FormField title="Name" value={form.name} handleChangeText={(e) => setForm({ ...form, name: e })} placeholderTextColor={"#ffffff"}  />
							<FormField title="Your Email" value={form.email} handleChangeText={(e) => setForm({ ...form, email: e })} placeholderTextColor={"#ffffff"}  />
							<FormField title="password" value={form.password} handleChangeText={(e) => setForm({ ...form, password: e })} placeholderTextColor={"#ffffff"}  />
						</View>
					<View className="absolute top-[911px] left-[150px] rounded-[30px] w-[150px] h-[5px] bg-white" />
					<View className="absolute top-[596px] left-[50%] -ml-[186.5px] gap-4 flex flex-row items-center">
						<View className="w-[166px] h-[2px] rounded-[12px] bg-white" />
						<Text className="text-2xl font-semibold text-center text-white">OR</Text>
						<View className="w-[166px] h-[2px] rounded-[12px] bg-white" />
					</View>

					<Text className="absolute top-[59px] left-[33px] text-5xl text-center font-[Staatliches-Regular] text-white">
						<Text className="text-[#3de709]">USER </Text>
						<Text className="text-[#ff0000]">INFO</Text>
					</Text>

					<View className="absolute top-[438px] left-[50%] gap-8 -ml-[146.5px] w-[273px] h-[77px] flex flex-row items-center justify-between">
						{/* <View className="bg-[#f6f6fa] px-5 py-2 rounded-[35px] mb-10 ml-[80px]  flex items-center justify w-[149px] h-[43px]">
							<Text className="text-lg font-bold  text-[#333]">Sign up</Text>
						</View> */}
						<CustomButton title="Sign up" isLoading={isSubmitting} handlePress={handleSignUp} containerStyles="bg-[#f6f6fa] px-5 py-2 left-[50%]  top-[30px] w-[149px] h-[43px] absolute -ml-[66.5px] rounded-[35px] " textStyles={"text-[#333] text-lg"} />
						<View className="absolute top-[90px] left-[25px] flex flex-row ">
							<Text className="text-lg text-[#ffffff99]">Already have an account?</Text>
							<Link href={"/signin"} className="text-lg font-bold text-white"> Login </Link>
						</View>
					</View>

			</ScrollView>
		</SafeAreaView>

	);
};