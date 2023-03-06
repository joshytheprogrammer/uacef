<template>
  <div class="bg-purple-200 md:flex flex-col justify-between items-left w-full h-fit bg-no-repeat lg:bg-fixed text-neutral-800 px-4 sm:px-8 md:px-12 lg:px-28 py-24">
    <div class="w-full md:flex flex-wrap justify-between">
      <div class="rounded-t-2xl w-full mb-6 sm:w-fit md:w-[49%] lg:w-[32.7%]">
        <img class="w-full rounded-t-2xl object-fill" src="" alt="Help widows image">
        <div class="bg-white p-6">
          <h3 class="text-xl font-semibold"></h3>
          <p class="text-slate-500 mt-6 text-sm leading-7"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        data: [
          {
            id: 0,
            imgLink: 'https://images.unsplash.com/photo-1522543558187-768b6df7c25c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            name: 'Providing for Widows',
            desc: ''
          },
          {
            id: 1,
            imgLink: 'University Scholarships',
            name: '',
            desc: ''
          },
          {
            id: 2,
            imgLink: 'https://res.cloudinary.com/dsgvwxygr/image/upload/q_100/v1677861520/uacef/bg-img-1_a9pp2c.jpg',
            name: 'Helping those in need',
            desc: ''
          },
          {
            id: 3,
            imgLink: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            name: 'Supporting Young Students',
            desc: ''
          },
          {
            id: 4,
            imgLink: '',
            name: 'Supporting New Families',
            desc: ''
          },
          {
            id: 5,
            imgLink: '',
            name: 'Helping the Sick',
            desc: ''
          },
          {
            id: 6,
            imgLink: '',
            name: 'Spreading the Gospel',
            desc: ''
          },
          {
            id: 7,
            imgLink: '',
            name: 'Clean Water',
            desc: ''
          },
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>