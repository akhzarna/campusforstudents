import { StyleSheet } from "react-native"


export const style = StyleSheet.create({
    container: {
        flex: 1,
       
    },

    header: {
        flex: .55,
        alignItems: "center"
    },
    heading: {
        textAlign: "center",
        marginTop: 10,
        fontSize: 20
    },
    searchBar: {
        width: "90%",
        borderWidth: 2,
        margin: 25,
        borderRadius: 20
    },
    picker: {
        borderWidth: 1,
        marginHorizontal: 25,
        marginVertical: 5,
        width: "80%",
        height: 50
    },
    searchBtn: {
        backgroundColor: "red",
        paddingHorizontal: 20,
        paddingVertical: 10,
        color: "white",
        textAlign: "center",
        borderRadius: 10,
        marginTop: 5
    },
    recommendation:{
        flex:0.25,
        borderBottomWidth:1,},
    recommendationContainer:{
        flex:0.10,
        flexDirection:"row"
        ,justifyContent:"space-between",
        marginHorizontal:"10%"
    },

    campusImg:{
        width:"100%"
        ,height:100
    },
        recommendationHeading:{
        marginHorizontal:"10%"
    },

    footer:{
        flex:0.20,
        justifyContent:"space-evenly",
     
    },
    footerElements:{
        marginHorizontal:"10%",
        marginVertical:"1%"
    }
 
})