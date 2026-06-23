import { View, Text, SafeAreaView, globalStyles, Logo} from '@/assets/imports/imports'

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