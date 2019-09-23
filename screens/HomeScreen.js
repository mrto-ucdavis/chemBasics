import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  Alert,
  Switch,
  TextInput
} from 'react-native';

import { variableDeclaration, nullLiteralTypeAnnotation, declareVariable, booleanLiteral } from '@babel/types';
import Icon from 'react-native-vector-icons/FontAwesome'
import { renderComponent } from 'recompose';
import { List, ListItem, Input } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import SwitchExample from '../screens/SwitchExample.js';
import AlertExample from '../screens/AlertExample.js';

export default class HomeScreen extends Component {
  constructor(){
    super();
    this.state={
      // This is our Default Element value
      ElementHolder : 1,
      switch1Value : false,
      input: '',
      name: '',
      elementCheck: '',
    };
  }
  toggleSwitch1 = (value) => {
    this.setState({switch1Value: value})
    console.log('Switch 1: ' + value)
  }
 
  GenerateRandomElement=()=>
  {
    var RandomElement = Math.floor(Math.random() * 60); // 60 elements
    this.setState({
      ElementHolder : RandomElement
    })
  }
  alertTesting=(elementName)=>
  {
    // make a boolean case where it checks 
    //if the input is the same as amingTable[this.state.ElementHolder]
    // if true (match) make one alert that says correct
    // if false (not match) another alert; this will bypass what i needs to be done
    if (this.state.elementCheck === "Hydrogen"){
        Alert.alert(
        'testing222'
        )
    } 
  }
      onSubmit = () => {
        if (this.state.name.trim().toLowerCase === "Hydrogen") {
            Alert.alert('Alert', 'Password must be minimum 8 characters');
            return;
        }
        //Do your stuff if condition meet.
    }

  render() {
    return (
      <ScrollView>
      <Button 
        title="Generate Random Element" 
        onPress={this.GenerateRandomElement} 
      />
      
      {elementTable[this.state.ElementHolder]}
      
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        placeholder="e.g hydrogen"
        onChangeText={(text) => this.setState({ password: text })}
        secureTextEntry={false}
        value={this.state.password}
        textTransform="lowercase"
      />

        <TouchableOpacity onPress={() => this.onSubmit()}>
          <Text style={styles.submit}>Submit</Text>
        </TouchableOpacity>
        
          <View>
          <AlertExample />
          <SwitchExample
            toggleSwitch1 = {this.toggleSwitch1}
            switch1Value = {this.state.switch1Value}
            />
            </View>

      </ScrollView>
      //<Text>{this.state.ElementHolder}</Text>
      // {namingTable[this.state.ElementHolder]} 
    );
  }
}

HomeScreen.navigationOptions = {
  title: 'Identifying elements: Naming',
};
const onSubmitAnswer = () =>{
  Al
}
const showAlert = () =>{
        Alert.alert(
           'You need to...'
        )
     }
