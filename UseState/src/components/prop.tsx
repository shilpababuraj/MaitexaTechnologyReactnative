// import React from 'react';
// import { View, Text } from 'react-native';


// function ParentComponent(props) {
//   return (
//     <View>
//       <Text>This is parent content.</Text>
//       {props.children}
//     </View>
//   );
// }

// // Using the component with children
// function App() {
//   return (
//     <ParentComponent>
//       <Text>This is child content in React Native.</Text>
//       <Text>Another child element.</Text>
//     </ParentComponent>
//   );
// }

// export default App;

import React from 'react';
import { View, Text, Button } from 'react-native';

interface MyComponentProps {
  title: string;
  description: string;
  onPress: () => void;
  style?: object;
  children?: React.ReactNode;
}

const Prop: React.FC<MyComponentProps> = ({
  title,
  description,
  onPress,
  style,
  children,
}) => {
  return (
    <View style={style}>
      <Text>{title}</Text>
      <Text>{description}</Text>
      {children}
      <Button title="Click Me" onPress={onPress} />
    </View>
  );
};

export default Prop;
