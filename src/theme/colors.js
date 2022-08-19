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
 

  
 
 
  
 
 
  
  
 
   
 
 
 
  
  
  
 


  
 
  
  
]
    return (
      <FlatList data={names} renderItem={(element)=>{
return <Text>{element.item.name}</Text>;
      }}></FlatList>
    )

}
export default FlatListDemo;