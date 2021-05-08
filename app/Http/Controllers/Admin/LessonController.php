<?php

namespace App\Http\Controllers\Admin;

use App\Category;
use App\Course;
use App\Http\Controllers\Controller;
use App\Language;
use App\Lesson;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class LessonController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $ownLanguage = Language::where('key', request()->get('speakLang'))->first();

        $learnLanguage = Language::where('key', request()->get('learnLang'))->first();
        $category = Category::where('name', request()->get('category'))->first();

        $arrLessons = [];
        $arrCourses = Course::with('lessons')
            ->where('category_id', $category->id)
            ->where('own_id', $ownLanguage->id)
            ->where('to_learn_id', $learnLanguage->id)
            ->first();

        if($arrCourses && $arrCourses->count() > 0 ){
            $arrLessons = $arrCourses->lessons;
        }

        return response()->json(['lessons' => $arrLessons ], 201);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'name'=>'required',
            'title'=>'required',
            'sub_title'=>'required',
            'audio'=>'required|file',
            'id'=> 'required|numeric'
        ]);
        $extension = $request['audio']->extension();
        if($validate->fails()){
            return response()->json($validate->errors(), 422);
        } elseif ($extension !== 'mp3' && $extension !== 'wav' ){
            return response()->json('Audio must be mp3, wav file.', 422);
        }

        $lesson = new Lesson;
        $lesson->title = $request['name'];
        $lesson->course_id = $request['id'];
        $lesson->save();

        $payload = $request;
        $payload['id'] = $lesson->id;
        $lesson_part = new LessonPartController();
        $part = $lesson_part->store($payload);
        if ($part->exception)
            return response()->json(['error'=>'error'],500);
        else
            return response()->json(['lesson' => [
                'id'=>$lesson->id,
                'title' =>$lesson->title,
            ]], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Lesson $lesson
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(Lesson $lesson)
    {
        $parts = $lesson->lesson_parts()->get();
        return response()->json([
            'lesson_parts'=>$parts
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Lesson $lesson
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, Lesson $lesson)
    {
        $validate = Validator::make($request->all(), [
            'name'=>'required'
        ]);
        if ($validate->fails()){
            return response()->json($validate->errors(), 422);
        }
        $lesson->title = $request['name'];
        $lesson->save();
        return response()->json([
            'message'=>'success'
        ],204);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Lesson $lesson
     * @return \Illuminate\Http\JsonResponse
     *
     */
    public function destroy(Lesson $lesson)
    {
        $lesson->delete();
        return response()->json([
            'message'=>'success'
        ], 200);
    }
}
