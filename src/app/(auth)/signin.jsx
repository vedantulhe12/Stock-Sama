import  React, { useState } from "react";
import { Alert, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { Link ,router } from "expo-router";
import {useGlobalContext}  from "../../context/GlobalProvider";
import apiService from "../../services/apiService";
import AsyncStorage from "@react-native-async-storage/async-storage";


const SignIn = () => {
	const { setUser, setIsLogged } = useGlobalContext();
	const [isSubmitting, setSubmitting] = useState(false);

	const [Form, setForm] = useState({
		email:"",
		password:""
	});

	const handleLogin = async () => {
		console.log(Form);
	
		// Check if fields are empty
		// if (Form.email === "" || Form.password === "") {
		//   Alert.alert("Error", "Please fill in all fields");
		// } else {
		  setSubmitting(true);
		  // Skip API call for testing, simulate success
		  setTimeout(() => {
			setSubmitting(false);
			Alert.alert("Success", "User signed in successfully");
			router.push("/home"); // Navigate to finbert page
			params={username:Form.name}
		  }, 500); // Simulate loading delay
		// }
	  };


	return (
		<SafeAreaView className="flex-1 bg-[#000000] ">
			<ScrollView contentContainerStyle={{ height: "100%" }} >
				<View className="  rounded-2xl ">
					<Text className="absolute top-[59px] left-[33px] text-5xl text-center font-[Staatliches-Regular] text-white">
						<Text className="text-[#1ec808]">Welcome </Text>
						<Text className="text-[#ff0000]">BACK !</Text>
					</Text>
					<View className="relative top-[186px] left-[50%] -mx-[161.5px] w-[330px] gap-5 z-10   " >
						<FormField  title = "Your Email" value={Form.email}  handleChangeText={(e)=>setForm({...Form,email:e})} keyboardType="email-address" placeholderTextColor={"#ffffff"}  />
						<FormField  title = "Your Password" value={Form.password} showPass={true}  handleChangeText={(e)=>setForm({...Form,password:e})} placeholderTextColor={"#ffffff"} />

					</View>

					<View className="absolute top-[911px] left-[150px] rounded-[30px] w-[150px] h-[5px] bg-white" />

					<View className="absolute top-[496px] left-[50%] -ml-[186.5px] gap-4 flex flex-row items-center">
						<View className="w-[166px] h-[2px] rounded-[12px] bg-white" />
						<Text className="text-2xl font-semibold text-center text-white">OR</Text>
						<View className="w-[166px] h-[2px] rounded-[12px] bg-white" />
					</View>


						<CustomButton title="Login" handlePress={handleLogin} isLoading={isSubmitting} textStyles={"text-[#333] text-lg"} containerStyles={"bg-[#f6f6fa] left-[50%] px-5 py-2 absolute top-[338px] -ml-[66.5px] w-[149px] h-[43px] rounded-[35px] "}  />
						<View className="absolute top-[410px] left-[100px] flex flex-row ">
							<Text className="text-lg text-[#ffffff99]">Don't have an account?</Text>
							<Link href={"/signup"} className="text-lg font-bold text-white"> Signup </Link>
						</View>




				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default SignIn;