import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000000aa",
        flex: 1,

        justifyContent: "flex-end"
    },

    subContainer: {
        backgroundColor: "#ffffff",
        flex: 0.30,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        alignItems: "center",
        justifyContent: "center"
    }
    , inputFieldWrapper: {
        width: "100%",
        flex: 0.50
        , justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "row",

    },
    inputStyle: {
        borderWidth: 1.5,
        width: "30%",
        textAlign: "center"
    },
    ApplyBtn: {
        backgroundColor: "red",
        paddingHorizontal: 20,
        paddingVertical: 10,
        color: "white",
        textAlign: "center",
        borderRadius: 10,
        marginTop: 5,
    }, txtStyle: {
        fontSize: 18

    }
    ,

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
    ,
    cancelImgStyle: {
        flex: 0.10

    }

});