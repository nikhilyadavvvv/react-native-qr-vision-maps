import i1 from './1.jpg';
import i2 from './2.jpg';
import i3 from './3.jpg';
import i4 from './4.jpg';
import i5 from './5.jpg';
import {Image} from 'react-native';
import locationsUUIDs from '../locationsUUIDs';

export default {
  uuid: locationsUUIDs.location_5,
  name: 'location_5',
  images: [
    Image.resolveAssetSource(i1).uri,
    Image.resolveAssetSource(i2).uri,
    Image.resolveAssetSource(i3).uri,
    Image.resolveAssetSource(i4).uri,
    Image.resolveAssetSource(i5).uri,
  ],
  heading: 'Heading about the location_five in bold text',
  description: `Quisque lorem nisl, maximus id lorem sed, aliquet pulvinar libero. Maecenas turpis nisl, dapibus ac massa quis, tincidunt blandit erat. Aenean id purus ante. In semper, purus volutpat pretium tempus, nunc lorem lacinia nisl, sed pellentesque libero turpis ac neque. Mauris eget purus faucibus, elementum metus a, commodo odio. Fusce dui justo, iaculis in volutpat non, dictum vitae massa. In finibus odio ac sem porta, eu tincidunt mi imperdiet. Vivamus sit amet augue consequat arcu eleifend euismod ut vitae tellus. Curabitur ullamcorper diam et lorem tincidunt bibendum. Cras vehicula augue vel mattis venenatis. Etiam eros purus, finibus nec maximus non, dignissim aliquam turpis. Pellentesque suscipit elit ut auctor tempus`,
  nearby: [
    {name: 'location_one', uuid: locationsUUIDs.location_1},
    {name: 'location_six', uuid: locationsUUIDs.location_6},
    {name: 'location_sieben', uuid: locationsUUIDs.location_7},
  ],
  coordinates: {
    latitude: 50.54713035289171,
    longitude: 9.702918760174422,
  },
};
