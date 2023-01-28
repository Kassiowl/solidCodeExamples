class Lesson
{
    constructor(teacher, name, topic)
    {
        this.name = name
        this.teacher = teacher;
        this.topic = topic
    };

    getLessonName()
    {
        return this.name
    }
    getLessonTeacher()
    {
        return this.teacher
    }

    getLessonTopic()
    {
        return this.topic
    }


}

class Video
{
    constructor(name, type)
    {
        this.name = name
        this.type = name
    }
    uploadVideo()
    {
        //logic
    }
}

