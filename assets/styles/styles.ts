import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cnt: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#111111",
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
