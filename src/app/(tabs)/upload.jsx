
import React, { useState } from 'react'
import { Text, Pressable, View, ScrollView, Image, Touchable } from "react-native";
import FormField from "../../components/FormField"
import CustomButton from "../../components/CustomButton"
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native';
import * as DocumentPicker from "expo-document-picker";
import { Alert } from "react-native";
import { router } from 'expo-router';
import apiService from '../../services/apiService';
import DropDownPicker from 'react-native-dropdown-picker';


const Upload = () => {
  const [open, setOpen] = useState(true);
  const [value, setValue] = useState(null);

  const [form, setForm] = useState(
    {

      description: "",
      file: null
    }
  )
  const [submitted, setSubmitted] = useState(false);


  const openPicker = async () => {
    const result = await DocumentPicker.getDocumentAsync({
      
    });

    if (!result.canceled) {
        setForm({
          ...form,
          file: result.assets[0],
        });
    } else {
      setTimeout(() => {
        Alert.alert("Document picked", JSON.stringify(result, null, 2));
      }, 100);
    }
  };


  const handleSubmit = async () => {
    if (

      !form.file
    ) {
      return Alert.alert("Please upload a pdf file");
    }
    console.log(form);

   
    try {
      const formData = new FormData();

      formData.append("description", form.description || "No Description Provided");
      formData.append("file", {
        uri: form.file.uri,
        name: form.file.name,
        type: form.file.mimeType || "application/pdf",
      });
      const res = await apiService.post("/upload_pdf", formData);

      if (res.success === true) {
        Alert.alert("Success", "File uploaded successfully");
        router.push("/summary");

        setSubmitted(true);
      
        
      } else {
        Alert.alert("Error1", res.message);
      }
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setForm({
        name: "",
        file: null,
        type: "",
        description: ""
      });
      setValue(null);

    }
  };


  return (
    <SafeAreaView className="flex-1 bg-[#1a1a1a]" nestedScrollEnabled={true}>
      <View contentContainerStyle={{ height: "100%" }}>
        <View className="w-full h-full rounded-[20px]">

          <View className="absolute left-[95px] top-[56px] w-[204px] flex flex-col gap-[8px] justify-center">
            <View className="flex flex-row gap-[16px] items-center">
              {/* <Image className="w-[27px] h-[27px] overflow-hidden" resizeMode="cover" source={require("../../assets/icons/tdesign_file-add.png")} /> */}
              <Text className="text-[#00FF00] font-semibold text-[28px] text-left">Upload Report</Text>
            </View>
            {/* <Text className="text-[#070420] text-center font-semibold text-xs">Upload the Report </Text> */}
          </View>

      
          <View className="left-[11px] top-[274px] w-[341px] h-[322px]">
            <View className="left-[22px] w-[337px] mx-auto flex flex-col">
              <TouchableOpacity onPress={() => openPicker(value)}>
                <View className="bg-white border border-dashed border-[#326afd] rounded-[12px] h-[151px]  p-5 flex flex-col items-center gap-3">
                  <View className="flex flex-col justify-center items-center">
                    <Image className="w-[35px] h-[35px] overflow-hidden" resizeMode="cover" source={require("../../assets/icons/lets-icons_upload.png")} />
                    <Text className="text-[#333] text-left font-semibold text-xs">Drop your files here</Text>
                  </View>
                  <CustomButton title="Choose Files" handlePress={() => openPicker(value)} containerStyles={" rounded-[6px] px-[10px] py-[7px] w-[102px] h-[30px] bg-[#326afd]"} textStyles={"text-[11px] text-white font-semibold"} />
                </View>
              </TouchableOpacity>
            </View>

            <CustomButton title="submit" handlePress={handleSubmit} containerStyles={"px-5 py-2 rounded-[35px] left-[180px] top-[90px] -ml-[82.5px] w-[176px] h-[42px] bg-[#326afd] "} textStyles={"text-white font-semibold"} />
            {submitted && (<View className="bg-[#1a1a1a] top-[100px] left[20px] p-5 m-4 rounded-lg items-center justify-center">
              <View className="mb-2.5">
                <Text className="text-4xl text-green-500">💎</Text>
              </View>
              <Text className="text-[#ffffff] text-lg font-bold">Congratulations</Text>
              <Text className="text-white text-base mt-2">Your Report Summary is Ready</Text>
            </View>)}

          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Upload

