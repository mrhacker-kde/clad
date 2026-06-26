import {
  globalStyles,
  SafeAreaView,
  ScrollView,
  styles,
} from "@/assets/imports/imports";
import HeroSection from "../../assets/components/HeroSection";
import Logo from "../../assets/components/logo";
import UpcomingMatches from "../../assets/components/UpcomingMatches";
import TopPlayers from "@/assets/components/TopPlayers";

export default function Index() {
  return (
    <SafeAreaView style={globalStyles.SafeAreaView}>
      <Logo />
      <ScrollView
        style={globalStyles.ScrollView}
        contentContainerStyle={styles.scrollContent}
      >
        <HeroSection />
        <UpcomingMatches />
        <TopPlayers/>
      </ScrollView>
    </SafeAreaView>
  );
}
