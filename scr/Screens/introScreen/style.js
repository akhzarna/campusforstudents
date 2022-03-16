import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    // for 1st screen 
    container: {
        flex: 1,
        justifyContent:"center",
        alignItems:"center",
        // backgroundColor:"red"
    },
    logoWrapper:{
        flex:0.5, 
        justifyContent:"flex-end",
        alignItems:"center",
    },
    textLogoWrapper:{
        flex:0.5,
        justifyContent:"flex-start",
        alignItems:"center",
    },
    logo:{
        height:100,
        width:100,
        marginBottom:15
    },
    mainHeading:{
        fontSize:27,
        fontWeight:"600"
    },


    // introscreen 1

    //section 1 
    // image section
    imageWrapper:{
        flex:0.3,
        justifyContent:"center",
        alignItems:"center",
        height:"100%",
        width:"100%"
    },
    introImage:{
        height:"90%",
        width:"90%",
        borderRadius:10
    },

    // section 2 
    // text section

    textIntroWrapper:{
        flex:0.5,
        justifyContent:"flex-start",
        alignItems:"center",
        height:"100%",
        width:"100%"
    },
    introText:{
        padding:20,
        fontSize:14,
        textAlign:'justify',
        fontWeight:"500"
    },
    // section 3
    // button section
    skipButtonWrapper:{
        flex:0.1,
        justifyContent:"center",
        alignItems:"center",
        height:"100%",
        width:"100%",

    },
    skipButton: {
        alignItems: "center",
        backgroundColor: "green",
        padding: 10,
        width:"50%",
        borderRadius:15
      },
      btnText:{
          color:"white",
          fontSize:18,
          fontWeight:"bold"
      },


      // section 4
      // navigation
    navigationIntroWrapper:{
        flex:0.1,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        height:"100%",
        width:"100%"
    },
    navCircle:{
        height:10,
        width:10,
        borderWidth: 1,
        borderRadius:10
    },
    navCircleMargin:{
        marginLeft:10
    },
    navCircleBackGround:{
        backgroundColor:"black",
    },
    navCircleBorderBorder:{
        height:22,
        width:22,
        marginLeft:10,
        borderWidth: 3,
        borderRadius:20,
        justifyContent:"center",
        alignItems:"center"
    },
});

export default styles;