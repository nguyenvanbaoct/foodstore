<template>
    <div>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500">
                <caption
                    class="p-5 text-lg font-semibold text-left text-gray-900 bg-white"
                >
                    Our products
                </caption>
                <thead
                    class="text-xs text-gray-700 uppercase bg-gray-50 border-b"
                >
                    <tr>
                        <th scope="col" class="px-6 py-3">Tên món ăn</th>
                        <th scope="col" class="px-6 py-3">Số lượng</th>
                        <th scope="col" class="px-6 py-3">Tổng tiền</th>
                        <th scope="col" class="px-6 py-3">Tình trạng</th>
                        <th scope="col" class="px-6 py-3">
                            <span class="sr-only">Thanh toán</span>
                        </th>
                    </tr>
                </thead>
                <tbody v-for="cart in cartArr" :key="cart.id">
                    <tr class="bg-white border-b">
                        <th
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                        >
                            Apple MacBook Pro 17"
                        </th>
                        <td class="px-6 py-4">1 {{ cart.id }}</td>
                        <td class="px-6 py-4">Laptop</td>
                        <td class="px-6 py-4">$2999</td>
                        <td class="px-6 py-4 text-right">
                            <a
                                href="#"
                                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                >Edit</a
                            >
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
    data() {
        return {
            // carts: this.cartArr,
            // cartItem: {},
        };
    },
    created() {
        this.getCartArr();
        // console.log(this.getCartArr());
    },
    computed: {
        ...mapGetters(["cartArr"]),
    },
    methods: {
        ...mapActions(["getCartArr"]),
    },
    mounted() {},
};
</script>
<style></style>
