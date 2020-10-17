<template>
  <div class="cheese-section">
    <img alt="Photo of a cheese" class="cheese-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Mahon_Cheese.JPG/1200px-Mahon_Cheese.JPG">
    <!-- for the real thing we should use component interpolation with the i18n functional component to avoid XSS attacks. Not sure I understand how to do this yet -->
    <h1>{{ $t('welcome') }}</h1>
    <button v-for="language in languages" :key="language.title" @click="changeLocale(language.language)" class="language-button">
      {{ language.title }}
    </button>
    <h2>{{ $t('book-a-cheese') }}</h2>
    <!-- for R to L languages, the plural must be on the left -->
    <h1>{{ $tc('insight', 2) }}</h1>
    <HelloI18n />
    <h3>{{ hello }}</h3>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import HelloI18n from './HelloI18n.vue';


@Component({
  components: {
    HelloI18n
  },
})
export default class CheeseSection extends Vue {
  @Prop() private msg!: string;

  get languages(): Array<object> {
    const languages = [
      { language: 'en', title: 'English' },
      { language: 'fr', title: 'Français' },
      { language: 'ar', title: 'عربية' }
    ]

    return languages;
  }

  public changeLocale(locale: string): void {
    this.$i18n.locale = locale;
  }

  public sayHello(): string {
    return "HELLO";
  }

  get hello(): string {
    return this.sayHello();
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
  color: #22211f;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #5a2605;
}

.cheese-section {
  background: #ffeabf;
  padding-top: 80px;
}
.cheese-image {
  max-width: 15%;
  max-height: 15%;
}
.language-button {
  background:  #2c3e50;
  color: #fcc455;
  font-weight: 600;
  padding: 0.3%;
  border-radius: 20%;
}
</style>
