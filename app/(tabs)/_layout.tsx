import {
  Tabs,
  AntDesign,
  FontAwesome5,
  FontAwesome6,
  Ionicons,
  MaterialCommunityIcons
} from "@/assets/imports/imports";


export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#ff6b00",
        tabBarInactiveTintColor: "#444444",
        tabBarActiveBackgroundColor: "rgba(255,107,0,0.10)",
        tabBarItemStyle: {
          borderRadius: 25,
          overflow: "hidden",
        },
        tabBarStyle: {
          backgroundColor: "#0e0e0e",
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
          height: 60,
          margin: 6,
          paddingHorizontal: 2,
          borderRadius: 25,
          position: "absolute",
          justifyContent: "center",
          overflow: "hidden",
        },
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: "bold",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="ranking"
        options={{
          headerShown: false,
          title: "Ranking",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="ranking-star" size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="register"
        options={{
          headerShown: false,
          title: "Register",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="clipboard-list" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="tournament"
        options={{
          headerShown: false,
          title: "Tournaments",
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="tournament" size={size} color={color} />
        }}
      />
      <Tabs.Screen
        name="support"
        options={{
          headerShown: false,
          title: "Support",
          tabBarIcon: ({ color }) => (
            <AntDesign name="customer-service" size={20} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
