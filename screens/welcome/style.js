import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import colors from "../../resources/colors";
export default StyleSheet.create({
  container: {
    backgroundColor: colors.primaryBlue,
    height: "100%",
  },
  mainView: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: RFValue(35),
  },
});
