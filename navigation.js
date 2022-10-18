import data from './data';
import MainItems from './ListComponent';
import SubItems from './SubListComponent';

import React,{useEffect} from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from "redux";
import { actionCreators } from './state';

const Navigation =()=>{
    const categorys = useSelector((state) => state);
    const dispatch = useDispatch()
    const {initItem, removeItem} = bindActionCreators(actionCreators,dispatch)
    
    useEffect(()=>{
        removeItem();
        initItem(data[0]['products'])
    },[data[0]['categoryId']])
    
    return(
        <View style={styles.container}>
      <View style={{ flexDirection:'row', justifyContent: 'space-between', backgroundColor: '#F5FCFF'}}>
        <View style={{flex:1}}>
          <FlatList
            data={data}
            renderItem={(item)=>(
              <MainItems MainItems={item.item}/>)}
            keyExtractor={(item, index) => item + index}
          />
        </View>
        <View style={{flex:2, backgroundColor:"lightyellow"}}>
          <FlatList
            data={categorys['categoryList'][0]}
            renderItem={(item)=>(<SubItems SubItems={item.item}/>)}
            keyExtractor={(item, index) => item + index}
            // numColumns={2}
            horizontal={false}
          />
        </View>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      marginTop:20,
      margin:10
    },
  });

  
export default Navigation;