import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Search } from '@mui/icons-material';

const SearchBar = () => {
  return (
    <Paper component='form' onSubmit={() => { }} sx={{ borderRadius: 20, backgroundColor: '1px solid #e3e3e3', pl: 2, boxShadow: 'none', mr: { sm: 5 }, }}>

      <input className='search-bar' placeholder='Search...' value='' onChange={() => { }} />

      <IconButton type='submit' sx={{ color: 'red', p: '10px', }}>
        <SearchIcon />
      </IconButton>

    </Paper>
  )
}

export default SearchBar