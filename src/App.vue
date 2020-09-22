<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <button v-for="language in languages" :key="language.title" @click="changeLocale(language.language)" class="language-button">
      {{ language.title }}
    </button>
    <HelloI18n />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
import HelloI18n from './components/HelloI18n.vue';
import SelectLanguageButton from './components/SelectLanguageButton.vue';

@Component({
  components: {
    HelloWorld,
    HelloI18n,
    SelectLanguageButton
  },
})
export default class App extends Vue {

  get languages(): Array<object> {
    const languages = [
      { language: 'en', title: 'English'  },
      { language: 'fr', title: 'Francais'  },
      { language: 'ar', title: 'عربية'  }
    ]

    return languages;
  }

  public changeLocale(locale: string): void {
    this.$i18n.locale = locale;
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.language-button {
        background: rgb(15, 39, 105);
        color: springgreen;
        font-weight: 600;
        padding: 2%;
    }
</style>
