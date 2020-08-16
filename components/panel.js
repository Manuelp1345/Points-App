import React from "react";
import {StyleSheet,View,Text,Button} from "react-native"
export default ({onPressLeft, textLeft, onPressHelp, toogleFilter})=>{
    return(
            <>
            <View style={styles.btns}>
                <View style={styles.btn}>
                <Button title={textLeft} onPress={onPressLeft} />
                </View>
                <View style={styles.btn}>
                <Button title="Mostrar/Ocultar" onPress={toogleFilter}/>
                </View>
            </View>
            <View style={styles.btns}>
                <Button title="¿Como funciona la app?" onPress={onPressHelp}/>
            </View>
            </>
    )
}
const styles = StyleSheet.create({
    btns:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        padding:3
    },
    btn:{
        padding:5
    }

})