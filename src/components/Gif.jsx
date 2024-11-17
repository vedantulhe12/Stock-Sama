import React, { useEffect, useState } from "react";
import {Text ,View  , StyleSheet} from 'react-native' ;
import { Image } from 'expo-image';

const AddGifImage = () => {
  const [showGif, setShowGif] = useState(true);

  useEffect(() => {
    // After 2 seconds, unmount the GIF to stop looping
    const timer = setTimeout(() => setShowGif(false), 2000);

    return () => clearTimeout(timer); // Clean up timer
  }, []);
    return (
        <View className="items-center mt-6 mx-6">
        {showGif && (
          <Image
            style ={{width: "100%", height:"70%",}}
            source={require("../assets/images/big.jpg")}
            contentFit="cover"
          />
      )}
      {!showGif && (
          <Image
            style ={{width: "100%", height:"70%"}}
            source={require("../assets/images/big.jpg")}
            contentFit="cover"
          />
      )}
          
          {/* <FastImage
      style={{ width: 200, height: 200 }}
      source={require('../assets/images/Your paragraph text (3).gif')} 
      resizeMode={FastImage.resizeMode.contain}
      onLoadEnd={() => {
        FastImage.clearMemoryCache(); // To avoid looping after the first play
      }} */}

        </View>
      );
}

const Styles = StyleSheet.create({
    container :{
        alignContent:'center',
        margin:25
    }
})

export default AddGifImage;
