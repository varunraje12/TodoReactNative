import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

const Todo = () => {
  const [tasks, settasks] = useState([])
  const [input, setInput] = useState()

  const AddInput = () => {
    if (input.length > 0) {
      const DummyTask = tasks
      DummyTask.push(input)
      settasks(DummyTask)
      setInput('')
    }
    console.log(tasks)
  }

  const DelInput = (index) => {
    let newtasks = [...tasks]
    newtasks.splice(index, 1)
    settasks(newtasks);
  }

  return (
    <View>
      <View>
        <Text style={styles.heading}>Add Your Task</Text>
        <TextInput value={input} style={styles.input} placeholder="Add todo"
          onChangeText={setInput}
        />
        <TouchableOpacity onPress={AddInput}>
          <Text style={styles.button}>Add</Text>
        </TouchableOpacity>
      </View>{
        (tasks.length === 0) ?
          <Text>NO TASKS</Text> : <Text>{tasks.map((element, index) => {
            return (
              <View key={index} style={styles.item}>
                <Text>{element}</Text>
                <TouchableOpacity onPress={() => DelInput()}>
                  <Text style={styles.button}>Delete</Text>
                </TouchableOpacity>
              </View>
            )
          }
          )}</Text>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black'
  },
  button: {
    backgroundColor: 'green',
  },
  item: {
    padding: 10,
    margin: 5,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
})


export default Todo