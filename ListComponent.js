import React from "react";
import { View, Text, StyleSheet,TouchableOpacity} from "react-native";
import { useSelector,useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from './state';
import data from "./data";

const MainItems = (mainItems) => {
    const categorys = useSelector((state) => state);

    const dispatch = useDispatch()
    const {initItem, removeItem} = bindActionCreators(actionCreators,dispatch)

    const onupdate=(item)=>{
        let categoryList = data.filter((val)=> val['categoryId'] == item)
        removeItem()
        initItem(categoryList[0]['products'])
    }

    for (var keys in mainItems) {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>onupdate(mainItems[keys].categoryId)}>
                    <View style={styles.sub_container}>
                        <View style={{ borderWidth: 0, borderColor: "#CCC", margin: 0, padding: 10, borderRadius: 0,width:'90%' }}>
                            <View style={{flexDirection:'row',justifyContent:'space-between', paddingBottom: 10 }}>
                                <Text numberOfLines={2} style={{ fontWeight: '600', color: "#000",fontSize:12,fontFamily:'serif' }}>{mainItems[keys].categoryName.toUpperCase() }</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
};


const styles = StyleSheet.create({
container:{
    borderWidth: 1, 
    marginVertical: 10, 
    marginHorizontal: 10, 
    margin: 0,
    padding:0, 
    borderRadius: 5,
    borderColor: "#CCC" 
},
sub_container:{ 
    flexDirection: 'row', 
    padding: 0,
    marginVertical:0,
    justifyContent:'space-evenly'
}

});

export default MainItems;