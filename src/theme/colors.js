import React from 'react'
import { FlatList, Text,  } from 'react-native'
const FlatListDemo = () =>  {
const names=[
  {
    name:"Ekramul",
  },
 
  
 

  
 
 
  
 
 
  
  
 
   
 
 
 
  
  
  
 


  
 
  
  
]
    return (
      <FlatList data={names} renderItem={(element)=>{
return <Text>{element.item.name}</Text>;
      }}></FlatList>
    )

}
export default FlatListDemo;