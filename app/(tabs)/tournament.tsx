import Logo from "../../assets/components/logo";
import { View, Text, SafeAreaView, globalStyles } from '@/assets/imports/imports'

export default function Index() {
  return (
    <SafeAreaView style={globalStyles.SafeAreaView}>
      <Logo />
      <View>
        <Text>Home</Text>
      </View>
    </SafeAreaView>
  );
}
