import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000000aa",
        flex: 1,
        justifyContent: "flex-end",
    },

    subContainer: {
        backgroundColor: "#ffffff",
        flex: 0.40,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        alignItems: "center",
        justifyContent: "center"
    }
    , inputFieldWrapper: {
        width: "100%",
        flex: 0.60, 
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "row",
    },
    inputStyle: {
        borderWidth: 1.5,
        width: "30%",
        textAlign: "center",
        height: 40,
        margin: 15,
        marginTop: 10,
        borderWidth: 2,
        padding: 10,
        borderRadius: 10,
        color: "black",
        fontSize: 16,
    },
    
    ApplyBtn: {
        backgroundColor: "red",
        paddingHorizontal: 20,
        paddingVertical: 10,
        color: "white",
        textAlign: "center",
        borderRadius: 10,
        marginTop: 5,
    }, 
    txtStyle: {
        fontSize: 18,
    },
    cancelImg: {
        height: 40,
        marginLeft: "75%",
        width: 50
    }

    // cancelImg: {
    //     width: "70%",
    //     height: 40,
    //     backgroundColor: "black",
    //     marginRight: "15%",
    //     marginTop: 20,
    //     borderRadius: 50,

    // },

   

});