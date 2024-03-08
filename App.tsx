import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Bai1 from './Bai1'
import Bai2 from './Bai2'
import Bai3 from './Bai3'

const App = () => {
  const [text, setText] = useState('');
  const [error, setError] = useState('');

  const handleTextChange = (text) => {
    setText(text);
  };

  const handleTextChangeError = (text) => {
    if (!text) {
      setError('Vui lòng nhập thông tin');
    } else {
      setError('');
    }
  };

  return (
    <View style={{padding:10}}>
      {/* <Bai1 iconLeft={require('./image/back-button.png')} iconRight={require('./image/man.png')} title={"Header"}/>
      <Bai1 iconLeft={null} iconRight={require('./image/man.png')} title={"Title"}/>
      <Bai1 iconLeft={null} iconRight={null} title={"Center"}/> */}
      <Bai2/>
      {/* <Bai3 label={"Title"}
       onChangeText={handleTextChangeError}
      placeholder={"Vui lòng nhập"}
      errorMessage={error}/>
      <Bai3 label={"Title"}
       onChangeText={handleTextChange}
      placeholder={"Vui lòng nhập"}
      errorMessage={null}/>
      <Text style={{marginLeft:10}}>Text nhập là: {text}</Text> */}

    </View>
  )
}

export default App

const styles = StyleSheet.create({})