import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor:"red",
        // paddingTop:50,
    },
    pictureWrapper:{
        justifyContent:"center",
        alignItems:"center",
        height:200,
    },



    headerWrapper:{
        display:"flex",
        backgroundColor:"white",
        alignItems:"center",
        justifyContent:"center",
        height:50
    },
    headerText:{
        fontSize:20,
        fontWeight:"700"
    },

    detailsWrapper:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        marginVertical:7,
        height:40,
        borderColor:"black"
    },
    detail:{
        flex:0.333,
        backgroundColor:"white",
        width:"100%",
        height:"100%",
        justifyContent:"space-evenly",
        alignItems:"center"
    },
    detailText1:{
        fontSize:12,
        fontWeight:"300",
    },
    detailText2:{
        fontSize:14,
        fontWeight:"400",
        color:"red"
    },
    greenColor:{
        color:"green"
    },
    verticalSeperator:{
        width:2,
        height:"60%",
        backgroundColor:"lightgray"
    },


    addressWrapper:{
        justifyContent:"space-evenly",
        height:90,
        marginTop:6,
        backgroundColor:"white",
    },
    // seperators
    seperatorWrapper:{
        flex:0.02,
        height:"100%",
    },

    DetailWrapper:{
        flex:0.98,
        height:"100%",
    },
    addressText1:{
        fontSize:16,
        fontWeight:"400",
        paddingTop:10,
        paddingLeft:15
    },
    addressText2:{
        fontSize:16,
        fontWeight:"300",
        paddingLeft:15
    },




/// Links related style

    mapWrapper:{
        height:50,
        marginTop:2,
        backgroundColor:"white",
    },
    detailLinksWrapper:{
        flex:0.98,
        height:"100%",
        flexDirection:"row",
        alignItems:"center"
    },
    linkIconWrapper:{
        height:25,
        width:25,
        borderRadius:20,
        justifyContent:"center",
        alignItems:"center",
        // backgroundColor:"red",
        marginLeft:15
    },
    linkTextWrapper:{
        marginLeft:5,
    },
    linksStyles:{
        color:"blue",
        fontSize:15,
        fontWeight:"500",
        textDecorationLine: 'underline'
    },




    // web site detail uni
    uniWebWrapper:{
        height:50,
        marginTop:2,
        backgroundColor:"white",
    },
    

    // Menu


    menu:{
        height:283,
        // backgroundColor:"yellow"
    },
    menuHeadingWrapper:{
        display:"flex",
        alignItems:"flex-start",
        justifyContent:"center",
        height:50,
        marginTop:10,
        paddingLeft:20
    },
    headerText:{
        fontSize:16,
        fontWeight:"600"
    },
    menuIcon:{
        flex:1,
        marginTop:3,
        height:100,
        alignItems:"center",
        justifyContent:"center",
    },
    menuIconWrapper:{
        flex:0.7,
        height:"100%",
        width:"100%",
        alignItems:"center",
        justifyContent:"center",
    },
    menuIconText:{
        flex:0.2,
        height:"100%",
        width:"100%",
        marginTop:5,
        alignItems:"center",
        justifyContent:"center",
    }
    
});

export default styles;