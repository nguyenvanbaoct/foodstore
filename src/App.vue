<script>
import HeaderLayout from "./Layout/Header.vue";
import FooterLayout from "./Layout/Footer.vue";

export default {
    components: {
        HeaderLayout,
        FooterLayout,
    },
};
</script>

<template>
    <div id="app" class="min-h-screen flex flex-col">
        <HeaderLayout />
        <div class="flex-grow">
            <router-view />
        </div>
        <FooterLayout />
    </div>
</template>
