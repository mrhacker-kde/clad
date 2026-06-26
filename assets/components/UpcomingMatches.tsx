import { Image, ScrollView, Text, View } from "@/assets/imports/imports";
import { styles } from "../styles/styles";

const upcomingMatches = [
  {
    title: "Clad Legion Friday Room",
    opponent: "Vs Team Nexus",
    date: "Aug 22 At 19:00pm E.A.T",
  },
  {
    title: "Clad Legion Saturday Room",
    opponent: "Vs Team Nexus",
    date: "Aug 22 At 19:00pm E.A.T",
  },
  {
    title: "Clad Legion Sunday Room",
    opponent: "Vs Team Nexus",
    date: "Aug 22 At 19:00pm E.A.T",
  },
  {
    title: "Clad Legion Monday Room",
    opponent: "Vs Team Neus",
    date: "Aug 22 At 22:00pm E.A.T",
  },
];

function MatchCard({
  title,
  opponent,
  date,
}: {
  title: string;
  opponent: string;
  date: string;
}) {
  return (
    <View style={styles.matchCard}>
      <Image source={require("../images/bg.png")} style={styles.matchImage} />
      <View style={styles.matchInfo}>
        <Text style={styles.matchTitle}>{title}</Text>
        <Text style={styles.matchOpponent}>{opponent}</Text>
        <Text style={styles.matchDate}>{date}</Text>
      </View>
    </View>
  );
}

export default function UpcomingMatches() {
  return (
    <View style={styles.upcomingContainer}>
      <Text style={styles.sectionTitle}>UPCOMING MATCHES</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.upcomingScroll}
      >
        {upcomingMatches.map((match, index) => (
          <MatchCard key={`${match.title}-${index}`} {...match} />
        ))}
      </ScrollView>
    </View>
  );
}
