import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import axios from "axios";
import { KEY_MEANING_CLOUD } from '@env';

import { SCORE_TAG, Sentiment } from "../../component/Sentiment";

import { styles } from './styles';

export function Home() {
    const [score, setScore] = useState<SCORE_TAG | null>(null);
    const [menssage, setMenssage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    async function handleSendMessage(){
        try {
            setIsLoading(true);

            const formData = new FormData();
            formData.append('key', KEY_MEANING_CLOUD);
            formData.append('txt', menssage);
            formData.append('lang', 'pt');

            const response = await axios.post(
                'https://api.meaningcloud.com/sentiment-2.1',
                formData,
                { headers: { 'Content-Type': 'multipart/form-data' } }
            );

            setScore(response.data.score_tag);

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
                    multiline
                    onChangeText={setMenssage}
                />
                <TouchableOpacity 
                    style={styles.button} 
                    activeOpacity={0.7}
                    disabled={isLoading}
                    onPress={handleSendMessage}
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