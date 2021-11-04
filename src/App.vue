<template>
  <header class="header-container">
    <router-link to="/" style="text-decoration: none;">
      <h1 class="logo-estate">estate<span class="logo-finder">Finder</span></h1>
    </router-link>
    <div>
      <button class="small-button" @click="showModal">Login</button>
      <button class="small-button" @click="showModal">Signup</button>
    </div>
  </header>
  <Modal v-show="isModalVisible" @close="closeModal"/>
  <router-view/>
</template>

<script>
  import Modal from './components/Modal.vue';

  export default {
    name: 'App',
    components: {
      Modal,
    },
    data() {
      return {
        isModalVisible: false,
      };
    },
    methods: {
      showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      }
    }
  };
</script>


<style>
  @import url('https://fonts.googleapis.com/css2?family=Merriweather+Sans:ital,wght@0,300;0,400;0,700;1,400&display=swap');
</style>
