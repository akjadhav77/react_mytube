import React, { useState, useEffect } from "react";
import { Box, Stack, Typography } from '@mui/material';
import { Sidebar, Videos } from "../components";
import { fetchFromAPI } from '../utils/fetchFromAPI';

const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);

  useEffect(()=> {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data)=> setVideos(data.items))
  }, [selectedCategory]); // it will recall this function whenever we change a category

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row", backgroundColor: '#5c5c5c' } }}>
      <Box sx={{ height: { sx: 'auto', md: '92vh' }, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 3 }}}>
        <Sidebar 
        selectedCategory = { selectedCategory }
        setSelectedCategory = { setSelectedCategory }
        />
        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: 'whitesmoke' }}>
          CopyRight 2022
        </Typography>

      </Box>

      <Box p={1} sx={{ overflowY: 'auto', height: '90vh', flex: '2' }}>
        <Typography variant="h4" mb={2} sx={{ color: 'white' }}> 
          {selectedCategory} <span style={{ color: '#FC1503' }}>videos</span>
        </Typography>

        <Videos videos={videos}/>

      </Box>

    </Stack>
  )
}

export default Feed