import React from "react";
import {StyleSheet,View,Text,Button} from "react-native"
export default ({closeModal})=>{
    return(
        <>
        <View style={styles.wrapper}>
            <Text style={styles.text}>Points Es una Aplicacion para agregar localizaciones en el mapa </Text>
            <Text style={styles.text}>- Para agregar un punto en el mapa deja el dedo precionado donde quieres agregar el punto</Text>
            <Text style={styles.text}>- El boton llamado lista te muestra la lista de los puntos que haz guardado</Text>
            <Text style={styles.text}>- El boton llamado Mostrar/Ocultar lo que hace es motrar u ocultar los puntos en el mapa</Text>
            <Text style={styles.Autor} > Aplicacion Creada Por Manuel Puente</Text>
        </View>
        <View>
            <Button title="Cerrar" onPress={closeModal}/>
        </View>
        </>
    )
}
const styles = StyleSheet.create({
    wrapper:{
        width:350,
        height:200,
        padding:5
    },
    text:{
        margin:5,
        padding:1,
    },
    Autor:{
        textAlign:"center",
        fontWeight:"bold",
        paddingTop:10,
    }
})

