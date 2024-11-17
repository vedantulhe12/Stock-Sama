import React, { useEffect, useState } from "react";
import { router } from "expo-router";
import { useGlobalContext } from "../../context/GlobalProvider";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";


const Logout = () => {
    const { setUser } = useGlobalContext();
    const handleLogout = async () => {
        try {
            await AsyncStorage.removeItem("token");
            setUser(null);
            router.replace("/signin");
            Alert.alert("Success", "User signed out successfully");
        } catch (error) {
            console.error("Error during logout:", error);
        }
    };
    useEffect(() => {
        handleLogout();
    }, []);
};

export default Logout;