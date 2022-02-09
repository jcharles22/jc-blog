<template>
  <div class="text-black h-screen">
    <div class="pt-1">
      <div class="flex absolute h-32 w-full">
        <div class="flex text-white ml-36 h-32 uppercase parallelogram">
          <div class="self-center italic text-2xl font-bold ml-20">
            Manager<br />App
          </div>
        </div>
      </div>
      <div class="max-w-xl mt-3 m-auto shadow-sm">
        <div
          class="rounded-lg bg-gradient-to-r to-bluegray from-darkbluegray pt-5"
        >
          <div class="py-4 mx-8 text-3xl sm:flex sm:items-center">
            <h1 class="p-4 text-white">
              Started with a Computer Science Class
            </h1>
          </div>
        </div>
        <div class="relative">
          <div class="relative h-16 bg-gray-100">
            <h1
              class="absolute bottom-0 right-0 mx-8 my-3 text-sm text-gray-500"
            >
              posted on 9th Jan. 2022
            </h1>
          </div>
          <div
            class="
              absolute
              bottom-0
              left-0
              w-16
              h-16
              mb-8
              ml-8
              border-2 border-gray-200
              rounded-full
              bg-gradient-to-r
              to-bluegray
              from-darkbluegray
            "
          >
            <svg
              class="pl-1 m-2 text-gray-100 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="black"
              width="40px"
              height="40px"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
              />
            </svg>
          </div>
          <div
            class="
              h-16
              text-gray-100
              rounded-b-lg
              bg-gradient-to-r
              to-bluegray
              from-darkbluegray
            "
          >
            <h1
              class="
                absolute
                bottom-0
                left-0
                pb-4
                pl-32
                text-xl
                font-semibold
                cursor-pointer
                hover:underline
                sm:hover:no-underline sm:cursor-default
              "
            >
              Jared Charles
            </h1>
            <div
              class="
                absolute
                bottom-0
                right-0
                hidden
                px-2
                py-1
                mx-8
                my-4
                text-sm text-gray-100
                border-2 border-gray-100 border-solid
                rounded
                opacity-100
                cursor-pointer
                sm:flex
                hover:opacity-75
              "
            >
              <h2>view profile</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ManagerApp",
};
</script>

<style>
.parallelogram {
  max-width: 100%;
  width: 20rem;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 311.66 97.59'><title>Asset 1</title><g id='Layer_2' data-name='Layer 2'><g id='Ebene_1_Kopie' data-name='Ebene 1 Kopie'><polygon points='0 0 0 97.59 281.83 97.59 311.66 0 0 0'/></g></g></svg>");
  background-size: 100% 8rem;
}
</style>