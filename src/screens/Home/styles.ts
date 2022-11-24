import { StyleSheet, StatusBar } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#131016',
    paddingRight: 24,
    paddingLeft: 24,
  },
  eventName: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  text: {
    color: '#cfcfcf',
    fontSize: 16,
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 36,
    marginBottom: 42,
  },
  input: {
    flex: 1,
    marginRight: 12,
    height: 56,
    backgroundColor: '#1f1e25',
    borderRadius: 5,
    color: '#ffffff',
    fontSize: 16,
    padding: 16,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#31cf67',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 24,
  },
  listEmpyt: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
  },
});
