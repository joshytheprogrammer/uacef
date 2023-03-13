<template>
  <div class="bg-purple-200 md:flex flex-col justify-between items-left w-full h-fit bg-no-repeat lg:bg-fixed text-neutral-800 px-4 sm:px-8 md:px-12 lg:px-28 py-24">
    <div class="w-full md:flex flex-wrap justify-between">
      <div class="rounded-t-2xl bg-white transition-all hover:shadow-md w-full mb-6 sm:w-fit md:w-[49%] lg:w-[32.7%]" v-for="item in data" :key="item.id">
        <img class="w-full rounded-t-2xl object-fill" :src="item.imgLink" :alt="item.name">
        <div class="p-6">
          <h3 class="text-xl font-semibold"> {{ item.name }} </h3>
          <p class="text-slate-500 mt-6 text-sm leading-7"> {{ item.desc }} </p>
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
            desc: 'Taking care of widows is a command from our Lord. We take several steps to look after widows and their children - these include, providing them with food and vegetables as well as supporting whatever businesses they decide to embark on. '
          },
          {
            id: 1,
            imgLink: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1678132858/uacef/scholarships_gm64wq.jpg',
            name: 'University Scholarships',
            desc: 'A lot of youths in our villages are not able to continue their education through to university due to extremely high fees and cost of living. We provide university scholarships to the brightest youths among us who desire to further their education.'
          },
          {
            id: 2,
            imgLink: 'https://res.cloudinary.com/dsgvwxygr/image/upload/q_100/v1677861520/uacef/bg-img-1_a9pp2c.jpg',
            name: 'Helping those in need',
            desc: 'We prioritize the less priviledged in our village. There are people around the world right who are at death\'s door because of hunger. We are determined to look out for and take care of all such people in our midst. No matter the cost.'
          },
          {
            id: 3,
            imgLink: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            name: 'Supporting Young Students',
            desc: 'Many of the students who make use of the public school system have to go to school hungry, without textbooks or proper clothing due to a lack of resources. We at UACEF are determined to provide for all such students until they are able to provide for themselves. '
          },
          {
            id: 4,
            imgLink: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1678132265/uacef/families_lzpyz1.jpg',
            name: 'Supporting New Families',
            desc: 'Many young men just starting families do not have the means to provide for those families. Many others refuse to start families for this same reason. We at UACEF are committed to providing a means for husbands and fathers to provide for themselves.'
          },
          {
            id: 5,
            imgLink: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1678132265/uacef/sick_nigga_1_ghcl8b.jpg',
            name: 'Helping the Sick',
            desc: 'Common illnesses like malaria and typhoid claim far to many lives around the world. This is because of lack of basic medical resources and care. We at UACEF are committed to providing easy and quick access to medical centres and resources around our village.'
          },
          {
            id: 6,
            imgLink: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1678132265/uacef/christian_rayer_c5td8x.jpg',
            name: 'Spreading the Gospel',
            desc: 'The gospel of Jesus Christ is the good news. It is the only thing that can bring hope to this world that is full of suffering and pain. We at UACEF make it our top priority to spread the gospel of Jesus Christ around our village. Especially among the idol worshippers.'
          },
          {
            id: 7,
            imgLink: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1678132265/uacef/clean_water_yoakce.jpg',
            name: 'Clean Water',
            desc: 'Clean drinking water is obviously very important, but it is not widely available. People still bathe and wash using water from dirty streams and other sources. UACEF is committed to providing clean and affordable water to every member of our village'
          },
        ]
      }
    }
  }
</script>