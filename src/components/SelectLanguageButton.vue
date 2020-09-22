<template>
    <button class="language-button"></button>    
</template>


<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class SelectLanguageButton extends Vue{

    @Prop()
    language!: string;
}
</script>


<style scoped>
    .language-button {
        background: tomato;
        color: springgreen;
        font-weight: 600;
    }
</style>