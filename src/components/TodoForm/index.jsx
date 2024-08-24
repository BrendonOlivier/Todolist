import { useState } from "react";
import {Container} from './style';
import { toast } from 'react-toastify';

const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");

    // Função para criar a tarefa nova
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!value || !category) return toast.error('É necessario nome e categoria da tarefa');

        // Adicionando tarefa
        addTodo(value, category);

        // Limpando os campos
        setValue("")
        setCategory("")
    };

    return (
        <Container>
            <h2>Criar Tarefa</h2>

            <form onSubmit={handleSubmit}>
                <input type="text"
                    placeholder="Digite o título"
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                />
                <select onChange={(e) => setCategory(e.target.value)} value={category}>
                    <option value="">Selecione uma categoria</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Pessoal">Pessoal</option>
                    <option value="Estudos">Estudos</option>
                </select>
                <button type="submit" role="button">Criar tarefa</button>
            </form>
        </Container>
    )
}

export default TodoForm
