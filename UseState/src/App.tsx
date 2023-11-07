import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
// import UseState from './components/useState';
// import CountUsingUsestate from './components/countUsingUsestate';
// import BgColorChange from './components/BgColorChange';
// import Prop from './components/prop';
// import Dice from './components/Dice'
import FlatList from './components/FlatLists'

function App(): JSX.Element {
  return (
    <SafeAreaView>
      {/* <ScrollView> */}

      {/* <Prop/> */}
        {/* <UseState/> */}
        {/* <CountUsingUsestate /> */}
        {/* <BgColorChange/> */}
{/* <Dice/> */}
<FlatList/>
        
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;


// import React from 'react';
// import { View, Text, Button, StyleSheet, Alert } from 'react-native';

// interface CardProps {
//   children: React.ReactNode;
// }

// const Card: React.FC<CardProps> = ({ children }) => {
//   return (
//     <View style={styles.card}>
//       {children}
//     </View>
//   );
// };

// const showAlert = () => {
//   // Define the alert
//   Alert.alert(
//     'Alert Title',
//     'This is an example alert message.',
//     [
//       {
//         text: 'OK', // Button text
//         onPress: () => console.log('OK Pressed'), // Action to perform when the button is pressed
//       },
//     ],
//     { cancelable: false } // Prevent dismissal of the alert by tapping outside it
//   );
// };

// const App: React.FC = () => {
//   return (
//     <View style={styles.container}>
//       <Card>
//         <Text style={styles.title}>Card Title</Text>
//         <Text>Card Content goes here.</Text>
//       </Card>
//       <Card>
//         <Text style={styles.title}>Another Card</Text>
//         <Button title="Click Me" onPress={ showAlert} />
//       </Card>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   card: {
//     borderWidth: 1,
//     borderColor: 'gray',
//     borderRadius: 8,
//     padding: 16,
//     margin: 16,
//   },
// });

// export default App;