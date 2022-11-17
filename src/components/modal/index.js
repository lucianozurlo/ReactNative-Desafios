import React from "react";
import { Modal, View, Text, Button } from "react-native"
import { styles } from "./styles";

const ModalItem = ({ modalVisible, selectedTask, onHandleCancel, onHandleDelete }) => {
    return (
        <Modal visible={modalVisible} animationType='slide'>
            <View style={styles.modalContainer}>
                <Text style={styles.modalTitle}>Task Detail</Text>
            </View>
            <View style={styles.modalDetailContainer}>
                <Text style={styles.modalDetailText}>Are you sure to delete this item?</Text>
                <Text style={styles.selectedTask}>{selectedTask?.value}</Text>
                <View style={styles.modalButtonContainer}>
                    <Button
                        title='Cancel'
                        color='#333'
                        onPress={onHandleCancel}
                    />
                    <Button
                        title='Delete'
                        color='#333'
                        onPress={onHandleDelete}
                    />
                </View>
            </View>
        </Modal>
    )
}

export default ModalItem