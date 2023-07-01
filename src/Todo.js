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
              <View key={index}>
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
    backgroundColor: 'gray',
    padding: 10,
    fontSize: 20,
  },
  heading: {
    fontSize: 40,
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: 'green',
  },
  list: {
    // flexWrap: 'wrap'
    marginTop: 20,



  }
})


export default Todo