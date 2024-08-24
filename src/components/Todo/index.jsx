/* eslint-disable react/prop-types */
import {Container, Content, Text, Category, ContainerButtons } from './style'

const Todo = ({ todo, removeTodo, completeTodo }) => {

    return (
      <Container style={{textDecoration: todo.isCompleted ? 'line-through' : ''}}>
        <Content>
          <Text>{todo.text}</Text>
          <Category>({todo.category})</Category>
        </Content>
  
        <ContainerButtons>
          <button className="complete" onClick={() => completeTodo(todo.id)}>Completar</button>
          <button className="remove" onClick={() => removeTodo(todo.id)}>x</button>
        </ContainerButtons>
      </Container>
    )
  }
  
  export default Todo
  