import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Paper, IconButton } from '@mui/material'
import { Search } from "@mui/icons-material"

const SearchBar = () => {
  return (
    <Paper
        component="form"
        onSubmit={()=> {}}
        sx={{
            borderRadius: 3,
            border: '1px solid #e3e3e3',
            pl: 2,
            boxShadow: 'none',
            mr: { sm: 5 }
        }}
    >
        <input className="search-bar" placeholder="Search..." value="" onChange={()=> {}}/>
        <IconButton>
            <Search type="submit" sx={{ p: '1px', color: 'red' }}/>
        </IconButton>
        </Paper>
  )
}

export default SearchBar