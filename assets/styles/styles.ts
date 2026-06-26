import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cnt: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "transparent",
    width: "100%",
    height: "auto",
    marginTop: 5,
    padding: 5,
  },
  cnt2: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  cnt3: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  img: {
    width: 40,
    height: 40,
    position: "relative",
    borderRadius: 10,
  },
  timg: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "bold",
    fontFamily: "impact",
  },
  lpm: {
    color: "#888888",
  },
  card: {
    width: "98%",
    height: 190,
    marginLeft: 5,
    marginRight: -5,
    borderRadius: 15,
    overflow: "hidden",
    marginTop: 7,
  },
  dta: {
    width: "100%",
    paddingLeft: 17,
    gap: 5,
    borderRadius: 10,
    height: "100%",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  dtab: {
    width: 130,
    height: 30,
    paddingLeft: 10,
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 10,
  },
  dtabText: {
    color: "#000000",
    fontWeight: "bold",
  },
  heroTitle: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "800",
  },
  heroSubtitle: {
    color: "#ffffff",
    fontSize: 14,
    opacity: 0.9,
  },
  scrollContent: {
    paddingBottom: 83,
  },
  upcomingSection: {
    marginTop: 24,
  },
  sectionTitle: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "700",
    marginLeft: 10,
    marginBottom: 12,
  },
  upcomingContainer: {
    width: "100%",
    marginTop: 24,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  upcomingScroll: {
    gap: 10,
    paddingHorizontal: 10,
    height: 240,
  },
  matchCard: {
    width: 210,
    backgroundColor: "rgba(255,255,255,0.08)",
    borderRadius: 18,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.12)",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 6,
  },
  matchImage: {
    width: "100%",
    height: 110,
  },
  matchInfo: {
    padding: 14,
    backgroundColor: "rgba(0,0,0,0.25)",
  },
  matchTitle: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 6,
  },
  matchOpponent: {
    color: "#ffb74d",
    fontSize: 13,
    marginBottom: 8,
  },
  matchDate: {
    color: "#cccccc",
    fontSize: 12,
  },
  topPlayersSection: {
    marginTop: 24,
    paddingHorizontal: 10,
  },
  topPlayersTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 12,
  },
  playerCard: {
    width: "100%",
    height: 60,
    backgroundColor: "#3b3a3ad8",
    marginBottom: 10,
    borderRadius: 8,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  playerRank: {
    backgroundColor: "#FF6B00",
    color: "white",
    fontWeight: "bold",
    width: 30,
    height: 30,
    textAlign: "center",
    lineHeight: 30,
    borderRadius: 4,
  },
  playerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 12,
    flex: 1,
  },
  playerInfo: {
    justifyContent: "center",
  },
  playerName: {
    color: "white",
    fontWeight: "600",
  },
  playerTeam: {
    color: "#888888",
    fontSize: 12,
  },
  playerStats: {
    alignItems: "flex-end",
  },
  playerKills: {
    color: "white",
    fontWeight: "600",
  },
  playerKD: {
    color: "#FF6B00",
    fontSize: 12,
  },
});

export const globalStyles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    backgroundColor: "#080808",
  },
  ScrollView: {
    backgroundColor: "transparent",
    flex: 1,
  },
});
