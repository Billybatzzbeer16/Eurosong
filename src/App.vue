<template>
  <div id="app">
    <!-- Homepagina -->
    <Homepage v-if="page == 'home'" @change-page="GoToPage"/>
    
    <!-- Game -->
    <Gamepage v-if="page == 'game'" @change-page="GoToPage"/>

    <!-- Ranking -->
    <Rankingpage v-if="page == 'ranking'" @change-page="GoToPage"/>

    <!-- De taak voor ons -->
  </div>
</template>

<script>
// Pages
import Homepage from "./pages/Homepage.vue";
import Gamepage from "./pages/Gamepage.vue";
import Rankingpage from "./pages/Rankingpage.vue";

//import of the whole styling for the app
import style from './scss/style.scss';

// Components
import Navigation from "./components/Navigation.vue"
import Counter from "./components/Counter.vue"
import Feedback from "./components/Feedback.vue"

export default {
  name: 'App',
  components: {
    Homepage,
    Gamepage,
    Rankingpage,
    style,
  },
    data() {
      return{
        page: "home"
      }
    }, 
  methods: {
    GoToPage(page){
      this.page = page;
    }
  }
}
</script>

