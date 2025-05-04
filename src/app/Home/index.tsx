import { StatusBar } from 'expo-status-bar';
import { Image, Text, View } from 'react-native';
import styles from './style';
import Button from '@/components/Button';

export default function App() {
  return (
    <View style={styles.container}>
     <Image style={styles.logo} source={require('@/assets/logo.png')}/>
      <Button title='adicionar'/>
    </View>
  );
}

