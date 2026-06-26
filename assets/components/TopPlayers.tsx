import { ScrollView, Text, View } from "@/assets/imports/imports";
import { styles } from "../styles/styles";

const Players = [
  {
    ranking: 1,
    playerName: "Cl-Sprawl",
    teamName: "Clad Legion",
    kD: "5.7",
    kills: "125",
  },
  {
    ranking: 2,
    playerName: "Cl-Dust",
    teamName: "Clad Legion",
    kD: "5.2",
    kills: "112",
  },
  {
    ranking: 3,
    playerName: "Cl-Quack",
    teamName: "Clad Legion",
    kD: "4.8",
    kills: "98",
  },
  {
    ranking: 4,
    playerName: "Tn-Sprawl",
    teamName: "Team Nexus",
    kD: "6.1",
    kills: "145",
  },
  {
    ranking: 5,
    playerName: "Tn-Shadow",
    teamName: "Team Nexus",
    kD: "5.9",
    kills: "134",
  },
  {
    ranking: 6,
    playerName: "Tn-Phoenix",
    teamName: "Team Nexus",
    kD: "5.4",
    kills: "121",
  },
  {
    ranking: 7,
    playerName: "Tn-Storm",
    teamName: "Team Nexus",
    kD: "5.1",
    kills: "108",
  },
  {
    ranking: 8,
    playerName: "Cl-Viper",
    teamName: "Clad Legion",
    kD: "4.6",
    kills: "95",
  },
  {
    ranking: 9,
    playerName: "Cl-Blaze",
    teamName: "Clad Legion",
    kD: "4.3",
    kills: "87",
  },
  {
    ranking: 10,
    playerName: "Cl-Echo",
    teamName: "Clad Legion",
    kD: "4.1",
    kills: "78",
  },
  {
    ranking: 11,
    playerName: "Tn-Titan",
    teamName: "Team Nexus",
    kD: "6.3",
    kills: "156",
  },
  {
    ranking: 12,
    playerName: "Tn-Apex",
    teamName: "Team Nexus",
    kD: "6.0",
    kills: "142",
  },
  {
    ranking: 13,
    playerName: "Cl-Forge",
    teamName: "Clad Legion",
    kD: "5.0",
    kills: "104",
  },
  {
    ranking: 14,
    playerName: "Cl-Ghost",
    teamName: "Clad Legion",
    kD: "4.5",
    kills: "92",
  },
  {
    ranking: 15,
    playerName: "Tn-Razr",
    teamName: "Team Nexus",
    kD: "5.8",
    kills: "138",
  },
  {
    ranking: 16,
    playerName: "Cl-Surge",
    teamName: "Clad Legion",
    kD: "5.3",
    kills: "110",
  },
  {
    ranking: 17,
    playerName: "Tn-Volt",
    teamName: "Team Nexus",
    kD: "5.6",
    kills: "128",
  },
  {
    ranking: 18,
    playerName: "Cl-Nexus",
    teamName: "Clad Legion",
    kD: "4.7",
    kills: "99",
  },
  {
    ranking: 19,
    playerName: "Tn-Inferno",
    teamName: "Team Nexus",
    kD: "6.2",
    kills: "149",
  },
];

function PlayerData({
  ranking,
  playerName,
  teamName,
  kD,
  kills,
}: {
  ranking: number;
  playerName: string;
  teamName: string;
  kD: string;
  kills: string;
}) {
  return (
    <View
      style={{
        width: "100%",
        height: 60,
        backgroundColor: "#3b3a3ad8",
        marginBottom: 10,
        borderRadius: 8,
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          backgroundColor: "#FF6B00",
          color: "white",
          fontWeight: "bold",
          width: 30,
          height: 30,
          textAlign: "center",
          lineHeight: 30,
          borderRadius: 4,
        }}
      >
        {ranking}
      </Text>
      <View style={styles.playerRow}>
        <View style={styles.playerInfo}>
          <Text style={styles.playerName}>{playerName}</Text>
          <Text style={styles.playerTeam}>{teamName}</Text>
        </View>
        <View style={styles.playerStats}>
          <Text style={styles.playerKills}>Kills: {kills}</Text>
          <Text style={styles.playerKD}>K/D: {kD}</Text>
        </View>
      </View>
    </View>
  );
}

export default function TopPlayers() {
  return (
    <View style={styles.topPlayersSection}>
      <Text style={styles.topPlayersTitle}>Top 4 Players</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {Players.map((data, index) => (
          <PlayerData key={`${data.playerName}-${index}`} {...data} />
        ))}
      </ScrollView>
    </View>
  );
}
