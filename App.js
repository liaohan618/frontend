//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Post from './components/Post';

export default function App() {

  let data = [
    {
      author: 'EXO',
      title: 'Butterfly Effect'
    },
    {
      author: 'King Gnu',
      title: '白日'
    }
];

  return (
    <View style={styles.container}>
      <Post post={data[0]} />
      <Post post={data[1]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

