import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:"center",
        alignItems:"center",
    },
    filtersWrapper:{
        flex: 0.6,
        justifyContent:"center",
        alignItems:"center",
        // backgroundColor:"blue",
        height:"100%",
        width:"100%",
    },


// sextion 2 Input fields 
    inputFieldsWrapper:{
        flex: 0.3,
        height:"100%",
        width:"100%",
    },
    inputFieldSectionText:{
        padding:20,
        fontSize:14,
        textAlign:'justify',
        fontWeight:"500"
    },
    inputFeilds:{
        flexDirection:"row",
        flexWrap:"wrap"
    },
    inputFeild:{
        height: 40,
        width:"40%",
        margin: 15,
        marginTop:10,
        borderWidth: 2,
        padding: 10,
        borderRadius:10,
        color:"black",
        fontSize:16,
    },

// section 3 button
    btnWrapper:{
        flex: 0.1,
        justifyContent:"center",
        alignItems:"center",
        height:"100%",
        width:"100%",
    },
    applyFilterButton: {
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

})
export default styles;