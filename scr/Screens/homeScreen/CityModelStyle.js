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
        fontSize: 19,
        fontSize:22
        
    },
    currentCity: {
        marginLeft: 10,
        marginVertical:2,

        color: "green"
        ,fontSize:18
    },
    searchBar: {
        width: "90%",
        borderWidth: 2,
        height:"45%",
        marginHorizontal:5,
        borderRadius: 20,
        marginBottom:5
    },

    popularCities:{
        flex:0.32,
        justifyContent:"center",
        borderBottomColor:"lightgrey",
        borderBottomWidth:1
    },
    cityImg:{
        width:100,
        height:100
     ,
     backgroundColor:"lightgrey",
        borderRadius:50,
        borderWidth:20
    },
    cityNames:{
    marginLeft:10,
    marginTop:6,
    color:"black",
    fontSize:20,

    }


    ,cityNameContainer:{
        flex:0.9,
        alignItems:"center"
    },
    RecentCities:{
        flex:0.20,
    
    },

    allCities:{
        flex:0.32,
    }
})