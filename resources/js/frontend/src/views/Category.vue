<template>
    <!-- Category Area-->
    <section class="service-area section-padding-120" style="padding-bottom: 345px">
        <div class="container">
            <div class="row justify-content-center wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1000ms">
                <div class="col-12 col-md-9 col-lg-7 col-xxl-6">
                    <div class="section-heading text-center">
                        <h2>{{$t('Category.title')}}</h2>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center g-5">
                <!-- Single Service Area-->
                <div v-for="(item, index) in category" :key="index" class="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">

                        <a v-on:click="setCategory(item)" >
                        <div class="card service-card wow fadeInUp" :data-wow-delay="(400 + 100 * index )+'ms'" data-wow-duration="1000ms">
                            <div class="card-body">
                                <div class="icon"><i :class="'lni lni-'+item.icon"></i></div>
                                <h4>{{item.title}}</h4>
                                <p>{{item.subtitle}}</p>
                            </div>
                        </div>
                        </a>

                </div>
            </div>
        </div>
    </section>
</template>

<script>
  export default {
    name: 'Category',
      data(){
        return {
        }
      },
      computed: {
        category(){
            let list =  [
                {
                    title: this.$t('Category.vocabulary.title'),
                    subtitle: this.$t('Category.vocabulary.subtitle'),
                    icon: 'book'
                },
                {
                    title: this.$t('Category.grammar.title'),
                    subtitle: this.$t('Category.grammar.subtitle'),
                    icon: 'graduation'
                },
                {
                    title:  this.$t('Category.dialogues.title'),
                    subtitle: this.$t('Category.dialogues.subtitle'),
                    icon: 'support'
                }
            ]
            return list;
        }
      },
      methods: {
          onCloseModal(){
              this.$emit('isClosed', true)
          },

          setCategory(val){
              let speakLang = this.$route.params.speakLang;
              let learnLang = this.$route.params.learnLang;
              this.$store.commit('setCategory', val)
              this.$router.push('lesson-list')
              let category = val;
              this.$router.push({path: `/speak/${speakLang}/learn/${learnLang}/category/${category.title}`})
          }
      }
  }
</script>

