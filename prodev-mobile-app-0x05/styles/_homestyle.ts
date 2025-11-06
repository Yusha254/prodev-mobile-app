import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
  },

  /** -------------------------
   *        SEARCH BAR
   *  ------------------------ */
  searchGroup: {
    paddingHorizontal: 20,
    marginBottom: 15,
  },

  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingLeft: 15,
    height: 55,
    elevation: 2, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOpacity: 0.08,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },

  searchControlGroup: {
    flex: 1,
  },

  searchFormText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#4A4A4A",
  },

  searchControl: {
    fontSize: 13,
    marginTop: 2,
    color: "#7B7B7B",
  },

  searchButton: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: "#34967C",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 4,
  },

  /** -------------------------
   *        FILTER BAR
   *  ------------------------ */
  filterGroup: {
    flexDirection: "row",
    alignItems: "center",
    gap: 30,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  filterContainer: {
    height: 55,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },

  /** -------------------------
   *       LISTING SECTION
   *  ------------------------ */
  listingContainer: {
    paddingHorizontal: 20,
    marginTop: 10,
  },

  /** -------------------------
   *       PAGINATION
   *  ------------------------ */
  paginationContainer: {
    marginVertical: 25,
    alignItems: "center",
  },

  showMoreButton: {
    backgroundColor: "#34967C",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
  },

  showMoreButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
});

export { styles };
