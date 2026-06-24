import {
  globalStyles,
  styles,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TouchableOpacity
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
      </ScrollView>
    </SafeAreaView>
  );
}
