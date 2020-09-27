<template>
  <div
    :class="[
      {
        'opacity-0': !active,
        'lightbox-active': active,
        'pointer-events-none': !active
      },
      'fixed w-full h-full top-0 left-0 flex items-center justify-center'
    ]"
  >
    <div
      @click="$emit('close')"
      class="absolute w-full h-full bg-gray-900 opacity-50"
    />
    <div
      class="bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto"
    >
      <div
        @click="$emit('close')"
        class="absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-s z-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
        >
          <path
            style="fill:#ffffff;color:#ffffff;"
            d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
          />
        </svg>
      </div>
      <div class="py-4 text-left px-6">
        <div class="flex justify-between items-center pb-3">
          <p v-if="title" v-text="title" class="text-2xl font-bold" />
          <div @click="$emit('close')" class="cursor-pointer z-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
            >
              <path
                style="fill:#000000;color:#000000"
                d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
              />
            </svg>
          </div>
        </div>
        <p v-text="`Modal content can go here`" />
        <slot></slot>
        <div class="flex justify-end pt-2">
          <button
            @click="$emit('close')"
            v-text="`Cancel`"
            class="px-4 py-3 bg-transparent rounded-lg text-indigo-500 mr-2 hover:bg-gray-100 hover:text-indigo-400"
          />
          <button
            @click="$emit('submit')"
            v-text="`Submit`"
            class="px-4 py-3 bg-black rounded text-white hover:bg-blue-600"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      default: ''
    }
  }
}
</script>