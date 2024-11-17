import { View, Text } from 'react-native'
import React from 'react'

const ProjectCard = ({name,Description,...props}) => {
    console.log(props,name,Description);

    return (
        <View onTouchEnd={props.onClick} className={` flex w-[45%] h-56 ${props.id % 2 ===0 ? 'bg-[#326afd] ':'bg-white'}   rounded-[30px]`}>
            <Text className={` p-4 mt-5 text-left font-[InstrumentSans-SemiBold] text-[18px] font-semibold ${props.id % 2 ===0 ? 'text-white ':'text-[#326afd]'} `}>{name}</Text>
            <Text className=" px-4 text-left font-[InstrumentSans-SemiBold] text-[14px] font-semibold text-white">{Description}</Text>
        </View>
    )
}

export default ProjectCard