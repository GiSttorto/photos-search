import React, {useState} from 'react';
import { ReactComponent as Logo } from '../../assets/Photos-Search.svg'
import { HeaderContainer, LogoContainer, FormContainer, SearchButton } from './header.styles';
import { handleSearch } from '../../redux/search/search.actions';
import { useHistory } from "react-router-dom";
import { TextField } from '@material-ui/core';
import { connect } from 'react-redux';


type HeaderTypes = {
  handleSearch: any;
}

const Header: React.FC<HeaderTypes> = ({ handleSearch }) => {
  const [newSearch, setNewSearch] = useState('')
  const history = useHistory();


  const handleSubmit = async (e: any) => {
    e.preventDefault();
    history.push(`/photos/${newSearch === '' ? '/' : newSearch}`)
    await handleSearch(newSearch);
  };

  return(
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo style={{ maxHeight: '100%', maxWidth: '100%'}} />
      </LogoContainer>
      <FormContainer onSubmit={handleSubmit}>
        <TextField
          style={{ width: '40%', marginRight: '12px'}}
          placeholder='Search for a photography:'
          variant="outlined"
          value={newSearch}
          onChange={e => setNewSearch(e.target.value)}
          inputProps={{ style: {padding: 12, fontFamily: 'Zilla Slab', fontSize: 18 }}}
        />
        <SearchButton type='submit'>SEARCH</SearchButton>
      </FormContainer>
      {/* <div>
        <select>
          <option value="any">Any orientation</option>
          <option value="landscape">Landscape</option>
          <option value="portrait">Portrait</option>
          <option value="square">Square</option>
        </select>
        <select>
          <option value="grapefruit">Any color</option>
          <option value="lime">Black and white</option>
          <option value="coconut">Tones:</option>
        </select>
        <select>
          <option value="grapefruit">Sort by Relevance</option>
          <option value="lime">Newest</option>
        </select>
      </div> */}
    </HeaderContainer>
  )
}

const mapDispatchToProps = (dispatch: any) => ({
  handleSearch: (value: string) => dispatch(handleSearch(value))
})

export default connect(null, mapDispatchToProps)(Header);