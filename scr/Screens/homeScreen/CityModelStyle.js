import { StyleSheet } from "react-native"


export const style = StyleSheet.create({
    container: {
        backgroundColor: "#000000aa",
        flex: 1,
        borderWidth: 2
    },
    mb10:{
        marginBottom:10,
    },
    ml10:{
        marginLeft:10,
    },
    title:{
        flex:1, flexDirection:"row" , alignItems:"center" , justifyContent:"space-between"
    },
    cancelImg:{
        height:30, 
        width:30,
        margin:5, 
        backgroundColor:"#F5F5F5",
        borderRadius:50, 
    },
    cancelImgStyle:{
        margin:5,
        width:40,
        height:40,
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
        fontSize:22,
        fontWeight:"bold",
        
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
        width:70,
        height:70,
        backgroundColor:"lightgrey",
        borderRadius:50,
    },
    cityNames:{
    marginTop:6,
    color:"black",
    fontSize:16,
    },
    cityNameContainer:{
        flex:1.0,
        alignItems:"center",
    },
    RecentCities:{
        flex:0.20,
    },
    allCities:{
        flex:0.32,
    }
})