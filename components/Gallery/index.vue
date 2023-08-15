<template>
  <section>
    <AppLoader v-if="isLoading" />
    <AppError v-else-if="error" :errorMessage="error" />
    <div v-else class="md:columns-2 lg:columns-3 gap-6 px-4 sm:px-8 md:px-12 lg:px-28 py-24 transition-all">
      <figure class="w-full p-1 shadow-md mr-6 mb-6 rounded-xl inline-block border-2 border-solid border-gray-400 hover:border-purple-900" v-for="item in images" :key="item.id">
        <img class="rounded-xl w-full" :src="item.link" :alt="'img - ' + item.id">
      </figure>
    </div>
  </section>
</template>

<script setup>
import { getDocs, collection } from 'firebase/firestore';

const nuxtApp = useNuxtApp();
const db = nuxtApp.$firestore;
const images = ref([]); // Define images as a reactive ref array
const isLoading = ref(true);
const error = ref(null);

onMounted(async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'gallery'));
    querySnapshot.forEach((doc) => {
      // Push each document data into the images array
      images.value.push({
        id: doc.id,
        link: doc.data().imgLink,
        alt: 'UACEF_img_' + doc.data().id
      });
    });
    isLoading.value = false; // Set loading state to false
  } catch (e) {
    isLoading.value = false; // Set loading state to false
    error.value = 'Error fetching data'; // Set the error message
    console.error('Error fetching data:', e);
  }
});

  // const images = [
  //   {
  //     id: 0,
  //     alt: 'img-1',
  //     link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1678132858/uacef/scholarships_gm64wq.jpg'
  //   },
  //   {
  //     id: 1,
  //     alt: 'img-2',
  //     link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1678132265/uacef/families_lzpyz1.jpg'
  //   },
  //   {
  //     id: 2,
  //     alt: 'img-3',
  //     link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1678132265/uacef/sick_nigga_1_ghcl8b.jpg'
  //   },
  //   {
  //     id: 3,
  //     alt: 'img-4',
  //     link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1678132265/uacef/clean_water_yoakce.jpg'
  //   },
  //   {
  //     id: 4,
  //     alt: 'img-5',
  //     link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1678132265/uacef/christian_rayer_c5td8x.jpg'
  //   },
  //   {
  //     id: 5,
  //     alt: 'img-6',
  //     link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1678110329/uacef/our_causes_bg_eivnrp.jpg'
  //   },
  //   {
  //     id: 6,
  //     alt: 'img-7',
  //     link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1677862396/uacef/bg-img-3_r7pmlz.jpg'
  //   },
  //   {
  //     id: 7,
  //     alt: 'img-8',
  //     link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1677861520/uacef/bg-img-1_a9pp2c.jpg'
  //   },
  //   {
  //     id: 8,
  //     alt: 'img-9',
  //     link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1677861520/uacef/bg-img-2_wv0rpv.jpg'
  //   },
  //   {
  //     id: 9,
  //     alt: 'img-10',
  //     link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1677832846/uacef/photo_2023-03-03_09-37-15_pxcryi.jpg'
  //   },
  //   {
  //     id: 10,
  //     alt: 'img-11',
  //     link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1677832846/uacef/photo_2023-03-03_09-37-09_r4qh5c.jpg'
  //   },
  //   {
  //     id: 11,
  //     alt: 'img-12',
  //     link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1677832846/uacef/photo_2023-03-03_09-36-58_hhp75h.jpg'
  //   },
  //   {
  //     id: 12,
  //     alt: 'img-13',
  //     link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1677832846/uacef/photo_2023-03-03_09-36-46_dyaens.jpg'
  //   },
  //   {
  //     id: 13,
  //     alt: 'img-14',
  //     link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1677832846/uacef/photo_2023-03-03_09-36-53_gwik4r.jpg'
  //   },
  //   {
  //     id: 14,
  //     alt: 'img-15',
  //     link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1677832846/uacef/photo_2023-03-03_09-36-43_gpwjcm.jpg'
  //   },
  //   {
  //     id: 15,
  //     alt: 'img-16',
  //     link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1677832845/uacef/photo_2023-03-03_09-36-39_mvp7xl.jpg'
  //   },
  //   {
  //     id: 16,
  //     alt: 'img-17',
  //     link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1677832845/uacef/photo_2023-03-03_09-36-27_yf1dph.jpg'
  //   },
  //   {
  //     id: 17,
  //     alt: 'img-18',
  //     link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1677832407/uacef/IMG-20210801-WA0058_msloqn.jpg'
  //   },
  //   {
  //     id: 18,
  //     alt: 'img-19',
  //     link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1677832407/uacef/IMG-20210801-WA0055_cghdr6.jpg'
  //   },
  //   {
  //     id: 19,
  //     alt: 'img-20',
  //     link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1677832407/uacef/IMG-20210801-WA0053_eowe1l.jpg'
  //   },
  //   {
  //     id: 20,
  //     alt: 'img-21',
  //     link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1677832407/uacef/IMG-20210801-WA0051_cssqys.jpg'
  //   },
  //   {
  //     id: 21,
  //     alt: 'img-22',
  //     link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1677832407/uacef/IMG-20210801-WA0027-548x365_q7fprw.jpg'
  //   },
  //   {
  //     id: 22,
  //     alt: 'img-23',
  //     link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1677832406/uacef/IMG-20210801-WA0045_ztkssi.jpg'
  //   },
  //   {
  //     id: 23,
  //     alt: 'img-24',
  //     link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1677832406/uacef/IMG-20210801-WA0048_lf5ria.jpg'
  //   },
  //   {
  //     id: 24,
  //     alt: 'img-25',
  //     link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1677832406/uacef/images-1-1-1jpg_iyztrl.jpg'
  //   },
  //   {
  //     id: 25,
  //     alt: 'img-26',
  //     link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1677832406/uacef/IMG-20210801-WA0063_yk6vyt.jpg'
  //   },
  //   {
  //     id: (Math.floor(Math.random() * 10) + Math.random()),
  //     link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1678706089/photo_2023-03-13_12-11-13_gxfb4s.jpg'
  //   },
  //   {
  //     id: (Math.floor(Math.random() * 10) + Math.random()),
  //     link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1678706090/photo_2023-03-13_12-11-09_krytl3.jpg'
  //   },
  //   {
  //     id: (Math.floor(Math.random() * 10) + Math.random()),
  //     link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1678706090/photo_2023-03-13_12-11-06_d2hysu.jpg'
  //   },
  //   {
  //     id: (Math.floor(Math.random() * 10) + Math.random()),
  //     link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1678706090/photo_2023-03-13_12-11-11_x48ark.jpg'
  //   },
  //   {
  //     id: (Math.floor(Math.random() * 10) + Math.random()),
  //     link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1678706090/photo_2023-03-13_12-11-02_ud4abm.jpg'
  //   },
  //   {
  //     id: (Math.floor(Math.random() * 10) + Math.random()),
  //     link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1678706090/photo_2023-03-13_12-11-04_ysv66o.jpg'
  //   },
  //   {
  //     id: (Math.floor(Math.random() * 10) + Math.random()),
  //     link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1678706090/photo_2023-03-13_12-10-58_rzn2zl.jpg'
  //   },
  //   {
  //     id: (Math.floor(Math.random() * 10) + Math.random()),
  //     link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1678706090/photo_2023-03-13_12-10-56_v2q26l.jpg'
  //   },
  //   {
  //     id: (Math.floor(Math.random() * 10) + Math.random()),
  //     link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1678706091/photo_2023-03-13_12-10-53_cmxdbb.jpg'
  //   },
  //   {
  //     id: (Math.floor(Math.random() * 10) + Math.random()),
  //     link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1678706091/photo_2023-03-13_12-10-50_yndp9h.jpg'
  //   },
  //   {
  //     id: (Math.floor(Math.random() * 10) + Math.random()),
  //     link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1678706091/photo_2023-03-13_12-10-46_ru4uec.jpg'
  //   },
  //   {
  //     id: (Math.floor(Math.random() * 10) + Math.random()),
  //     link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1678706091/photo_2023-03-13_12-10-42_k7ztyb.jpg'
  //   },
  //   {
  //     id: (Math.floor(Math.random() * 10) + Math.random()),
  //     link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1678706091/photo_2023-03-13_12-10-38_ty3rry.jpg'
  //   },
  //   {
  //     id: (Math.floor(Math.random() * 10) + Math.random()),
  //     link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1678706092/photo_2023-03-13_12-10-40_qtvhuo.jpg'
  //   },
  //   {
  //     id: (Math.floor(Math.random() * 10) + Math.random()),
  //     link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1678706092/photo_2023-03-13_12-10-34_aduj3r.jpg'
  //   },
  //   {
  //     id: (Math.floor(Math.random() * 10) + Math.random()),
  //     link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1678706092/photo_2023-03-13_12-10-32_twpc5h.jpg'
  //   },
  //   {
  //     id: (Math.floor(Math.random() * 10) + Math.random()),
  //     link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1678706092/photo_2023-03-13_12-10-44_bveuen.jpg'
  //   },
  //   {
  //     id: (Math.floor(Math.random() * 10) + Math.random()),
  //     link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1678706092/photo_2023-03-13_12-11-38_n3ygbb.jpg'
  //   },
  //   {
  //     id: (Math.floor(Math.random() * 10) + Math.random()),
  //     link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1678706093/photo_2023-03-13_12-11-31_tkfpxa.jpg'
  //   },
  //   {
  //     id: (Math.floor(Math.random() * 10) + Math.random()),
  //     link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1678706093/photo_2023-03-13_12-11-29_bpbdso.jpg'
  //   },
  //   {
  //     id: (Math.floor(Math.random() * 10) + Math.random()),
  //     link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1678706093/photo_2023-03-13_12-11-27_xwi6gr.jpg'
  //   },
  //   {
  //     id: (Math.floor(Math.random() * 10) + Math.random()),
  //     link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1678706093/photo_2023-03-13_12-11-22_z6s8gq.jpg'
  //   },
  //   {
  //     id: (Math.floor(Math.random() * 10) + Math.random()),
  //     link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1678706093/photo_2023-03-13_12-11-14_jjyykz.jpg'
  //   },
  //   {
  //     id: (Math.floor(Math.random() * 10) + Math.random()),
  //     link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1678706093/photo_2023-03-13_12-11-21_verrzg.jpg'
  //   },
  //   {
  //     id: (Math.floor(Math.random() * 10) + Math.random()),
  //     link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1678706093/photo_2023-03-13_12-11-18_yj7eru.jpg'
  //   },
  //   {
  //     id: (Math.floor(Math.random() * 10) + Math.random()),
  //     link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1678706093/photo_2023-03-13_12-11-16_rw5pcz.jpg'
  //   },
  //   {
  //     id: (Math.floor(Math.random() * 10) + Math.random()),
  //     link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1678706093/photo_2023-03-13_12-11-19_xgh6dt.jpg'
  //   },
  //   {
  //     id: (Math.floor(Math.random() * 10) + Math.random()),
  //     link: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1678901081/uacef/photo_2023-03-15_18-24-21_hp6kar.jpg'
  //   },
  // ];
</script>