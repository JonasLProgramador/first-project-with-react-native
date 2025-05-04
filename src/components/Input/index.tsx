import { TextInput,TextInputProps } from "react-native"
import styles from './style'
const Input = ({...props}:TextInputProps) =>{
    return <TextInput style={styles.container} {...props}/>
}

export default Input