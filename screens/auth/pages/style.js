import { StyleSheet, Platform, StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import colors from "../../../resources/colors";
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  mainView: {
    flexGrow: 1,
    paddingTop: RFValue(60),
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },
  textStyle: {
    fontWeight: "bold",
    fontSize: RFValue(20),
  },
  textStyle1: {
    fontWeight: "bold",
    fontSize: RFValue(14),
  },
  textStyle2: {
    flex: 1,
    fontSize: RFValue(15),
    color: colors.mediumGrey,
  },
  flexRowView: {
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  setMargin: {
    marginTop: 15,
  },
  textInputStyle: {
    height: RFValue(45),
    paddingHorizontal: 20,
    fontSize: RFValue(15),
    marginTop: 5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.mediumGrey,
  },
  btnView: {
    marginVertical: 20,
  },
  linkStyle: {
    fontSize: RFValue(14),
    color: colors.primaryBlue,
  },
  linkStyle2: {
    fontSize: RFValue(15),
    color: colors.primaryBlue,
  },
  section: {
    marginTop: 20,
    flexDirection: "row",
  },
});
