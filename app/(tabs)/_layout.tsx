import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons"

export default function TabsLayout(){
    return <Tabs screenOptions={{
        tabBarActiveTintColor: 'orange',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
            backgroundColor: '#000000BF',
            borderTopWidth: 1,
            borderTopColor: 'whitesmoke',
            elevation: 0,
            shadowOpacity: 0,
            height: 60,
            margin: 6,
            borderRadius: 15,
        },
        tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: 'bold',
        },
    }}>
        <Tabs.Screen name="index" options={{
            headerShown: false,
            title: 'Home',
            tabBarIcon: ()=> <Ionicons name='home' size={24} color={'orange'}/>,
        }}/>
        <Tabs.Screen name="ranking" options={{
            headerShown: false,
            title: 'Ranking',
            
        }}/>

    </Tabs>;
}