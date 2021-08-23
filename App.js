import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
//import {LinearGradient} from 'react-native-linear-gradient';

export default class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state={
      data: [],
    }
  }

  // async componentDidMount(){
  //   const res = await fetch('http://10.0.2.2:3000/api/weathers')
  //   const data = await res.json();
  //   this.setState({data: data})
  // }

  render(){
    return (
      <ImageBackground source={require('./assets/gradient.png')} resizeMode="cover" style={styles.image}>
        <View style={styles.center}>
          <TouchableOpacity>
            <View style={styles.container}>
              <Image
                source={require('./assets/background.png')}
                //resizeMode='cover'
                style={{
                  width: 250,
                  height: 320,
                  borderRadius: 14
                }}
              />
              <View
                style={{
                  justifyContent: 'space-between',
                  position: 'absolute',
                  top: 42,
                  marginLeft: 50,
                  marginRight: 50,
                  height: 18,
                  width: 150,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Text style={{ color: '#0000ff', fontWeight: 'bold', fontSize: 16 }}>SANTIAGO DE CALI</Text>
                <Text style={{ color: '#0000ff', fontSize: 12 }}>16 de Abril 2021</Text>
                <Text style={{ color: '#0000ff', fontWeight: 'bold', fontSize: 34 }}>31°</Text>
              </View>
              <View
              //0000ff
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  position: 'absolute',
                  top: 295,
                  height: 25,
                  width: 130,
                  backgroundColor: 'rgba(0, 0, 255, 0.6)',
                  borderTopRightRadius: 10,
                  //borderBottomRightRadius: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                  ...styles.shadow
                }}>
                <Text style={{ color: 'white', fontWeight: 'bold', paddingLeft:8}}>Clima /</Text>
                <Text style={{ color: 'white' }}> Soleado</Text>
              </View>
                
              {/* <View>
                <FlatList
                  data={this.state.data}
                  renderItem={
                    ({item}) => <Text style={{color:'red'}}> { item.main } </Text>
                  }
                />
              </View> */}


              <View style={styles.containerData}>
  
                <View style={styles.contentImg}>
                  <TouchableOpacity style={{flexDirection: 'row',}}>
                    <Image style={styles.icons} source={require('./assets/temp.png')}></Image>
                    <Text style={{ left:4,top:10 }}>Temperatura</Text>
                  </TouchableOpacity>
                  <Text style={{ top:10 }}>31</Text>
                </View>
  
                <View style={{ width:220, paddingTop:4,borderBottomColor: 'gray', borderBottomWidth: 1}}></View>
  
                <View style={styles.contentImg}>
                  <TouchableOpacity style={{flexDirection: 'row',}}>
                    <Image style={styles.icons} source={require('./assets/humidity.png')}></Image>
                      <Text style={{ left:4,top:10 }}>Húmedad</Text>
                  </TouchableOpacity>
                  <Text style={{ top:10 }}>80%</Text>
                </View>
  
                <View style={{ width:220, paddingTop:4,borderBottomColor: 'gray', borderBottomWidth: 1, }}></View>
  
                <View style={styles.contentImg}>
                  <TouchableOpacity style={{flexDirection: 'row',}}>
                    <Image style={styles.icons} source={require('./assets/wind.png')}></Image>
                    <Text style={{ left:4,top:10 }}>Velocidad Viento</Text>
                  </TouchableOpacity>
                  <Text style={{ top:10 }}>1.0 m/s</Text>
                </View>
  
              </View>
              <StatusBar style="auto" />
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
  
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    height: 500,
    backgroundColor: '#fff',
    //padding: 10,
    borderRadius: 20
  },
  containerData: {
    paddingTop: 20,
    paddingLeft: 15,
    paddingRight:15
  },
  contentImg: {
    paddingTop:4,
    flexDirection: 'row',
    justifyContent:'space-between'
  },
  icons: {
    width: 40,
    height: 40,
  }
});

