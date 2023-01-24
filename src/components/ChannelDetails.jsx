import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from './';
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetails = () => {
  
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])

  console.log(videos)
  const { id } = useParams();

  useEffect(()=> {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then((data)=> setChannelDetail(data?.items[0]))

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data)=> setVideos(data?.items))
  },[id])

  
  // this component will re-render as soon as the id changes

  return (
    <Box minHeight='95vh'>
      <Box>
        <div
        style={{ background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(233,176,17,1) 0%, rgba(0,245,255,1) 98%)',
        zIndex: 10,
        height: '300px',
        }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop='-70px'/>
      </Box>
      <Box display='flex' p='2'>
        <Box sx={{ mr: { sm: '110px' }}}/>
          <Videos videos={videos}/>
      </Box>
    </Box>
  )
}

export default ChannelDetails