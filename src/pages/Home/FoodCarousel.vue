<template lang="">
    <div class="container-template">
        <VueSlickCarousel
            v-bind="settings"
            class="my-20"
            v-if="foods.length > 0"
        >
            <router-link
                :to="{ path: `/detail/${food.id}` }"
                v-for="food in foods"
                :key="food.id"
                class="bg-white mx-2 max-w-full border border-gray-200 rounded-lg shadow cursor-pointer"
            >
                <div>
                    <img class="rounded-t-lg" :src="food.image" alt="" />
                </div>
                <div class="p-5">
                    <div class="cursor-pointer">
                        <h5
                            class="mb-2 text-xl font-bold tracking-tight text-gray-900"
                        >
                            {{ food.name }}
                        </h5>
                    </div>
                    <p class="text-red-500">
                        MFG:
                        {{ formatDate(food.createdAt) }}
                    </p>
                    <p class="mb-3 text-xl font-bold text-yellow-400">
                        {{ food.price }} $
                    </p>
                </div>
            </router-link>
        </VueSlickCarousel>
    </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import moment from "moment";
export default {
    data() {
        return {
            settings: {
                dots: true,
                infinite: false,
                speed: 500,
                slidesToShow: 5,
                slidesToScroll: 5,
                initialSlide: 0,
                row: 2,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            infinite: true,
                            dots: true,
                        },
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            initialSlide: 2,
                        },
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        },
                    },
                ],
            },
        };
    },
    components: {
        VueSlickCarousel,
    },
    created() {
        this.getFoods();
    },
    computed: {
        ...mapGetters(["foods"]),
    },
    methods: {
        ...mapActions(["getFoods"]),
        formatDate(date) {
            return moment(date).format("DD-MM-YYYY");
        },
    },
};
</script>
<style>
.container-template {
    padding: 0 100px;
}
</style>
