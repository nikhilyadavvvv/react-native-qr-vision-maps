import i1 from './1.jpg';
import i2 from './2.jpg';
import i5 from './5.jpg';
import {Image} from 'react-native';
import locationsUUIDs from '../locationsUUIDs';

export default {
  uuid: locationsUUIDs.location_6,
  name: 'location_6',
  images: [
    Image.resolveAssetSource(i1).uri,
    Image.resolveAssetSource(i2).uri,
    Image.resolveAssetSource(i5).uri,
  ],
  heading: 'Heading about the location_6 in bold text',
  description: `Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas purus purus, scelerisque ut mattis sed, tristique non leo. Aenean dolor nulla, fringilla vel posuere sit amet, dictum vitae lorem. Duis lacus enim, laoreet quis accumsan eu, aliquam non risus. Donec eleifend scelerisque nisl vitae vulputate. Aliquam vehicula ligula eget justo varius ultrices. Vivamus sed mi orci. Etiam sed augue quis odio varius tristique dignissim eget ligula. Maecenas consequat dapibus congue. Suspendisse gravida, mauris a ullamcorper euismod, arcu urna tristique nisi, vitae auctor mi lectus ut ipsum. Fusce viverra velit eros, eu hendrerit erat elementum ac. Aenean vel ante quis magna aliquam tincidunt in ac purus. Nunc tempor pharetra felis, sit amet iaculis enim dapibus et. Nullam feugiat at arcu non hendrerit. Maecenas id condimentum neque, nec fringilla lectus.`,
  nearby: [
    {name: 'location_1', uuid: locationsUUIDs.location_1},
    {name: 'location_se7en', uuid: locationsUUIDs.location_7},
    {name: 'location_five', uuid: locationsUUIDs.location_5},
  ],
  coordinates: {
    latitude: 50.54713035289171,
    longitude: 9.702918760174422,
  },
};
