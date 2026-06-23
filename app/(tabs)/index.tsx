import Logo from "../../assets/components/logo";
import {
  View,
  Text,
  SafeAreaView,
  globalStyles,
  ScrollView,
} from "@/assets/imports/imports";

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
          <Text>Home</Text>
          <Logo />
        </View>
        <View>
          <Text>Home</Text>
          <Logo />
        </View>
        <View>
          <Text>Home</Text>
          <Logo />
        </View>
        <View>
          <Text>Home</Text>
          <Logo />
        </View>
        <View>
          <Text>Home</Text>
          <Logo />
        </View>
        <View>
          <Text>Home</Text>
          <Logo />
        </View>
        <View>
          <Text>Home</Text>
          <Logo />
        </View>
        <View>
          <Text>Home</Text>
          <Logo />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
