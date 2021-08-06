import React, {useState} from 'react';
import { ReactComponent as Logo } from '../../assets/Photos-Search.svg'
import { HeaderContainer, LogoContainer } from './header.styles';
import { handleSearch } from '../../redux/search/search.actions';
import { connect } from 'react-redux';

type HeaderTypes = {
  handleSearch: any;
}

const Header: React.FC<HeaderTypes> = ({ handleSearch }) => {
  const [newSearch, setNewSearch] = useState('')


  const handleSubmit = (e: any) => {
    e.preventDefault();
    handleSearch(newSearch);
  };

  return(
    <HeaderContainer>
      <LogoContainer>
        <Logo style={{ maxHeight: '100%', maxWidth: '100%'}} />
      </LogoContainer>
      <form onSubmit={handleSubmit}>
        <input
          type='search'
          value={newSearch}
          onChange={e => setNewSearch(e.target.value)}
        />
        <button type='submit'>search</button>
      </form>
    </HeaderContainer>
  )
}

const mapDispatchToProps = (dispatch: any) => ({
  handleSearch: (value: string) => dispatch(handleSearch(value))
})

export default connect(null, mapDispatchToProps)(Header);