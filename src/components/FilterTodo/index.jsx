import { Container, FilterOptions } from './style';

const Filter = ({ filter, setFilter, setSort }) => {

    return (
        <Container>
            <h2>Filtrar</h2>
            <FilterOptions>
                <div>
                    <h3>Status:</h3>
                    <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                        <option value="All">Todas</option>
                        <option value="Completed">Completas</option>
                        <option value="Incompleted">Incompletas</option>
                    </select>
                </div>

                <div>
                    <h3>Ordem alfabética:</h3>
                    <button onClick={() => setSort("Asc")}>Asc</button>
                    <button onClick={() => setSort("Desc")}>Desc</button>
                </div>
            </FilterOptions>
        </Container>
    )
}

export default Filter
