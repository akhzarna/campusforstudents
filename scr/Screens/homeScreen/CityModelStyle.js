import { StyleSheet } from "react-native"


export const style = StyleSheet.create({


    container: {
        backgroundColor: "#000000aa",
        flex: 1,
        borderWidth: 2
    },

    modelContainer: {
        backgroundColor: "#ffffff",
        marginTop: "12%",
        flex: 1,
        borderWidth: 2,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    header: {
        flex: 0.18,
    },
    heading: {
        marginTop: 10,
        marginLeft: 10,
        fontSize: 19
    },
    currentCity: {
        marginLeft: 10,
        color: "green"
    },
    searchBar: {
        width: "90%",
        borderWidth: 2,
        height:"40%",
        marginHorizontal:5,
        borderRadius: 20
    },

    popularCities:{
        flex:0.22,
      

    }
})