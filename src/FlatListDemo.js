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
    name:"Mahmudul",
  },
    {
  name:"Haque",
  },
    {
  name:"Mahin",
  },
    {
  name:"Hasna",
  },
    {
  name:"Hena",
  },
    {
  name:"Israt",
  },
]
    return (
      <FlatList data={names} renderItem={(element)=>{
return <Text>{element.item.name}</Text>;
      }}></FlatList>
    )

}
export default FlatListDemo;