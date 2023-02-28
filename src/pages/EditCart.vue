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
                        <th scope="col" class="px-6 py-3">Tình trạng</th>
                        <th scope="col" class="px-6 py-3">Action</th>
                    </tr>
                </thead>
                <tbody
                    v-for="cart in cartArr.slice(cartArr.length - 1)"
                    :key="cart.id"
                >
                    <tr class="bg-white border-b" v-if="!cart.paid">
                        <th
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                        >
                            <tr
                                class="bg-white border-b"
                                v-for="(item, index) in cart.items"
                                :key="index"
                            >
                                {{
                                    item.name
                                }}
                            </tr>
                        </th>
                        <td class="px-6 py-4">$ {{ cart.total }}</td>
                        <td class="px-6 py-4">
                            {{
                                cart.paid ? "Đã thanh toán" : "Chưa thanh toán"
                            }}
                        </td>
                        <td class="px-6 py-4">
                            <button
                                @click="setData"
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
import { mapGetters, mapActions } from "vuex";

export default {
    created() {
        this.getCartArr();
    },
    computed: {
        ...mapGetters(["cartArr"]),
    },
    methods: {
        ...mapActions(["getCartArr"]),
        setData() {
            this.cartArr = "";
        },
    },
};
</script>
