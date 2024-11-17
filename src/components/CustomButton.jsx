import { ActivityIndicator, Text, TouchableOpacity } from "react-native";

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      on
      onPress={handlePress}
      activeOpacity={0.7}
      className={` px-5 py-2 flex flex-row items-center justify-center ${containerStyles} ${isLoading ? "opacity-50" : ""
        }`}
      disabled={isLoading}
    >
      {isLoading ? (
        <ActivityIndicator
          animating={isLoading}
          color="#fff"
          size="small"
        />
      ) : (<Text className={` font-bold   ${textStyles}`}>
        {title}
      </Text>)}

    </TouchableOpacity>
  );
};

export default CustomButton;