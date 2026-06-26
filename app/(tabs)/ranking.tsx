import {
  globalStyles,
  SafeAreaView,
  ScrollView,
  styles,
  Text,
  TouchableOpacity,
  View,
} from "@/assets/imports/imports";
import Logo from "../../assets/components/logo";
import TopPlayers from "../../assets/components/TopPlayers";

export default function Index() {
  return (
    <SafeAreaView style={globalStyles.SafeAreaView}>
      <Logo />
      <ScrollView
        style={globalStyles.ScrollView}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.card}>
          <View style={styles.dta}>
            <Text style={styles.heroTitle}>SEASON 7</Text>
            <Text style={styles.heroTitle}>CLAD WEEKLY</Text>
            <Text style={styles.heroTitle}>TOURNAMENT</Text>
            <Text style={styles.heroSubtitle}>Prize Pool: Not yet</Text>
            <TouchableOpacity style={styles.dtab}>
              <Text style={styles.dtabText}>View Details</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TopPlayers />
      </ScrollView>
    </SafeAreaView>
  );
}
