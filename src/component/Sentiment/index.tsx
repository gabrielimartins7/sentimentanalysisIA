import { Text, View } from 'react-native';

import { styles } from './styles';

export function Sentiment() {
  return (
    <View style={styles.container}>
        <Text style={styles.emoji}>😆</Text>
        <Text style={styles.sentiment}>Positivo</Text>
    </View>
  );
}