import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Scanner from '../../screens/Scanner/Scanner';
import Description from '../../screens/Description/Description';
import Locations from '../../screens/Locations/Locations';
import Map from '../../screens/Map/Map';

const Stack = createNativeStackNavigator();
const Paths = () => {
  const options = {
    headerShown: false,
  };
  return (
    <Stack.Navigator>
      <Stack.Screen name="Scanner" component={Scanner} options={options} />
      <Stack.Screen
        name="Description"
        component={Description}
        options={options}
      />
      <Stack.Screen name="Locations" component={Locations} options={options} />
      <Stack.Screen name="Map" component={Map} options={options} />
    </Stack.Navigator>
  );
};

export default Paths;
