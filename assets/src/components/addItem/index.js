import React from "react";
import { View, TextInput, Button } from "react-native"
import { styles } from "./styles";

const AddItem = ({ task, onHandleTask, onHandleChange }) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                value={task}
                placeholder="Enter task"
                onChangeText={onHandleChange}
            />
            <Button
                title='Add'
                color={'#6a348f'}
                onPress={onHandleTask}
                disabled={!task}
            />
        </View>
    )
}

export default AddItem