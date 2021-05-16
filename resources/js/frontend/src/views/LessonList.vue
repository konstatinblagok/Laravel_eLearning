<template>
    <div class="shop--area shop-fullwidth section-padding-120">
        <div class="container">
            <h2 class="wow fadeInUp mt-3" data-wow-delay="200ms" data-wow-duration="1000ms">Free {{ learnLanguage }} lessons</h2>
            <p class="mb-3 wow fadeInUp mt-5" data-wow-delay="300ms" data-wow-duration="1000ms">
                Teach yourself {{ learnLanguage }}. Learn with {{ lessonList.length }} free lessons. There is no risk and no contract. Learn to speak {{learnLanguage}}. Totally free!
            </p>
            <div class="row align-items-center justify-content-center wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1000ms">
                <div class="row g-3" v-if="lessonList.length > 0">
                    <!-- Single Feature Area-->
                    <div v-for="lesson, key in lessonList" v-bind:key="lesson.id" class="col-12 col-sm-6 col-lg-3">

                        <div @click="lessonpart(lesson.id)" class="card feature-card">
                            <div class="card-body d-flex align-items-center row">
                                <div class="fea-text col-10 col-sm-9 col-lg-9">
                                    <h6>Lesson {{key + 1}}</h6><span>{{lesson.title}}</span>
                                </div>

                                <div class=" col-2 col-sm-3 col-lg-3">
                                    <i class="lni-arrow-right-circle lesson-arrow"></i>
                                </div>
                            </div>
                        </div>

                    </div>
                    <the-contact-modal />
                </div>
                <div v-else>
                    No Lessons Found
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import TheContactModal from '../components/TheContactModal'
    import {mapState} from 'vuex';
  export default {
      name: 'LessonList',
      components: {
          TheContactModal
      },
      data () {
          return {
              lessonList:[],
              learnLanguage:''
          }
      },
      computed: {
          ...mapState([
              'speakLang', 'learnLang', 'category'
          ]),

      },
      created: function () {
         this.loadLessons();
      },
      methods:{
          lessonpart(lessonId){
              let speakLang = this.$route.params.speakLang;
              let learnLang = this.$route.params.learnLang;
              let category = this.$route.params.category
              this.$router.push({path: `/speak/${speakLang}/learn/${learnLang}/category/${category  }/lesson/${lessonId}`})
          },
          loadLessons(){
              console.log(this.$route)
              let speakLanguage = this.$route.params.speakLang;
              let learnLanguage = this.$route.params.learnLang;
              let category = this.$route.params.category;
              console.log('check');
              console.log(speakLanguage);
              console.log(learnLanguage);
              console.log(category);
              axios.get('/api/lesson', {
                  params: {
                      'speakLang': speakLanguage,
                      'learnLang': learnLanguage,
                      'category' : category
                  }
              })
                  .then(response => {
                      if(response.status == 200 || response.status == 201){
                         this.lessonList = response.data.lessons.lessons;
                         this.learnLanguage = response.data.lessons.learnLang;
                      }
                  }).catch(error => {
                  console.log(error)
              })
          }
      }
  }
</script>

<style lang="css" scoped>
    .feature-card.active, .feature-card:hover, .feature-card:focus {
        border-color: unset;
        background-color: unset;
        box-shadow: 0 18px 56px rgb(255 255 255 / 18%);
        color: white;
    }
    .feature-card i {
        color: #00000099;
        background-color: #0b075700;
    }
    .feature-card.active i, .feature-card:hover i, .feature-card:focus i {
        box-shadow: 0 2px 38px rgb(255 255 255 / 40%);
        color: white;
    }
    a {
        color: #00000099;
    }
    a:hover {
        color: black;
    }
    h6 {
        color: unset;
    }
</style>
