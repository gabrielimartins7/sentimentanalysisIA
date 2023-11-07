import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 24
    },
    title: {
        fontSize: 22,
        fontWeight: '900',
        marginBottom: 22,
    },
    form: {
        width: '100%',
        padding: 16,
        borderWidth: 2,
        borderRadius: 8,
        borderColor: '#999',
    },
    input: {
        width: '100%',
        height: 150,
        fontSize: 16,
        textAlignVertical: 'top'
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end',
        backgroundColor: '#883DF2',
    }
});