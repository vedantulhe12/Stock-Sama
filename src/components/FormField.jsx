import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState, useEffect } from 'react'

const FormField = ({title,value,handleChangeText,keyboardType,style, ...props}) => {
    const [showPass, setShowPass] = useState(false)
    const [isTouched, setIsTouched] = useState(false)

    useEffect(()=>{
        if (props.showPass !== undefined){
        setShowPass(props.showPass)
        }
    }, [])

    return (
        <View
            onFocus={() => setIsTouched(true)}
            onBlur={() => setIsTouched(false)}
            className={`flex flex-row w-full bg-[#1a1422] items-center rounded-[39px] h-[52px] px-5 py-1 justify-between border ${style} ${isTouched ? 'border-white' : 'border-[#1a1422]'}`}>
            <TextInput className={`text-lg text-[#ffffff99] grow ${props.textstyle}`}
            value={value}
                onChangeText={handleChangeText}
                placeholderTextColor={props.placeholderTextColor}
                placeholder={title}
                secureTextEntry={showPass}
             />

             {props.showPass && (
                <TouchableOpacity onPress={() => setShowPass(!showPass)}>
                    <Image source={showPass ? require('../assets/icons/eye.png') : require('../assets/icons/eye-hide.png')} resizeMode='contain' className="w-6 h-6 items-end justify-end" />
                </TouchableOpacity>
             )}
        </View>
    )
}

export default FormField