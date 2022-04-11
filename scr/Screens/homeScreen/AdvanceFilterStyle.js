import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
    },

    // section 1 filters
    filtersWrapper: {
        flex: 0.6,
        justifyContent: "flex-start",
        alignItems: "center",


        height: "100%",
        width: "100%",
    },
    mainHeadingWrapper: {
        flex: 0.07,
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
        marginTop:20
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
        justifyContent: 'center'
    },



    // sextion 2 Input fields 
    inputFieldsWrapper: {
        flex: 0.3,
        height: "100%",
        width: "100%",
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

    // section 3 button
    btnWrapper: {
        flex: 0.10,
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
 
        flexDirection: "row",
        justifyContent: "flex-end"

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
        borderRadius: 5
    },
    resetBtntxt: {
        color: "#666666",
        fontSize: 25,

    }
})
export default styles;