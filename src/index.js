import { useState } from 'react'
import { Text, View, Button, FlatList, Modal } from 'react-native'
import { styles } from './styles'
import { AddItem, TaskItem, ModalItem, ListTask } from './components/index'

export default function App() {

  const [task, setTask] = useState('')
  const [taskList, setTaskList] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  const [selectedTask, setSelectedTask] = useState(null)

  const onHandleTask = () => {
    setTaskList(prevTaskList => [{ id: Math.random().toString(), value: task }, ...prevTaskList])
    setTask('')
  }

  const onHandleCancel = () => {
    setModalVisible(!modalVisible)
  }

  const onHandleDelete = () => {
    setTaskList(prevTaskList => prevTaskList.filter(item => item.id !== selectedTask.id))
    setModalVisible(!modalVisible)
  }

  const onHandleSelected = item => {
    setSelectedTask(item)
    setModalVisible(true)
  }

  const renderItem = ({ item }) => (
    <TaskItem item={item} onHandleSelected={onHandleSelected} />
  )

  const onHandleChange = text => { setTask(text) }

  return (
    <View style={styles.container}>
      <AddItem task={task} onHandleTask={onHandleTask} onHandleChange={onHandleChange} />
      <ListTask taskList={taskList} renderItem={renderItem} />
      <ModalItem modalVisible={modalVisible} selectedTask={selectedTask} onHandleCancel={onHandleCancel} onHandleDelete={onHandleDelete} />
    </View >
  );
}


