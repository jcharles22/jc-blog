<!-- This is an example component -->
<template >
  <div class="bg-gradient-to-r to-bluegray from-darkbluegray">
    <h1
      class="
        mx-auto
        text-3xl
        font-semibold
        text-white
        capitalize
        lg:text-4xl
        dark:text-white
        pt-5
        md:pb-5
        pb-8
      "
    >
      Jared Charles's Blog
    </h1>

    <div class="relative">
      <button
        class="
          text-gray-100
          pr-10
          text-xl
          hover:text-gray-400
          absolute
          bottom-1
          md:bottom-3
          right-0
        "
        v-on:click="linkedinLink"
      >
        <linkedInIcon />
      </button>
    </div>
  </div>
  <div class="flex flex-wrap justify-around pt-10">
    <CardView
      title="Where my Programming Career Started"
      subtitle="Started with a Computer Science Class"
      src="https://www.technoloxy.com/wp-content/uploads/2020/01/code-coding-computer-data-574077-min.jpg"
      alt="Vue logo"
      to="ProgramStarted"
    />

    <CardView
      title="Picking back up With Vue and Learning TailWind!"
      subtitle="Decided to make a blog about my 100 days of coding. I'm using Vue/tailwind to documnet my experience and Flutter for andriod and web (would also do apple but i don't have a mac book at this time)"
      src="data:image/jpeg;base64,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"
      alt="Vue logo"
    />

    <CardView
      title="Math Attack App"
      subtitle="Putting together a small math question speed game to see how many question you can get right in a small time."
      src="https://github.com/jcharles22/jc-blog/blob/master/src/assets/mathAttack.png?raw=true"
      alt="Math question"
    />

    <CardView
      title="Manager App"
      subtitle="Putting together a small Employee tracking app. So i can keep up with employees easier."
      src="https://github.com/jcharles22/jc-blog/blob/master/src/assets/mathAttack.png?raw=true"
      alt="Math question"
      to="ManagerApp"
    />
  </div>
  <router-view />
</template>



<script>
// import HelloWorld from './components/HelloWorld.vue'
import CardView from "../components/CardView";
import linkedInIcon from "../assets/linkedinIcon.vue";
export default {
  name: "Home",
  components: {
    CardView,
    linkedInIcon,
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  methods: {
    linkedinLink() {
      window.open("https://www.linkedin.com/in/jared-charles/");
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
  color: white;
}
body {
  background-color: #f0efeb;
}
</style>
