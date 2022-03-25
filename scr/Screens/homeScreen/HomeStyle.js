import { StyleSheet } from "react-native"


export const style = StyleSheet.create({
    container: {
        flex: 1,

    },
    subcontainer: {
        flex: 1,
        height:1500
    },

    navbar: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        

    },

    header: {
        flex: .70,
        alignItems: "center"
    },
    heading: {
        textAlign: "center",
        marginTop: 10,
        fontSize: 20,
        color: "white",
        fontWeight: "bold"
    },
    searchBar: {
        width: "90%",
        borderWidth: 2,
        margin: 30,
        borderRadius: 20,
        borderColor: "white",
        textAlign: "center",
        paddingHorizontal:100

    },
    picker: {
        borderRadius: 25,
        borderWidth: 1.5,
        marginVertical: 5,
        width: "85%",
        flex: 0.30,
        justifyContent: 'center'
    },
    citypicker:{
      marginTop:-10
      ,borderWidth:1.5,
      padding:"4%",
      paddingHorizontal:"33%",
      borderRadius:50
    },
    inputFieldWrapper: {
        width: "100%",
        flex: 0.50
        , justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "row",

    },
    inputStyle: {
        borderWidth: 1.5,
        width: "25%",
        borderRadius: 20,
        fontSize:18,
     
    },
    searchBtn: { 
        backgroundColor:"red",
        width:"30%",
        paddingHorizontal: 10,
        paddingVertical: 10,
        color: "white",
        textAlign: "center",
        borderRadius: 10,
        marginTop: 5
    },
    recommendation: {
        flex: 0.30,
        width: "100%",
        marginTop: 10
    },
    recommendationContainer: {
        flex: 0.10,
        flexDirection: "row"
        , justifyContent: "space-between",
        marginHorizontal: "10%",
        marginVertical: "5%",
    },

    campusImg: {
        width: "100%"
        , height: 110,
        borderRadius: 50
    },
    recommendationHeading: {
        backgroundColor: "lightgrey",
        width: "100%",
        paddingLeft:15,
        height: "15%",
        fontSize: 20,
        fontWeight:"bold"
    },


})