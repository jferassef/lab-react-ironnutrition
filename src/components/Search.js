import { Divider, Input } from 'antd';

const Search = ({ searchedTerm, setSearchedTerm }) => {
  return (
    <form>
      <Divider>Search Food</Divider>

      <label>Name</label>
      <Input
        value={searchedTerm}
        type="text"
        onChange={(e) => setSearchedTerm(e.target.value)}
      />

      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
