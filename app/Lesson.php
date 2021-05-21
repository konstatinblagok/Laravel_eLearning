<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Lesson extends Model
{
    protected $fillable = [
        'title'
    ];

    protected $appends = ['hasLessonPart'];
    /**
     * Get lesson_parts for the lesson.
     */
    public function lesson_parts()
    {
        return $this->hasMany(LessonPart::class);
    }

    public function getHasLessonPartAttribute()
    {

        return $this->lesson_parts()->get();

    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function course()
    {
        return $this->belongsTo(Course::class, 'course_id', 'id');
    }


}
