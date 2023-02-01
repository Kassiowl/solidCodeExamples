class VideoSuperClass
{
    constructor(size)
    {
        this.size = size
    }

    isValid()
    {
        throw new Error("Invalid video type")
    }

    maxSize()
    {
        const MaxVideoSize = 10
        if(this.size > MaxVideoSize)
        {
            throw new Error("Video Max Size is 10gb")
        }
    }

    videoUpload()
    {
        this.isValid()
        this.maxSize()
        //Upload Video
        console.log("Video uploaded successfully")
    }
}


class VideoMp4 extends VideoSuperClass
{
    isValid(){  return 1    }
}


class VideoMkv extends VideoSuperClass
{
    isValid(){  return 1    }
    
}


class VideoAvi extends VideoSuperClass
{
    isValid(){  return 1    }
    
}


