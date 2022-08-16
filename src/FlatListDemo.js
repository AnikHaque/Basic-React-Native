import React, { Component } from 'react'
import { FlatList, Text, View } from 'react-native'
const FlatListDemo = () =>  {
const names=[
  {
name:"Ekram",
},
  {
name:"Ekram",
},
  {
name:"Ekram",
},
  {
name:"Ekram",
},
  {
name:"Ekram",
},
  {
name:"Ekram",
},
]
    return (
      <FlatList data={names} renderItem={(element)=>{
return console.log(element);
      }}></FlatList>
    )

}
export default FlatListDemo;