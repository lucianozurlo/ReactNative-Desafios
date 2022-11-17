import React from "react";
import { View, Text, FlatList } from "react-native"
import { styles } from "./styles";

const ListTask = ({ taskList, renderItem }) => {
    return (
        <View>
            <View style={styles.listContainer}>
                <Text style={styles.listTitle}>Todo list</Text>
            </View>
            <FlatList
                style={styles.listContainer}
                data={taskList}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    )
}

export default ListTask