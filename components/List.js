import React from "react";
import {StyleSheet,View,Text,FlatList,Button ,Dimensions} from "react-native"
export default ({puntos, closeModal})=>{
    return(
        <>
            <View style={styles.contenedor}>
                <FlatList
                    data={puntos.map(x=> x.name)}
                    renderItem={({item})=> <View style={styles.item}><Text>{item}</Text></View>}
                    keyExtractor={item => item}
                />
            </View>
            <View style={styles.btn}>
                <Button title="Cerrar" onPress={closeModal}  />
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    btn:{
        padding:15,
    },  
    contenedor:{
        height:Dimensions.get("window").height - 350
    },
    item:{
        borderBottomWidth:1,
        borderColor: "#ccc",
        minHeight:50,
        justifyContent:"center",
        alignItems:"center",
        padding: 15
    }
})