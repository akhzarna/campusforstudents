import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1.0,
        flexDirection:'column',
        // justifyContent: "center",
        // height:"100%",
        // alignItems: "center",
        // backgroundColor:"grey",
    },
    // section 1 filters
    filtersWrapper: {
        flex: 0.6,
        flexDirection:'column',
        justifyContent: "flex-start",
        alignItems: "center",
        height: "100%",
        width: "100%",
        // backgroundColor:'red'
    },
     // sextion 2 Input fields 
     inputFieldsWrapper: {
        flex: 0.3,
        flexDirection:'column',
        // height: "100%",
        // width: "100%",
        // backgroundColor:'green'
    },
    // section 3 button
    btnWrapper: {
        flex: 0.1,
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
        flexDirection: 'row',
        justifyContent: "flex-end", 
        marginBottom:0,
        // backgroundColor:"blue",
    },
    mainHeadingWrapper: {
        flex: 0.07,
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
        marginTop:20,
    },
    mainHeadingText: {
        fontSize: 24,
        fontWeight: "700",

    },
    filters: {
        flex: 0.93,
        alignItems: "center",
        height: "100%",
        width: "100%",
    },
    filter: {
        flex: 0.9,
        height: "100%",
        width: "100%",
        alignItems: 'center'
    },
    picker: {
        height: "12%",
        borderWidth: 1,
        marginTop: 20,
        width: "85%",
        flex: 0.50,
        justifyContent: 'center',
        // alignContent:'center'
        // backgroundColor:'grey'
    },
    cityPicker:{
        height:"30%",
        marginTop:18,
        marginLeft:13,  
        width: "85%",
        flex: 0.50,
        justifyContent: 'center' ,
        // backgroundColor:'grey'
    },
    inputFieldSectionText: {
        padding: 20,
        fontSize: 14,
        textAlign: 'justify',
        fontWeight: "500"
    },
    inputFeilds: {
        marginBottom:3,
        flexDirection: "row",
        flexWrap: "wrap"
        ,  borderBottomWidth:0.5
    },
    inputFeild: {
        height: 40,
        width: "40%",
        margin: 15,
        marginTop: 10,
        borderWidth: 2,
        padding: 10,
        borderRadius: 10,
        color: "black",
        fontSize: 16,
      
    },
    citypicker:{
        marginTop:-10
        ,borderWidth:1.5,
        padding:"4%",
        paddingHorizontal:"33%",
        borderRadius:50
      },
    applyFilterButton: {
        flex: 1,
        flexDirection: 'row',
        alignItems: "center",
        padding: 10,
        width: "50%",
        borderRadius: 15
    },
    btnText: {
        color: "white",
        fontSize: 19,
        fontFamily: 'Poppins-Medium',

    },
    resetBtn: {
        marginRight: 20,
    }
    ,
    applyBtn: {
        backgroundColor: "green",
        marginRight: "5%",
        paddingVertical: 10,
        paddingHorizontal: 50,
        borderRadius: 5,
    },  
    resetBtntxt: {
        color: "#666666",
        fontSize: 25,

    }
})
export default styles;