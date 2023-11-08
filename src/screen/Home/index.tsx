import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import axios from "axios";

import { SCORE_TAG, Sentiment } from "../../component/Sentiment";

import { styles } from './styles';

export function Home() {
    const [score, setScore] = useState<SCORE_TAG | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    async function handleSendMessage(){
        try {
            setIsLoading(true);
        } catch (error) {
            
        }
        finally {
            setIsLoading(false);
        }
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Mensagem</Text>
            <View style={styles.form}>
                <TextInput 
                    style={styles.input}
                    placeholder="Digite a sua mensagem..."
                />
                <TouchableOpacity 
                    style={styles.button} 
                    activeOpacity={0.7}
                    disabled={isLoading}
                >
                    {
                        isLoading 
                        ? <ActivityIndicator color="#fff" /> 
                        : <FontAwesome name="send" size={24} color="#fff" />
                    }
                </TouchableOpacity>
            </View>

            {score && <Sentiment score={score} />}
        </View>
    );
}