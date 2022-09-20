import { useState } from "react";
import {
    Button,
    Image,
    Modal,
    StyleSheet,
    TextInput,
    View,
} from "react-native";

function GoalInput(props) {
    const [enteredGoalText, setenteredGoalText] = useState("");

    function goalInputHandler(typeText) {
        setenteredGoalText(typeText);
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setenteredGoalText("");
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image
                    source={require("../assets/img/task.png")}
                    style={styles.imageStyling}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Your course goal!"
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button
                            title="Cancel"
                            onPress={props.onCancel}
                            color="#f31282"
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title="Add Goal"
                            onPress={addGoalHandler}
                            color="#5e0acc"
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        backgroundColor: "#311b6b",
    },
    imageStyling: {
        width: 100,
        height: 100,
        margin: 20,
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#e4d0ff",
        backgroundColor: "#e4d0ff",
        color: "#120438",
        borderRadius: 10,
        width: "100%",
        padding: 10,
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: "row",
    },
    button: {
        width: 100,
        marginHorizontal: 8,
    },
});
