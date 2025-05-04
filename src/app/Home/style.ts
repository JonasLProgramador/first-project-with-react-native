import { StyleSheet } from "react-native";



 const styles = StyleSheet.create({
    container:{
        flex:1, 
        alignItems:'center',
        backgroundColor:'#d0d2d8',
        paddingTop:62,
    },
    text:{
        fontSize:32,
        fontWeight:700,
        color:'#0004FF'
    },

    logo:{
        height:34,
        width:134,
    },
    form:{
        width: '100%',
        paddingHorizontal:16,
	    gap:7,
	    marginTop:42
    },
    content:{
        flex:1,
        width:'100%',
        backgroundColor:'#FFFFFFFF',
        borderTopRightRadius:24,
        borderTopLeftRadius:24,
        padding:24,
        marginTop:24
    }
})

export default styles