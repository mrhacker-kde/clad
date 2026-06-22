import Logo from "../../assets/components/logo";
import { Text, View } from "react-native";
import { globalStyles } from "../../assets/styles/styles";

export default function Index() {
  return (
    <View style={globalStyles.SafeAreaView}>
      <Logo />
      <View>
        <Text>Home</Text>
      </View>
    </View>
  );
}
