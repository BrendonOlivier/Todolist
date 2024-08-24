import { useState, useEffect } from 'react';
import { Container, TodoList, EmptyMessage } from './styles';

import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import SearchTodo from './components/Search';
import FilterTodo from './components/FilterTodo';
import { FcTodoList } from "react-icons/fc";

function Home() {
  const [todos, setTodos] = useState(() => {
    // Carrega as tarefas do localStorage, se existirem  
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });


  const [search, setSearch] = useState(''); // Criando o estado para fazer nossa busca e mandando para o component
  const [filter, setFilter] = useState('All'); // Estado dos filtros, começando já mostrando todas tarefas
  const [sort, setSort] = useState('Asc'); // Estado das ordens alfabéticas, começando com a Ascendente

  // Efeito para armazenar as tarefas no localStorage sempre que mudarem  
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Listando a nossa nova tarefa
  const addTodo = (text, category) => {
    const newTodos = [...todos, {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isCompleted: false,
    },
    ];

    setTodos(newTodos) // Colocando a nova tarefa junto com as que já existem
  };

  // Completar tarefa
  const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo);

    setTodos(newTodos)
  };

  // Removendo nossas tarefas
  const removeTodo = (id) => {
    const allTodos = [...todos]
    const filteredTodos = allTodos.filter(todo => todo.id !== id ? todo : null);

    setTodos(filteredTodos);
  };


  return (
    <Container>

      <h1><FcTodoList className='icon' /> Lista de Tarefas</h1>

      <SearchTodo search={search} setSearch={setSearch} />
      <FilterTodo filter={filter} setFilter={setFilter} setSort={setSort} />

      <TodoList>
        {todos.filter((todo) =>
          filter === 'All'
            ? true
            : filter === 'Completed'
              ? todo.isCompleted
              : !todo.isCompleted)
          .filter((todo) => todo.text.toLowerCase().includes(search.toLocaleLowerCase()))
          .sort((a, b) => sort === "Asc" ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text))
          .map((todo) => (
            <Todo todo={todo} key={todo.id} removeTodo={removeTodo} completeTodo={completeTodo} />
          ))}

        {todos.length === 0 && (
          <EmptyMessage>Nenhuma tarefa encontrada. Adicione uma nova tarefa!</EmptyMessage>
        )}
      </TodoList>

      <TodoForm addTodo={addTodo} />
    </Container>
  )
}

export default Home
