import {StyleSheet} from 'react-native';
import {COLORS} from './Colors';

export const style = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    padding: 10,
  },
  marginTop: {
    marginTop: 10,
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    height: 50,
    width: '100%',
    margin: 5,
    borderColor: COLORS.accent_muted,
  },
  card: {
    backgroundColor: 'white',
    shadowRadius: 10,
    shadowOpacity: 0.1,
    shadowColor: 'black',
    borderRadius: 10,
    elevation: 10,
  },
  cardInnerContainer: {
    margin: 0,
    width: '100%',
  },
  fab: {
    height: 56,
    width: 56,
    bottom: 0,
    right: 0,
    marginRight: 24,
    marginBottom: 24,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: 'white',
    shadowRadius: 10,
    shadowOpacity: 0.1,
    shadowColor: 'black',
    position: 'absolute',
    borderRadius: 100,
    elevation: 10,
  },
  hr: {
    width: '100%',
    borderBottomColor: COLORS.accent_muted,
    borderBottomWidth: 1,
    marginTop: 10,
    marginBottom: 10,
  },
  user_icon: {
    height: 25,
    width: 25,
    color: COLORS.accent,
    borderWidth: 1,
    borderColor: COLORS.accent,
    borderRadius: 40,
    alignSelf: 'flex-end',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  button: {
    height: 50,
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    display:'flex',
    flexDirection:'row'
  },
  appbar: {
    minHeight: 80,
    maxHeight: 80,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20,
    flex:1,
    display: 'flex',
    flexDirection:'row-reverse',
  },
  heading: {
    fontSize: 36,
    fontWeight: 'bold',
    color:COLORS.heading
  },
  sub_heading: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
