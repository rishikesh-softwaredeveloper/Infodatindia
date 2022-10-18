import React,{useState} from "react";
import { View, Text, StyleSheet,TouchableOpacity,Image} from "react-native";
import { Button } from "react-native-elements";
const SubItems = (subItems) => {
const [count,setCount] = useState(0);
    for (var keys in subItems) {
        return (
            <View  style={{borderWidth: 0,marginVertical: 3, marginHorizontal: 0, borderRadius: 0,margin: 0,padding:10,borderColor: "#CCC",borderBottomWidth:1,borderBottomColor:'#bdbbb7'}}>
                <View style={{flexDirection:'row'}}>
                    <View style={{width:"100%",paddingTop:0,marginRight:0,marginLeft:0,justifyContent:'center',alignItems:'center'}}>
                        <Image style={{resizeMode:'contain',height:100,width:'100%',marginBottom:5}}
                         source={{uri:subItems[keys].assets[0]['url']}}
                         />
                        <View style={{marginBottom:5}}>
                            <Text>{subItems[keys].title['en'].toUpperCase()}</Text>
                        </View>
                        <View style={{marginBottom:5}}>
                            <Text style={{fontSize:20}}>&#8377;{subItems[keys].itemPrice['sellingPrice']}</Text>
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'space-between',borderWidth:1,borderColor:'#ccc'}}>
                            {/* <Button title="+" onPress={()=>setCount(count+1)}/> */}
                            <Button
                                title="+"
                                buttonStyle={{ backgroundColor: 'rgba(39, 39, 39, 1)' }}
                                containerStyle={{
                                    width:40,
                                    padding:1
                                }}
                                titleStyle={{ color: 'white' }}
                                onPress={()=>setCount(count+1)}
                                />
                                <Text style={{justifyContent:'center',alignContent:'center',marginTop:6,margin:10,fontSize:20}}>{count}</Text>
                                <Button
                                title="-"
                                buttonStyle={{ backgroundColor: 'rgba(39, 39, 39, 1)' }}
                                containerStyle={{
                                    width:40,
                                    padding:1
                                }}
                                titleStyle={{ color: 'white' }}
                                onPress={()=>count>0?setCount(count-1):count}
                                />

                            {/* <Text style={{justifyContent:'center',alignContent:'center',marginTop:6,margin:10,fontSize:20}}>{count}</Text> */}
                            {/* <Button title="-" onPress={()=>setCount(count-1)}/> */}
                        </View>
                        
                    </View>
                    
                    {/* <View style={styles.sub_container}>
                        <View style={{flexDirection:'column',width:"60%"}}>
                            <View style={{textAlign:'center',marginBottom:5}}>
                                <Text numberOfLines={2}  style={{color: "#000",fontWeight: '500', fontFamily: 'serif',fontSize:14,justifyContent:'center',alignItems:'center'}}>{seltrueBoxItem[keys].device_name}</Text>
                            </View>
                            <Text style={{fontFamily:'serif', fontSize:12,color: '#575957',marginBottom:5}}>{seltrueBoxItem[keys].ram} - {seltrueBoxItem[keys].rom}</Text>
                            <Text style={{fontFamily:'serif', fontSize:12,color: '#575957',marginBottom:38}}>Grade ( {seltrueBoxItem[keys].certification_grade} )</Text>
                        </View>
                    </View> */}
                </View>
                <View style={{flexDirection:'row'}}>
                    {/* <View style={{flexDirection:'row',width:"40%",marginLeft:15}}>
                        <Text style={{ fontWeight: '500',fontFamily:'serif',fontSize:15,color: "#8F8C8B" ,textDecorationLine: 'line-through',marginTop:4}}>&#8377;{(seltrueBoxItem[keys].mrp+500).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}/-</Text>
                    </View>
                     */}
                </View>
            </View>
            // <View style={styles.container}>
            //     <TouchableOpacity>
            //         <View style={styles.sub_container}>
            //             <View style={{ borderWidth: 0, borderColor: "#CCC", margin: 0, padding: 10, borderRadius: 0,width:'90%' }}>
            //                 <View style={{flexDirection:'row',justifyContent:'space-between', paddingBottom: 10 }}>
            //                     <Text numberOfLines={2} style={{ fontWeight: '600', color: "#000",fontSize:12,fontFamily:'serif' }}>{subItems[keys].title['en'].toUpperCase() }</Text>
            //                 </View>
            //             </View>
            //         </View>
            //     </TouchableOpacity>
            // </View>
        );
    }
};


const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        marginVertical: 3, 
        marginHorizontal: 2, 
        borderRadius: 5,
        margin: 0,
        padding: 0,
        borderColor: "#CCC"
    },
    sub_container: {
        flexDirection: 'row',
        padding: 0,
        marginVertical: 0,
        justifyContent: 'space-evenly'
    }

});
// const styles = StyleSheet.create({
// container:{
//     borderWidth: 1, 
//     marginVertical: 10, 
//     marginHorizontal: 10, 
//     margin: 0,
//     padding:0, 
//     borderRadius: 5,
//     borderColor: "#CCC" 
// },
// sub_container:{ 
//     flexDirection: 'row', 
//     padding: 0,
//     marginVertical:0,
//     justifyContent:'space-evenly'
// }

// });
export default SubItems;