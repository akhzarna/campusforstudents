import {StyleSheet, Dimensions} from 'react-native';
import { ThemeColor } from '../../Constants/ThemeColor';
const { height, width} = Dimensions.get('window')

const styles = StyleSheet.create({
    // for 1st screen 
    container: {
        height:height,
        width:width,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:'#fff',
        position:'relative'
    },
      horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
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
   //design Purpose 
   blobDesign:{
       position:'absolute',
       top:'-15%',
       right:'-20%',
       opacity:0.35
   },
   blobDesigntwo:{
       position:'absolute',
       bottom:'-10%',
       left:'-10%',
       opacity:0.45
   },
    //section 1 
    // image section
    imageWrapper:{
       
        marginVertical:10,
        height:height*0.40,
        width:width*0.85,
        justifyContent:'flex-end'
    },
    introImage:{
        height:"75%",
        width:"90%",
        alignSelf:'center'
      
    },

    // section 2 
    // text section

    textIntroWrapper:{
        
        marginVertical:25,
        alignItems:'center',
        justifyContent:'center',
        width:width*0.70,
        height:height*0.20,
        marginBottom:150
        
    },
    introText:{
        fontFamily:'Bungee-Regular',
        fontSize:22,
        color:ThemeColor.primary,
        textShadowColor:ThemeColor.lightText,
        textShadowOffset:{width: 0.5, height: 0.5},
        textShadowRadius:1,
        marginVertical:-20,
    },
    detailText:{
        fontFamily:'Bungee-Regular',
        textAlign:'center',
        fontSize:22,
        color:ThemeColor.primary,
        textShadowColor:ThemeColor.lightText,
        textShadowOffset:{width: 0.5, height: 0.5},
        textShadowRadius:1,
        marginVertical:-10,
    },
    detailTextSecond:{
        fontFamily:'Bungee-Regular',
        textAlign:'center',
        fontSize:26,
        color:'#FBB03B',
        textShadowColor:ThemeColor.lightText,
        textShadowOffset:{width: 0.5, height: 0.5},
        textShadowRadius:1,
        marginVertical:-10,
    },
    // section 3
    // button section
    skipButtonWrapper:{
       width:width*0.50,
       height:height*.15,
     
        justifyContent:'flex-end',
        alignItems:"center",
       
        
        

    },
    skipButton: {
        alignItems: "center",
        backgroundColor:ThemeColor.dark,
        justifyContent:'center',
        width:"100%",
        height:50,
        borderRadius:30
      },
      btnText:{
          color:"white",
          fontSize:18,
          fontFamily:'Poppins-SemiBold',
          marginTop:5,
      },
      introImageThird:{
        height:"100%",
        width:"70%",
        alignSelf:'center'
      }


      // section 4
      // navigation
  /*  navigationIntroWrapper:{
       
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        
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
    }, */
});

export default styles;