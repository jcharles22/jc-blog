<!-- This is an example component -->
<template>
  <div class="flex flex-wrap justify-around">
    <div
      class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5"
    >
      <a>
        <img class="mx-auto" :src="src" :atl="alt" v-on:click="navigate" />
      </a>
      <div class="p-5">
        <a>
          <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2">
            {{ title }}
          </h5>
        </a>
        <p class="font-normal text-gray-700 mb-3">{{ subtitle }}</p>
        <a
          class="
            text-white
            bg-blue-700
            hover:bg-blue-800
            focus:ring-4 focus:ring-blue-300
            font-medium
            rounded-lg
            text-sm
            px-3
            py-2
            text-center
            inline-flex
            items-center
          "
          v-on:click="navigate()"
        >
          Read more
        </a>
      </div>
    </div>
  </div>
</template>



<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "CardView",
  props: {
    title: String,
    subtitle: String,
    alt: String,
    src: String,
    to: String,
  },
  components: {},
  methods: {
    navigate: function () {
      console.log(this.$router.push(this.to));
      console.log("pressed");
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
