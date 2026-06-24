import {
  globalStyles,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "@/assets/imports/imports";
import Logo from "../../assets/components/logo";

export default function Index() {
  return (
    <SafeAreaView style={globalStyles.SafeAreaView}>
      <Logo />
      <ScrollView
        style={globalStyles.ScrollView}
        contentContainerStyle={{ paddingBottom: 83 }}
      >
        <View>
          <Text>Home</Text>
          <Logo />
        </View>
        <View>
          <View>
            <Text>SEASON 7</Text>
            <Text>Clad Weekly</Text>
            <Text>TOURNAMENT</Text>
            <Text>Prize Pool: Not yet</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
