<template>
    <!-- The Modal -->
    <div id="myModal" class="cust-modal" :style="isShown?'display: block':'display: none'">

        <!-- Modal content -->
        <div class="cust-modal-content">
            <div class="cust-modal-header">
                <span class="cust-close" v-on:click="onCloseModal">&times;</span>
                <h4>{{$tc('TheLanguageModal.header', headerType)}}</h4>
            </div>
            <div class="cust-modal-body mt-4 mb-3">

            <!--  Flag Element -->
                <div v-if="headerType === 1" class="row">
                    <div v-for="(flag, key) in speakLanguage" :key="key" class="col-xs-6 col-sm-4 col-md-4 col-lg-3 mt-1 mb-4 cursor-on" v-on:click="onCloseModal">
                        <a v-on:click="setLocale(flag.key)">
                            <span :class="'flag-icon flag-icon-'+flag.key"></span>
                            <span>{{flag.name}}</span>
                        </a>
                    </div>
                </div>
                <!--  -->
                <div v-else class="row">
                    <div v-for="(flag, key) in learnLanguage" :key="key" class="col-xs-6 col-sm-4 col-md-4 col-lg-3 mt-1 mb-4" v-on:click="onCloseModal">

                           <a v-on:click="setLocale(flag.key)"><span :class="'flag-icon flag-icon-'+flag.key"></span>
                               <span>{{flag.name}}</span></a>
                    </div>
                </div>

            </div>
            <div class="cust-modal-footer align-content-center mb-4">
                <button class="btn btn-outline-primary" v-on:click="onCloseModal"> Close </button>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    export default {
        name: 'TheLanguageModal',
        props:{
            type: Number,
            display: Boolean,
        },
        data(){
            return {
                langs: {},
                speakLanguage:[],
                learnLanguage:[]
            }
        },
        created: function () {
            this.loadLanguages();
        },
        computed: {
            ...mapState([
                'speakLang', 'learnLang', 'category'
            ]),
            isShown(){
                return this.display
            },
            headerType(){
                return this.type === 1 ? 1 : 2
            },

            isType(){
                if (this.type === 1){
                    return "home"
                }
                if (this.type === 2){
                    return "category"
                } else
                    return "lesson-list"
            }
        },
        methods: {
            onCloseModal(){
                this.$emit('isClosed', true)
            },

            loadModalLanguages(type){
              if(type =='speak'){
                  return this.speakLanguage;
              }  else {
                  return this.learnLanguage;
              }
            },

            loadLanguages(){

                axios.get('/api/languageModal', {

                })
                    .then(response => {
                        if(response.status == 200 || response.status == 201){
                            this.speakLanguage = response.data.arrLang.speak;
                            this.learnLanguage = response.data.arrLang.learn;
                        }
                    }).catch(error => {
                    console.log(error)
                })
            },
            setLocale(val){
                this.$i18n.locale = val
                if(this.headerType == 1){
                    this.$store.commit('setSpeakLanguage', val)
                }
                if(this.headerType == 2){

                    this.$store.commit('setLearnLanguage', val)
                    let speakLang = this.speakLang;
                    let learnLang = this.learnLang;
                    this.$router.push({path: `/speak/${speakLang}/learn/${learnLang}`})
                }

            }
        }
    }
</script>

<style scoped>
    h4 {
        color: gray;
    }
    @media only screen and (min-width: 1400px) {
        .cust-modal-content {
            max-width: 1015px; } }
    @media only screen and (min-width: 1200px) and (max-width: 1399px) {
        .cust-modal-content {
            max-width: 1130px; } }
    @media only screen and (min-width: 992px) and (max-width: 1199px) {
        .cust-modal-content {
            max-width: 950px; } }
    @media only screen and (min-width: 768px) and (max-width: 991px) {
        .cust-modal-content {
            max-width: 700px; } }
    @media only screen and (min-width: 576px) and (max-width: 767px) {
        .cust-modal-content {
            max-width: 530px; } }
</style>
