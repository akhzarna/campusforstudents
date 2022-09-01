import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:"flex-start",
        alignItems:"center",
        height:"100%",
        width:"100%",
        // backgroundColor:'grey'
    },
    header:{
        flex:0.05,
        width:"100%",
        justifyContent:'center',
        alignItems:  "center",
        borderWidth:0.1 ,
        padding:15,
        // backgroundColor:'grey'    
    },
    headerTxt:{
        fontSize:20,
        color:"grey"

    },
    itemSeparator: {
        flex: 1,
        height: 1,
        backgroundColor: '#444',
        width:"85%",
        marginLeft:"15%",
      },
    filterWrapper:{
        flex: 0.1,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        height:"100%",
        width:"100%",
        // backgroundColor:'green'
    },
    appliedfiltersWrapper:{
        flex: 0.1,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        height:"100%",
        width:"100%",
        // backgroundColor:'green'
    },
    singleFilter:{
        flex:0.3,
        flexDirection:"row",
        height:40,
        // width:100,
    },
    filter:{
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        borderRadius:5,
        width:100,
        marginLeft:5,
        marginRight:5,
    },
    filterapplied:{
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        borderRadius:5,
        width:100,
        marginLeft:5,
        marginRight:5,
        borderWidth: 2,
        borderColor: "#F75656",
        // borderRadius: 50,
    },
    filternotapplied:{
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        borderRadius:5,
        width:100,
        marginLeft:5,
        marginRight:5,
    },
    appliedfilters:{
        alignItems: "center",
        backgroundColor:"#F75656",
        padding: 10,
        borderRadius:5,
        // width:100,
        marginLeft:5,
        marginRight:5,
    },
    usiversityName:{
        color:"white",
        backgroundColor:"#F75656",
        padding:5,
        borderTopLeftRadius:10
    },
    DeadlineText:{
        color:"#F75656"
        , fontWeight:"300",
        fontSize:19
    },
    universitiesWrapper:{
        flex: 1,
        justifyContent:"flex-start",
        height:"100%",
        width:"100%"
    },
    singleUniversity:{
        flex: 0.25,
        height:"100%",
        width:"100%",
        borderWidth:0.3,
        marginVertical:5,
    },
    rankingTextWrapper:{
        flex: 0.15,
        justifyContent:"center",
        alignItems:"flex-end",
        height:"100%",
        width:"100%"
    },
    rankingText:{
        marginRight:20,
        color:"green",
        fontWeight:"800",
        fontSize:16,
    },
    imageWrapper:{
        flex: 0.3,
        justifyContent:"center",
        alignItems:"center",
        height:"100%",
        width:"100%",
        borderRadius:50, 
    },
    universityDetailWrapper:{
        flex: 0.70,
        height:"100%",
        width:"100%",
    },
    universityDetailText:{
        fontSize:17,
        marginLeft:15,
        fontWeight:"500",
        marginBottom:5,
        marginTop:5
    },
    locAndPhoneWrapper:{
       flexDirection:'row',
       justifyContent:"space-between"
    },
    phone:{
        fontSize:17,
        marginRight:15,
        fontWeight:"500",
        marginTop:12,
    },
    linksStyles:{
        color:"blue",
        fontWeight:"500",
        textDecorationLine: 'underline',
        fontSize:17,
        marginLeft:15,
        marginBottom:10,
        marginTop:5
    },
    picker: {
        // height: "12%",
        borderWidth: 1,
        marginTop: 20,
        // width: "85%",
        // flex: 0.50,
        justifyContent: 'center',
        // alignContent:'center'
        // backgroundColor:'grey'
    },
});


export default styles;