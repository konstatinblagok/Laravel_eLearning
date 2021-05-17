<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Course extends Model
{

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id', 'id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function ownLang()
    {
        return $this->belongsTo(Language::class, 'own_id', 'id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function learnerLang()
    {
        return $this->belongsTo(Language::class, 'to_learn_id', 'id');
    }

    public function lessons(){
        return $this->hasMany(Lesson::class, 'course_id', 'id');
    }
}
