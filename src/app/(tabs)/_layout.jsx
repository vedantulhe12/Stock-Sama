import { Tabs,Redirect } from 'expo-router'


const TabLayout = () => {
  return (
    <>
        <Tabs screenOptions={{tabBarLabelPosition: 'beside-icon',tabBarIconStyle: {display: "none"},tabBarActiveTintColor: '#cdfa12',tabBarInactiveTintColor: '#ffffff',tabBarStyle: {backgroundColor: '#08032b', height: 60,borderRadius: 40,marginBottom: 20,marginLeft: 30,marginRight: 30 , paddingRight: 20}}}>
            <Tabs.Screen name="home" options={{ title: 'Home' , headerShown: false}}/>
            <Tabs.Screen name="upload" options={{ title: 'Upload', headerShown: false }}/>
            <Tabs.Screen name="summary" options={{ title: 'Summary', headerShown: false }}/>
            <Tabs.Screen name="Sentiment" options={{ title: 'Sentimment', headerShown: false }}/>
        </Tabs>
    </>
  )
}

export default TabLayout