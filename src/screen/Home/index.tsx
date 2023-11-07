import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { Sentiment } from "../../component/Sentiment";

import { styles } from './styles';

export function Home() {
    const [score, setScore] = useState(null);

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Mensagem</Text>
            <View style={styles.form}>
                <TextInput 
                    style={styles.input}
                    placeholder="Digite a sua mensagem..."
                />
                <TouchableOpacity style={styles.button} activeOpacity={0.7}>
                    <FontAwesome name="send" size={24} color="#fff" />
                </TouchableOpacity>
            </View>

            {score && <Sentiment />}
        </View>
    );
}