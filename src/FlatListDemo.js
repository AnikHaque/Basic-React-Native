import React, { Component } from 'react'
import { FlatList, Text, View } from 'react-native'
const FlatListDemo = () =>  {
const names=[
  {

]
    return (
      <FlatList data={names} renderItem={(element)=>{
return <Text>{element.item.name}</Text>;
      }}></FlatList>
    )

}
export default FlatListDemo;