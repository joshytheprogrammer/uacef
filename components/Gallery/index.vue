<template>
  <div class="md:columns-2 lg:columns-3 gap-6 px-4 sm:px-8 md:px-12 lg:px-28 py-24 transition-all">
    <figure class="w-full p-1 shadow-md mr-6 mb-6 rounded-xl inline-block border-2 border-solid border-gray-400 hover:border-purple-900" v-for="item in images" :key="item.id">
      <img class="rounded-xl " :src="item.link" :alt="item.alt">
    </figure>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        images: [
          {
            id: 0,
            alt: 'img-1',
            link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1678132858/uacef/scholarships_gm64wq.jpg'
          },
          {
            id: 1,
            alt: 'img-2',
            link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1678132265/uacef/families_lzpyz1.jpg'
          },
          {
            id: 2,
            alt: 'img-3',
            link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1678132265/uacef/sick_nigga_1_ghcl8b.jpg'
          },
          {
            id: 3,
            alt: 'img-4',
            link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1678132265/uacef/clean_water_yoakce.jpg'
          },
          {
            id: 4,
            alt: 'img-5',
            link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1678132265/uacef/christian_rayer_c5td8x.jpg'
          },
          {
            id: 5,
            alt: 'img-6',
            link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1678110329/uacef/our_causes_bg_eivnrp.jpg'
          },
          {
            id: 6,
            alt: 'img-7',
            link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1677862396/uacef/bg-img-3_r7pmlz.jpg'
          },
          {
            id: 7,
            alt: 'img-8',
            link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1677861520/uacef/bg-img-1_a9pp2c.jpg'
          },
          {
            id: 8,
            alt: 'img-9',
            link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1677861520/uacef/bg-img-2_wv0rpv.jpg'
          },
          {
            id: 9,
            alt: 'img-10',
            link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1677832846/uacef/photo_2023-03-03_09-37-15_pxcryi.jpg'
          },
          {
            id: 10,
            alt: 'img-11',
            link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1677832846/uacef/photo_2023-03-03_09-37-09_r4qh5c.jpg'
          },
          {
            id: 11,
            alt: 'img-12',
            link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1677832846/uacef/photo_2023-03-03_09-36-58_hhp75h.jpg'
          },
          {
            id: 12,
            alt: 'img-13',
            link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1677832846/uacef/photo_2023-03-03_09-36-46_dyaens.jpg'
          },
          {
            id: 13,
            alt: 'img-14',
            link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1677832846/uacef/photo_2023-03-03_09-36-53_gwik4r.jpg'
          },
          {
            id: 14,
            alt: 'img-15',
            link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1677832846/uacef/photo_2023-03-03_09-36-43_gpwjcm.jpg'
          },
          {
            id: 15,
            alt: 'img-16',
            link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1677832845/uacef/photo_2023-03-03_09-36-39_mvp7xl.jpg'
          },
          {
            id: 16,
            alt: 'img-17',
            link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1677832845/uacef/photo_2023-03-03_09-36-27_yf1dph.jpg'
          },
          {
            id: 17,
            alt: 'img-18',
            link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1677832407/uacef/IMG-20210801-WA0058_msloqn.jpg'
          },
          {
            id: 18,
            alt: 'img-19',
            link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1677832407/uacef/IMG-20210801-WA0055_cghdr6.jpg'
          },
          {
            id: 19,
            alt: 'img-20',
            link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1677832407/uacef/IMG-20210801-WA0053_eowe1l.jpg'
          },
          {
            id: 20,
            alt: 'img-21',
            link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1677832407/uacef/IMG-20210801-WA0051_cssqys.jpg'
          },
          {
            id: 21,
            alt: 'img-22',
            link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1677832407/uacef/IMG-20210801-WA0027-548x365_q7fprw.jpg'
          },
          {
            id: 22,
            alt: 'img-23',
            link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1677832406/uacef/IMG-20210801-WA0045_ztkssi.jpg'
          },
          {
            id: 23,
            alt: 'img-24',
            link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1677832406/uacef/IMG-20210801-WA0048_lf5ria.jpg'
          },
          {
            id: 24,
            alt: 'img-25',
            link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1677832406/uacef/images-1-1-1jpg_iyztrl.jpg'
          },
          {
            id: 25,
            alt: 'img-26',
            link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1677832406/uacef/IMG-20210801-WA0063_yk6vyt.jpg'
          },
        ]
      }
    }
  }
</script>