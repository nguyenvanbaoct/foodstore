<template>
    <div>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500">
                <caption
                    class="p-5 text-lg font-semibold text-left text-gray-900 bg-white"
                >
                    Chỉnh sửa đơn hàng
                </caption>
                <thead
                    class="text-xs text-gray-700 uppercase bg-gray-100 border-b"
                >
                    <tr>
                        <th scope="col" class="px-6 py-3">Giỏ hàng</th>
                        <th scope="col" class="px-6 py-3">Tổng tiền</th>
                        <th scope="col" class="px-6 py-3">Số lượng</th>
                        <th scope="col" class="px-6 py-3">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b">
                        <th
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                        >
                            <tr
                                class="bg-white border-b"
                                v-for="(item, index) in cartItems"
                                :key="index"
                            >
                                {{
                                    item.name
                                }}
                            </tr>
                        </th>
                        <td class="px-6 py-4">$ {{ total }}</td>
                        <td class="px-6 py-4">
                            <p class="text-red-500">
                                {{ cartItems.length }}
                            </p>
                        </td>
                        <td class="px-6 py-4">
                            <button
                                @click="checkOut"
                                class="font-medium text-blue-600 dark:text-blue-500 border px-5 py-2 hover:outline"
                            >
                                Thanh toán
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import { BASE_URL } from "../services/config.url";

export default {
    data() {
        return {
            cartItems: [],
            total: 0,
            idCart: 0,
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
                    this.idCart = paidFalse.id;
                    this.status = paidFalse.paid;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        checkOut() {
            axios.put(`${BASE_URL}/cart/${this.idCart}`, {
                paid: true,
            });
            this.cartItems = "";
            this.total = 0;
        },
    },
    mounted() {
        this.listCartItems();
    },
};
</script>
