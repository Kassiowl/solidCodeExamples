class Lesson
{
    constructor(teacher, lessonName, topic)
    {
        this.lessonName = lessonName
        this.teacher = teacher;
        this.topic = topic
    };

    getLessonName()
    {
        return this.lessonName
    }
    getLessonTeacher()
    {
        return this.teacher
    }

    getLessonTopic()
    {
        return this.topic
    }

    uploadLessonVideo(name, type)
    {
        //logic
    }
    
}
