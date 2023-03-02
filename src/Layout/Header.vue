<template>
    <div>
        <nav
            class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-orange-600 bg-opacity-50"
        >
            <div
                class="container flex flex-wrap items-center justify-around mx-auto"
            >
                <router-link to="/" class="flex items-center cursor-pointer">
                    <span
                        class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
                        >Food Store</span
                    >
                </router-link>
                <div
                    class="hidden w-full md:block md:w-auto"
                    id="navbar-default"
                >
                    <ul
                        class="flex flex-col p-4 mt-4 border md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0"
                    >
                        <li>
                            <router-link
                                to="#"
                                class="block py-2 pl-3 pr-4 text-white rounded md:hover:bg-transparent md:border-0 hover:text-gray-700 md:p-0 cursor-pointer"
                                >MÓN MẶN</router-link
                            >
                        </li>
                        <li>
                            <router-link
                                to="#"
                                class="block py-2 pl-3 pr-4 text-white rounded md:hover:bg-transparent md:border-0 hover:text-gray-700 md:p-0 cursor-pointer"
                                >MÓN CHAY</router-link
                            >
                        </li>
                        <li>
                            <router-link
                                to="/edit"
                                class="block py-2 pl-3 pr-4 text-white rounded md:hover:bg-transparent md:border-0 hover:text-gray-700 md:p-0 cursor-pointer"
                                >CHỈNH SỬA ĐƠN HÀNG</router-link
                            >
                        </li>
                        <li>
                            <router-link
                                to="/history"
                                class="block py-2 pl-3 pr-4 text-white rounded md:hover:bg-transparent md:border-0 hover:text-gray-700 md:p-0 cursor-pointer"
                                >LỊCH SỬ ĐẶT HÀNG</router-link
                            >
                        </li>
                        <li>
                            <router-link
                                to="/cart"
                                class="block py-2 pl-3 pr-4 text-white rounded md:hover:bg-transparent md:border-0 hover:text-gray-700 md:p-0 cursor-pointer"
                                >GIỎ HÀNG {{ numCart }}</router-link
                            >
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>
<script>
export default {
    name: "HeaderLayout",
    data() {
        return {
            numCart: 0,
        };
    },
};
</script>
