import {
  ImageBackground,
  LinearGradient,
  Text,
  TouchableOpacity,
} from "@/assets/imports/imports";
import { styles } from "../styles/styles";

export default function HeroSection() {
  return (
    <ImageBackground source={require("../images/bg.png")} style={styles.card}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={["rgba(255,107,0,0.85)", "rgba(0,0,0,0.70)"]}
        style={styles.dta}
      >
        <Text style={styles.heroTitle}>SEASON 7</Text>
        <Text style={styles.heroTitle}>CLAD WEEKLY</Text>
        <Text style={styles.heroTitle}>TOURNAMENT</Text>
        <Text style={styles.heroSubtitle}>Prize Pool: Not yet</Text>
        <TouchableOpacity style={styles.dtab}>
          <Text style={styles.dtabText}>View Details</Text>
        </TouchableOpacity>
      </LinearGradient>
    </ImageBackground>
  );
}
