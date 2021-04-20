import React, { Component } from 'react';

import { View, StyleSheet, TouchableOpacity, Text, Image, Dimensions } from 'react-native';

import MapView,  { Marker, Polyline, PROVIDER_GOOGLE} from 'react-native-maps';
import haversine from 'haversine'
import Modal from 'react-native-modal'


import Button from '../../components/Button';
import carImage from './../../../assets/images/car.png';


import { COLORS, FONTS, SIZES, icons, images, data, } from '../../../exports'


const screen = Dimensions.get('screen')
const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE = 37.78817;
const LONGITUDE = -122.3903973;
const LATITUDE_DELTA = 0.05;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const TARGET_LATITUDE = 37.7861862;
const TARGET_LONGITUDE = -122.3897073;
const TARGET_COORDINATE = {
  latitude: TARGET_LATITUDE,
  longitude: TARGET_LONGITUDE,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA
}



export default class NavigationMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prevPos: null,
      curPos: { latitude: LATITUDE, longitude:LONGITUDE  },
      curAng: 45,
      latitudeDelta:LATITUDE_DELTA ,
      longitudeDelta:LONGITUDE_DELTA,
      initialRegion: {
        latitude: LATITUDE - 0.001,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      },
      carRot: '-40deg',
      carStep1: 0,
      carStep2: 0,
      routeCoordinates: []  ,
      distance: 0.56,
      modalVisible: false
    };
    this.changePosition = this.changePosition.bind(this);
    this.getRotation = this.getRotation.bind(this);
    this.updateMap = this.updateMap.bind(this);
  }
  

  // simulate the navigation

  simulateNavigation() {
    this.interval1 = setInterval(() => {
      this.changePosition(-0.0001 /10, -0.00012 /10);
      this.setState({carStep1: this.state.carStep1 + 1});

      if(this.state.carStep1 === 70) {
        clearInterval(this.interval1);
        this.setState({carStep1: 0})
      }


    }, 100)

    // turn left then 

    this.interval2 = setInterval(() => {
     
      this.setState({carStep2: this.state.carStep2 + 1});

      if(this.state.carStep2 >= 90) {
        // trun left
        this.setState({carRot: '-130deg'})
        this.changePosition(-0.0001 / 10, +0.000135 /10);
      }

      if(this.state.carStep2 === 200) {
        clearInterval(this.interval2);
        this.setState({carStep2: 0})
        this.setState({modalVisible: false})
      }


    }, 100)

  }


  calcDistance = (newLatLng) => {
    const { prevPos} = this.state;
    return prevPos ? haversine( prevPos, newLatLng) : 0;
  }



  changePosition(latOffset, lonOffset) {
    const latitude = this.state.curPos.latitude + latOffset;
    const longitude = this.state.curPos.longitude + lonOffset;
    this.setState({
      prevPos: this.state.curPos,
      curPos: { latitude, longitude },
      routeCoordinates:this.state.routeCoordinates.concat([{latitude, longitude}]),
      distance: this.state.distance - this.calcDistance({latitude, longitude}),
    });
    // this.updateMap();
  }

  getRotation(prevPos, curPos) {
    if (!prevPos) {
      return 0;
    }
    const xDiff = curPos.latitude - prevPos.latitude;
    const yDiff = curPos.longitude - prevPos.longitude;
    return (Math.atan2(yDiff, xDiff) * 180.0) / Math.PI;
  }

  updateMap() {
    const { curPos, prevPos, curAng } = this.state;
    const curRot = this.getRotation(prevPos, curPos);
    this.map.animateCamera({ heading: curRot, center: curPos, pitch: curAng });
  }

  render() {
    return (
      <View style={styles.flex}>
        <MapView
        provider={PROVIDER_GOOGLE}
          ref={el => (this.map = el)}
          style={styles.flex}
          minZoomLevel={16}
          initialRegion={
            this.state.initialRegion
          }
        >
          <MapView.Marker
            coordinate={this.state.curPos}
            anchor={{ x: 0.28, y: 0.5 }}
            
          >
            <Image source={require('./../../../assets/images/car3.png')} resizeMode='contain' style={{ width:30, height:30,  transform: [{rotate: this.state.carRot}]}} />
          </MapView.Marker>
          <Marker coordinate={TARGET_COORDINATE}>
            <Image source={icons.pin} style={{ width:30, height:30, tintColor:'#FF9F1C'}} />
          </Marker>
          <Polyline coordinates={this.state.routeCoordinates} strokeColor={'#FF9F1C'} strokeWidth={8} />
        </MapView>

        <View style={styles.buttonContainerUpDown}>
          <View style={{ height: 48, flex: 1, justifyContent: 'center', marginLeft: 20, marginRight: 20, marginTop: 20, alignContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#FF9F1C' }}>
            {parseFloat(this.state.distance).toFixed(2) > 0 ? parseFloat(this.state.distance).toFixed(2): 0} Km</Text>
          </View>
        </View>

        <View style={styles.buttonContainerUpDown}>
          <View style={{ flex: 1, justifyContent: 'flex-end', marginLeft: 20, marginRight: 20, marginBottom: 20 }}>
            <Button text="Track Your Order" onPress={() => {this.simulateNavigation()}}></Button>
          </View>
        </View>

        <Modal isVisible={this.state.modalVisible} animationType="slide" transparent={true} >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View style={{ height:30}}>
                                <View style={styles.modalCircle}></View>
                            </View>

                            <View style={styles.modalView2}>
                                <Image source={images.burger} style={{ width: 60, height: 50 }} />
                                <Text style={styles.modalTitle}>Your Burger is arrived</Text>
                                <View style={{ marginRight: 40, marginLeft: 40, marginBottom: 40, marginTop: 10 }}>
                                    <Text style={styles.modalDesc}> Thanks you  for Ordering.... </Text>
                                </View>

                                <TouchableOpacity style={styles.modalButton}
                                    onPress={() => {
                                      this.setState({modalVisible: false})
                                    }}>
                                    <Text style={styles.textStyle}>Ok</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    width: '100%',
  },
  buttonContainerUpDown: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonContainerLeftRight: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'rgba(100,100,100,0.2)',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    height: 50,
    width: 50,
  },
  up: {
    alignSelf: 'flex-start',
  },
  down: {
    alignSelf: 'flex-end',
  },
  left: {
    alignSelf: 'flex-start',
  },
  right: {
    alignSelf: 'flex-end',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
},
modalView2: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingBottom: 40
},
modalView: {
    margin: 20,
    backgroundColor: 'transparent',
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2, },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
},
modalTitle: {
  marginTop:20,
    color: '#FF9F1C',
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 18
},
modalDesc: {
    color: '#1d2126',
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 20,
    textAlign: 'center'
},
modalButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 100,
    backgroundColor: '#FF9F1C',
    borderRadius: 10
},
textStyle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 18,
    textAlign: 'center'
},
modalCircle: {
    width: 125,
    height: 125,
    borderRadius: 125,
    backgroundColor: '#fff'
}
});