import React from 'react'
import { FlatList, Text,  } from 'react-native'
const FlatListDemo = () =>  {
const names=[
  {
    name:"Ekramul",
  },
    {
  name:"Haque",
  },
    {
  name:"Anik",
  },
    {
  name:"Sadia",
  },
    {
  name:"Tasnim",
  },
    {
  name:"Prema",
  },
  {
    name:"Ekram",
  },
    {
  name:"Haque",
  },
    {
  name:"Prema",
  },
    {
  name:"Tasnim",
  },
    {
  name:"Mahmudul",
  },
    {
  name:"Mahin",
  },
]
    return (
      <FlatList data={names} renderItem={(element)=>{
return <Text>{element.item.name}</Text>;
      }}></FlatList>
    )

}
export default FlatListDemo;