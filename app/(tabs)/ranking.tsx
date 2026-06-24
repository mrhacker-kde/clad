import Logo from "../../assets/components/logo";
import { View, Text, SafeAreaView, globalStyles, styles , TouchableOpacity} from '@/assets/imports/imports'

export default function Index() {
  return (
    <SafeAreaView style={globalStyles.SafeAreaView}>
      <Logo />
      <View style={styles.card}>
                <View style={styles.dta}>
                  <Text>SEASON 7</Text>
                  <Text>CLAD WEEKLY</Text>
                  <Text>TOURNAMENT</Text>
                  <Text>Prize Pool: Not yet</Text>
                  <TouchableOpacity style={styles.dtab}>
                    <Text>View Details</Text>
                  </TouchableOpacity>
                </View>
              </View>
    </SafeAreaView>
  );
}
