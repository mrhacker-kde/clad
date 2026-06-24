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
  card: {
    backgroundColor: '#ff6a00d0',
    width: '100%',
    height: 150,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 15,
    paddingLeft: 5,
    paddingRight: 20,
    paddingTop: 15,
  },
  dta: {
    backgroundColor: 'transparent',
    width: '50%',
    paddingLeft: 10,
    gap: 5,
    borderRadius: 10,
  },
  dtab: {
    width: 130,
    height: 30,
    paddingLeft: 10,
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
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
