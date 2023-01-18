import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants';

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
    // console.log(video);
  return (
    <Card sx={{ width: { md: '320px', xs: '100%' }, boxShadow: 'none', borderRadius: 0, width: '250px'}} > {/* css for card properties */}
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl} >
            <CardMedia image={snippet?.thumbnails?.high?.url}
            alt={snippet?.title}
            sx={{ width: 270, height: 150 }}
            />
        </Link>
        <CardContent sx={{ backgroundColor: '#1e1e1e', height: '55px'}} >
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl} >
                <Typography variant='subtitle1' color='#FFF' fontSize='15px' marginTop='-5px'> {/*css for title*/}
                    {snippet?.title.slice(0, 50) || demoVideoTitle.slice(0, 50)}
                </Typography>
            </Link>
            <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} >
                <Typography variant='subtitle2' color='gray'>
                    {snippet?.channelTitle || demoChannelTitle}
                    <CheckCircle sx={{ fontSize: '15px', color: 'gray', ml: '5px' ,mt: '2px'}}/>
                </Typography>
            </Link>
        </CardContent>
    </Card>
  )
}

export default VideoCard