const styles = StyleSheet.create(
{
  MainContainer: {

    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
      backgroundColor: 'white',
      width: 100,
      borderRadius: 50,
      alignItems: 'center',
      marginTop: 10,
      justifyContent: 'center',
   }
 
});

    var h = <Image source={require("../assets/periodic_table/Hydrogen-1.png")}/>;
    var he = <Image source={require("../assets/periodic_table/Helium-2.png")}/>;
    var li = <Image source={require("../assets/periodic_table/Lithium-3.png")}/>;
    var be = <Image source={require("../assets/periodic_table/Beryllium-4.png")}/>;
    var  b = <Image source ={require("../assets/periodic_table/Boron-5.png")}/>;
    var c = <Image source ={require("../assets/periodic_table/Carbon-6.png")}/>;
    var n = <Image source ={require("../assets/periodic_table/Nitrogen-7.png")}/>;
    var o = <Image source ={require("../assets/periodic_table/Oxygen-8.png")}/>;
    var f = <Image source ={require("../assets/periodic_table/Fluorine-9.png")}/>;
    var ne = <Image source={require("../assets/periodic_table/Neon-10.png")}/>;
    var na = <Image source={require("../assets/periodic_table/Sodium-11.png")}/>;
    var mg = <Image source={require("../assets/periodic_table/Magnesium-12.png")}/>;
    var al = <Image source={require("../assets/periodic_table/Aluminum-13.png")}/>;
    var si = <Image source={require("../assets/periodic_table/Silicon-14.png")}/>;
    var p = <Image source={require("../assets/periodic_table/Phosphorus-15.png")}/>;
    var s = <Image source={require("../assets/periodic_table/Sulfur-16.png")}/>;
    var cl = <Image source={require("../assets/periodic_table/Chlorine-17.png")}/>;
    var ar = <Image source={require("../assets/periodic_table/Argon-18.png")}/>;
    var k = <Image source={require("../assets/periodic_table/Potassium-19.png")}/>;
    var ca = <Image source={require("../assets/periodic_table/Calcium-20.png")}/>;
    var sc = <Image source={require("../assets/periodic_table/Scandium-21.png")}/>;
    var ti = <Image source={require("../assets/periodic_table/Titanium-22.png")}/>;
    var v = <Image source={require("../assets/periodic_table/Vanadium-23.png")}/>;
    var cr = <Image source={require("../assets/periodic_table/Chromium-24.png")}/>;
    var mn = <Image source={require("../assets/periodic_table/Manganese-25.png")}/>;
    var fe = <Image source={require("../assets/periodic_table/Iron-26.png")}/>;
    var co = <Image source={require("../assets/periodic_table/Cobalt-27.png")}/>;
    var ni = <Image source={require("../assets/periodic_table/Nickel-28.png")}/>;
    var cu = <Image source={require("../assets/periodic_table/Copper-29.png")}/>;
    var zn = <Image source={require("../assets/periodic_table/Zinc-30.png")}/>;
    var ga = <Image source={require("../assets/periodic_table/Gallium-31.png")}/>;
    var ge = <Image source={require("../assets/periodic_table/Germanium-32.png")}/>;
    var as = <Image source={require("../assets/periodic_table/Arsenic-33.png")}/>;
    var se = <Image source={require("../assets/periodic_table/Selenium-34.png")}/>;
    var br = <Image source={require("../assets/periodic_table/Bromine-35.png")}/>;
    var kr = <Image source={require("../assets/periodic_table/Krypton-36.png")}/>;
    var rb = <Image source={require("../assets/periodic_table/Rubidium-37.png")}/>;
    var sr = <Image source={require("../assets/periodic_table/Strontium-38.png")}/>;
    var y = <Image source={require("../assets/periodic_table/Yttrium-39.png")}/>;
    var zr = <Image source={require("../assets/periodic_table/Zirconium-40.png")}/>;
    var nb = <Image source={require("../assets/periodic_table/Niobium-41.png")}/>;
    var mo = <Image source={require("../assets/periodic_table/Molybdenum-42.png")}/>;
    var ru = <Image source={require("../assets/periodic_table/Ruthenium-44.png")}/>;
    var rh = <Image source={require("../assets/periodic_table/Rhodium-45.png")}/>;
    var pd = <Image source={require("../assets/periodic_table/Palladium-46.png")}/>;
    var ag = <Image source={require("../assets/periodic_table/Silver-47.png")}/>;
    var cd = <Image source={require("../assets/periodic_table/Cadmium-48.png")}/>;
    var In = <Image source={require("../assets/periodic_table/Indium-49.png")}/>;
    var sn = <Image source={require("../assets/periodic_table/Tin-50.png")}/>;
    var sb = <Image source={require("../assets/periodic_table/Antimony-51.png")}/>;
    var te = <Image source={require("../assets/periodic_table/Tellurium-52.png")}/>;
    var i = <Image source={require("../assets/periodic_table/Iodine-53.png")}/>;
    var xe = <Image source={require("../assets/periodic_table/Xeon-54.png")}/>;
    var cs = <Image source={require("../assets/periodic_table/Cesium-55.png")}/>;
    var ba = <Image source={require("../assets/periodic_table/Barium-56.png")}/>;
    var pt = <Image source={require("../assets/periodic_table/Platinum-78.png")}/>;
    var au = <Image source={require("../assets/periodic_table/Gold-79.png")}/>;
    var hg = <Image source={require("../assets/periodic_table/Mercury-80.png")}/>;
    var pb = <Image source={require("../assets/periodic_table/Lead-82.png")}/>;
    var u = <Image source={require("../assets/periodic_table/Uranium-92.png")}/>;
    
    elementTable = [
      h,
      he,
      li,
      be,
      b,
      c,
      n,
      o,
      f,
      ne,
      na,
      mg,
      al,
      si,
      p,
      s,
      cl,
      ar,
      k,
      ca,
      sc,
      ti,
      v,
      cr,
      mn,
      fe,
      co,
      ni,
      cu,
      zn,
      ga,
      ge,
      as,
      se,
      br,
      kr,
      rb,
      sr,
      y,
      zr,
      nb,
      mo,
      ru,
      rh,
      pd,
      ag,
      cd,
      In,
      sn,
      sb,
      te,
      i,
      xe,
      cs,
      ba,
      pt,
      au,
      hg,
      pb,
      u,
      ];

    namingTable = [
      "Hydrogen",
      "Helium",
      "Lithium",
      "Beryllium",
      "eBoron",
      "Carbon",
      "Nitrogen",
      "Oxygen",
      "Fluorine",
      "Neon",
      "Sodium",
      "Magnesium",
      "Aluminum",
      "Silicon",
      "Phosphorus",
      "Sulfur",
      "Chlorine",
      "Argon",
      "Potassium",
      "Calcium",
      "Scandium",
      "Titanium",
      "Vanadium",
      "Chromium",
      "Manganese",
      "Iron",
      "Cobalt",
      "Nickel",
      "Copper",
      "Zinc",
      "Gallium",
      "Germanium",
      "Arsenic",
      "Selenium",
      "Bromine",
      "Krypton",
      "Rubidium",
      "Strontium",
      "Yttrium",
      "Zirconium",
      "Niobium",
      "Molybdenum",
      "Ruthenium",
      "Rhodium",
      "Palladium",
      "Silver",
      "Cadmium",
      "Indium",
      "Tin",
      "Antimony",
      "Tellurium",
      "Iodine",
      "Xeon",
      "Cesium",
      "Barium",
      "Platinum",
      "Gold",
      "Mercury",
      "Lead",
      "Uranium",
      ];
        /* 
        References:
        https://stackoverflow.com/questions/54115006/how-can-i-validate-a-text-input-in-react-native-for-minimum-characters
        https://medium.com/javascript-inside/better-understanding-forms-in-react-a85d889773ce
        */

        /*
        I like the idea of using onChangeText 
        with a icon next to it that changes 
        once the typed input is the same as the element object in the array
        */
