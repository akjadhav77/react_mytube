import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';

import { logo } from '../utils/constants'
import SearchBar from './SearchBar';

const Navbar = () => (
    <Stack 
    direction="row" 
    alignItems="center" 
    p={2} 
    sx={{ position: 'sticky', background: '#121212', top: 0, justifyContent: 'space-between' }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="logo" height={45} /><span style={{color:'white', fontSize:'35px', marginLeft: '10px', letterSpacing: '-1px'}}>MyTube</span>
      </Link>
      <SearchBar/>
    </Stack>
  )


export default Navbar