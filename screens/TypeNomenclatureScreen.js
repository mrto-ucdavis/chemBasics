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
} from 'react-native';

import { variableDeclaration, nullLiteralTypeAnnotation, declareVariable } from '@babel/types';
import Icon from 'react-native-vector-icons/FontAwesome'
import { renderComponent, withProps } from 'recompose';
import { List, ListItem } from 'react-native-elements'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function TypeNomenclatureScreen() {
  return (
    <View style={styles.container}>
    <Text>testing</Text>
    <Button 
      title= "testing" 
      />
    <Image 
      source={require("../assets/naming_table/Be.png")}
      />
    </View>
  );
}

TypeNomenclatureScreen.navigationOptions = {
  title: 'Identifying elements: Nomenclature',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fitToPhone: {
    width: wp('84.5%'),
    height: hp('17%')
  }
});

