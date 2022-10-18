import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';

export default function App() {
  const [value, setValue] = useState(false)
  const [heads, setHeads] = useState(0)
  const [tails, setTails] = useState(0)
  const [total, setTotal] = useState(0)
 
  const tossCoin = () => {
    const randomValue = Math.floor(Math.random() * 2)
    if (randomValue === 0) {
      setValue(true)
    } else {
      setValue(false)
    }
  }

  const onTossCoin = () => {
    tossCoin()
    setTotal(total + 1)
    if (value === true) {
      setHeads(heads + 1)
    } else {
      setTails(tails + 1)
    }
  }


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
       <LinearGradient
        // Button Linear Gradient
        colors={['#E0A347', '#F4D643']}
        style={styles.container}>
        <View style={{paddingVertical: 30, width: '90%', backgroundColor: 'white', borderRadius: 6, flexDirection: 'column', justifyContent: 'center', alignItems:'center'}}>
        <Text style={{fontSize: 30, color: '#E0A347', fontWeight: '600'}}>Coin Toss Game</Text>
        <Text style={{fontSize: 20, paddingTop: 6}}>Heads (or) Tails</Text>

        {value ? <Image style={{width: 200, height: 200, margin: 10}} source={{uri: 'https://assets.ccbp.in/frontend/react-js/heads-img.png'}} /> : <Image style={{width: 200, height: 200, margin: 10}} source={{uri: 'https://assets.ccbp.in/frontend/react-js/tails-img.png'}} />}

          {/* <Image source={{uri: "https://assets.ccbp.in/frontend/react-js/heads-img.png"}} style={{width: 200, height: 200, marginBottom: 10}}/> */}

        <LinearGradient
        // Button Linear Gradient
        colors={['#E0A347', '#F4D643']}
        style={{width:100, height: 40, borderRadius: 5,}}
        start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}>
          <TouchableOpacity onPress={onTossCoin} style={{flex:1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 20, color: 'white', fontWeight: '600', textAlign: 'center', color: 'brown'}}>Toss</Text>
          </TouchableOpacity>
        </LinearGradient>

        <View style={{flexDirection: 'row', marginTop: 20,}}>
          <Text style={{fontSize: 16, margin: 6}}>Toss Count: {total}</Text>
          <Text style={{fontSize: 16, margin: 6}}>Heads Count: {heads}</Text>
          <Text style={{fontSize: 16, margin: 6}}>Tails Count: {tails}</Text>
        </View>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});
