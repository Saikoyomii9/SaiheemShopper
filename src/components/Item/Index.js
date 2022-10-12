import React from 'react';
import styles from './styles';
import  { View, TouchableOpacity, Text } from 'react-native';
const ItemsScreen = props => {

  return (
    <View style={styles.container}>
     <View style={styles.bottom}>
      <TouchableOpacity
       style={styles.bottom}
       onPress={()=>console.log('Add Item')}
       >
        <Text style={styles.buttonText}>Add Item!</Text>

      </TouchableOpacity>

     </View>
    </View>
  );
};

export default ItemsScreen;