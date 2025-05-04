import { StatusBar } from 'expo-status-bar';
import { Image, Text, View } from 'react-native';
import styles from './style';
import Button from '@/components/Button';
import Input from '@/components/Input';

export default function App() {
  return (
    <View style={styles.container}>
     <Image style={styles.logo} source={require('@/assets/logo.png')}/>
     <Input placeholder='O que você deseja comprar hoje?'/>
      <Button title='adicionar'/>
    </View>
  );
}

