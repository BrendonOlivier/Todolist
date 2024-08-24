import { Container } from './style';

const Search = ({ search, setSearch }) => {

    return (
        <Container>
            <h2>Pesquisar:</h2>
            <input type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Digite para pesquisar..."
            />
        </Container>
    )
}

export default Search
