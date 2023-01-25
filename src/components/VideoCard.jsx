import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoThumbnailUrl, demoVideoUrl, demoChannelUrl } from '../utils/constants';

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
    // console.log(video);
  return (
    <Card className="small-device" sx={{ width: { xs: '100%', sm: '358px', md: '320px' }, boxShadow: 'none', borderRadius: 0, width: '215px'}} > {/* css for card properties */}
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl} >
            <CardMedia image={snippet?.thumbnails?.high?.url}
            alt={snippet?.title}
            sx={{ width: {
                xs: '100%', sm: '358px', md: '320px'
            }, height: 180}}
            />
        </Link>
        <CardContent sx={{ backgroundColor: '#1e1e1e', height: '45px'}} >
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl} >
                <Typography variant='subtitle2' color='#FFF' fontSize='12px' marginTop='-8px'> {/*css for title*/}
                    {snippet?.title.slice(0, 50)}...
                </Typography>
            </Link>
            <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} >
                <Typography variant='subtitle2' color='gray'>
                    {snippet?.channelTitle}
                    <CheckCircle sx={{ fontSize: '15px', color: 'gray', ml: '5px' ,mt: '2px'}}/>
                </Typography>
            </Link>
        </CardContent>
    </Card>
  )
}

export default VideoCard