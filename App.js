import React, {useState } from 'react';
import { StyleSheet, Text, View ,Button,} from 'react-native';
import {Map, Modal, Panel, Input,List,Help } from "./components"

export default function App() {
  const [puntos, setPuntos] = useState([])
  const [puntostem, setPuntoTem] = useState({})
  const [nombre, setNombre] = useState("")
  const [visibilityFilter, setFilter] = useState("new_puntos") //new point or all points or help
  const [visibility, setvisibility] = useState(false)
  const [pointsFilter, setPointFilter] = useState(true)

  const tooglePointsFilter =  () => setPointFilter(!pointsFilter)

  const handleLongPress = ({nativeEvent}) => {
    setPuntoTem(nativeEvent.coordinate)
    setvisibility(true)
    setFilter("new_puntos")
  }
  const handleChangeText = text =>{
    setNombre(text)
  }
  const handleSubmit = () => {
    const newpoint = { coordinate: puntostem, name: nombre}
    setPuntos(puntos.concat(newpoint))
    setvisibility(false)
    setNombre("") 
  }
  const handleLista = ()=>{
    setFilter("all_points")
    setvisibility(true)
  }
  const HandleHelp = ()=>{
    setFilter("Help")
    setvisibility(true)
  }
  return (
    <View style={styles.container}>
      <Map onLongPress={handleLongPress} puntos={puntos} pointsFilter={pointsFilter} />
      <Panel onPressLeft={handleLista} textLeft="lista" onPressHelp={HandleHelp}  toogleFilter={tooglePointsFilter}/>
      <Modal visibility={visibility}>
            {visibilityFilter === "new_puntos" 
            ?
            <View style={styles.form}>
            <Input title="Nombre" placeholder="Nombre del punto" onChangeText={handleChangeText} />
            <Button title="Aceptar" onPress={handleSubmit} /> 
            </View>
            :visibilityFilter === "all_points"
            ?
            <>
            <List puntos={puntos} closeModal={() => setvisibility(false)} />
            </>
            :
            <Help closeModal={() => setvisibility(false)}  />
            }
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  form:{
    padding:20
  }
});