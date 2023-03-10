import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../utils/styles/Colors';
import {style} from '../../utils/styles/GlobalStyles';
import GetLocation from 'react-native-get-location';
import useInterval from '../../utils/customHooks/useInterval';
import getPath from './getPath';
import {useSelector} from 'react-redux';
import location_marker from '../../utils/assets/images/location_marker.png';

const Map = ({navigation}) => {
  const [currentLocation, setCurrentLocation] = useState();
  const [initialLocation, setInitialLocation] = useState();
  const navigateTo = useSelector(state => state.description.navigateTo);
  const [randomNearby, setRandomNearby] = useState({
    latitude: 0.0,
    longitude: 0.0,
  });

  useEffect(() => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 60000,
    })
      .then(location => {
        // console.log('location:', location);
        setInitialLocation({
          latitude: location.latitude,
          longitude: location.longitude,
        });
      })
      .catch(error => {
        const {code, message} = error;
        console.warn(code, message);
      });
  }, []);

  useEffect(() => {
    if (randomNearby.latitude === 0.0 && initialLocation) {
      console.log(
        'randomNearby.latitude === 0.0',
        randomNearby.latitude === 0.0,
        'value:',
        randomNearby.latitude,
      );
      setRandomNearby(
        getRandomCoordinate(
          initialLocation.latitude,
          initialLocation.longitude,
          400,
        ),
      );
    }
  }, [initialLocation]);

  function getRandomCoordinate(latitude, longitude, radius) {
    // Convert radius from meters to degrees
    var radiusInDegrees = radius / 111000; // 1 degree = approx. 111000 meters

    // Generate a random angle between 0 and 360 degrees
    var randomAngle = Math.random() * 2 * Math.PI;

    // Calculate the new latitude and longitude
    var newLatitude = latitude + radiusInDegrees * Math.cos(randomAngle);
    var newLongitude = longitude + radiusInDegrees * Math.sin(randomAngle);

    // Return the new coordinates as an object
    return {
      latitude: newLatitude,
      longitude: newLongitude,
    };
  }

  useInterval(() => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 60000,
    })
      .then(location => {
        // console.log('location:', location);
        setCurrentLocation({
          latitude: location.latitude,
          longitude: location.longitude,
        });
      })
      .catch(error => {
        const {code, message} = error;
        console.warn(code, message);
      });
  }, 1000);
  return (
    <View style={StyleSheet.absoluteFill}>
      {initialLocation ? (
        <MapView
          style={StyleSheet.absoluteFill}
          initialRegion={{
            ...initialLocation,
            latitudeDelta: 0.0092,
            longitudeDelta: 0.0042,
          }}>
          <Marker
            coordinate={currentLocation}
            title={'User'}
            pinColor={COLORS.black}></Marker>
          <Marker
            // coordinate={navigateTo.coordinates}
            coordinate={randomNearby}
            title={navigateTo.name}
            image={{
              uri: Image.resolveAssetSource(location_marker).uri,
            }}></Marker>
        </MapView>
      ) : (
        <>
          <Text>Loading map...</Text>
        </>
      )}

      <SafeAreaView>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            height: 30,
            width: 30,
            backgroundColor: COLORS.white,
            marginLeft: 10,
            ...style.card,
            ...style.center,
          }}>
          <Icon name={'arrow-back'} size={16} color={COLORS.accent} />
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export default Map;
