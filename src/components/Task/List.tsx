import { useState } from "react"

type TaskListProps = {
    initialValues: string[]
}

const TaskList = ({ initialValues }: TaskListProps ) => {

    const [ list , setList ] = useState(initialValues)
    const [ newItem , setNewItem ] = useState('')
  
  function addToList() {
    setList( state => (!state.includes(newItem)) ? ([ ...state, newItem ]) : state)
    setNewItem('')
  }

  function removeFromList(value: string) {
    setList( state => state.filter( item => item !== value ) )
  }

  return (
    <>
      <input type='text' 
        value={newItem}
        placeholder='Novo Item'
        onChange={ (event) => setNewItem(event.target.value)} />

      <button onClick={addToList}> Adicionar </button>
      
      <ul>
        { list.map( (item, idx) => {
            return <li key={idx}> 
              { item } 
              <button onClick={() => removeFromList(item)}>Remover</button>
            </li>
          } )}
      </ul>
    </>
  )
}

export default TaskList