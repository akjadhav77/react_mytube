import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';

const ChannelCard = ({ channelDetail, marginTop }) => {
  return (
    <Box
    sx={{
      boxShadow: 'none', 
      borderRadius: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: { xs: '300px', md: '240px' },
      height: '215px',
      margin: 'auto',
      marginTop,
    }}
    >
      <Link to={ `/channel/${channelDetail?.id?.channelId}` }>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff' }}>
          <CardMedia image={ channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture } 
            alt={ channelDetail?.snippet?.title }
            sx={{ borderRadius: '50%', height: '125px', width: '125px',  border: '1px solid #e3e3e3s', marginLeft: '42px' }}
          />
          <Typography variant='h6' marginLeft='10px'>
            { channelDetail?.snippet?.title }
            <CheckCircle sx={{ fontSize: '15px', color: 'gray', marginLeft: '5px' }}/>
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
          <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
          </Typography>
        )}
        </CardContent>
      </Link>
    </Box>
  )
}

export default ChannelCard