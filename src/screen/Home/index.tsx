import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { styles } from './styles';

export function Home() {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Mensagem</Text>
            <View style={styles.form}>
                <TextInput 
                    style={styles.input}
                />
                <TouchableOpacity style={styles.button}>
                    <FontAwesome name="send" size={24} />
                </TouchableOpacity>
            </View>
        </View>
    );
}