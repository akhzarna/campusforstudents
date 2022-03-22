import {StyleSheet} from "react-native"

export const styles = StyleSheet.create({
container:{
    backgroundColor: "#000000aa",
    flex: 1,
 
    justifyContent:"flex-end"
},

subContainer:{
    backgroundColor: "#ffffff",
    flex: 0.30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems:"center",
    justifyContent:"center"
}
,inputFieldWrapper:{
width:"100%",
flex:0.50
,justifyContent:"space-evenly",
alignItems:"center",
flexDirection:"row", 

},
inputStyle:{borderWidth:1.5,
    width:"30%",
    textAlign:"center"
},
ApplyBtn:{
    backgroundColor: "red",
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: "white",
    textAlign: "center",
    borderRadius: 10,
    marginTop: 5,
},txtStyle:{
fontSize:18

}


});