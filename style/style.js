import { StyleSheet } from 'react-360';

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  titleBox: {
    width: "100%",
    padding: 20,
    backgroundColor: 'rgba(102,195,95,0.4)',
   
  },
  enterButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(47,0,192,0.8)',
    width: "100%",
    height: 300
  },
  enterButtonText: {
    padding: 20,
    fontSize: 70,
    textAlign: 'center',
    color: '#000000'
  },
  portalButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(47,0,192,0.5)',
    width: 300,
    height: 300
  },
  portalButtonText: {
    padding: 10,
    fontSize: 30,
    textAlign: 'center',
    color: '#FFFFFF'
  },
  title: {
    fontSize: 60,
    textAlign: 'center',
    color: '#201933'

  },
  displayPanel:{
    width: "100%",
    height: "100%",
  },
  infoBox:{
    backgroundColor: '#FFFFFF',
  },
  infoText: {
    padding: 20,
    
    fontSize: 30,
    textAlign: 'left',
    justifyContent: 'flex-start',
    color: '#201933'
  }
});

export default styles;