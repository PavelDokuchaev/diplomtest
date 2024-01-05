<template>

    <HeaderComponent />
    <router-view />
    <FooterComponent />

</template>

<script>
import FooterComponent from './components/FooterComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
// import MainComponent from './components/MainComponent.vue';
// import AuthorComponent from './components/AuthorComponent.vue';
// import MachoComponent from './components/MachoComponent.vue';
// import TongueComponent from './components/TongueComponent.vue';
// import BoyComponent from './components/BoyComponent.vue';

export default {
  components: { HeaderComponent, FooterComponent}
}
</script>

<style lang="scss">
</style>