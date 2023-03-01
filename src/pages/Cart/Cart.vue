<template lang="">
    <div>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500">
                <caption
                    class="p-5 text-lg font-semibold text-left text-gray-900 bg-white"
                >
                    Giỏ Hàng
                </caption>
                <thead
                    class="text-xs text-gray-700 uppercase bg-gray-100 border-b"
                >
                    <tr>
                        <th scope="col" class="px-6 py-3">Đơn hàng</th>
                        <th scope="col" class="px-6 py-3">Số lượng</th>
                        <th scope="col" class="px-6 py-3">Đơn Giá</th>
                    </tr>
                </thead>
                <tbody v-for="product in cartItems" :key="product.id">
                    <tr class="bg-white border-b">
                        <th
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                        >
                            <tr class="bg-white border-b">
                                {{
                                    product.name
                                }}
                            </tr>
                        </th>
                        <td class="px-6 py-4">{{ product.quantity }}</td>
                        <td class="px-6 py-4">$ {{ product.price }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="flex mt-10 justify-center">
            <div class="mr-10 pt-2 font-bold flex text-2xl">
                Tổng tiền:
                <p class="text-yellow-400 pl-2">$ {{ total }}</p>
            </div>
            <button
                class="font-medium text-blue-600 dark:text-blue-500 border px-5 py-2 hover:outline ml-10"
            >
                Thanh toán
            </button>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import { BASE_URL } from "../../services/config.url";

export default {
    name: "CartPage",
    data() {
        return {
            cartItems: [],
            total: 0,
            paid: false,
            id: null,
        };
    },
    methods: {
        listCartItems() {
            axios
                .get(`${BASE_URL}/cart`)
                .then((res) => {
                    const result = res.data;
                    let paidFalse = result.find((item) => item.paid == false);
                    this.cartItems = paidFalse.items;
                    this.total = paidFalse.total;
                    this.id = result.id;
                    this.paid = result.paid;
                    console.log("cart paidfalse", paidFalse);
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    },
    mounted() {
        this.listCartItems();
    },
};
</script>
<style lang=""></style>
