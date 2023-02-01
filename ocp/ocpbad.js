

class Video
{
    videoUpload(type, video)
    {
        switch(type)
        {
            case 'MP4':
                //Upload Mp4 
                return 1
                break;
            case 'MKV':
                //Upload MKV 
                return 1
                break;
            case 'AVI':
                //Upload Avi
                return 1
                break;
            default:
                throw new Error('Unsupported Type!');
        }
      
    }
    
}

