<template>
    <div>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500">
                <caption
                    class="p-5 text-lg font-semibold text-left text-gray-900 bg-white"
                >
                    Lịch sử đặt hàng
                </caption>
                <thead
                    class="text-xs text-gray-700 uppercase bg-gray-100 border-b"
                >
                    <tr>
                        <th scope="col" class="px-6 py-3">Giỏ hàng</th>
                        <th scope="col" class="px-6 py-3">Tổng tiền</th>
                        <th scope="col" class="px-6 py-3">Tình trạng</th>
                        <th scope="col" class="px-6 py-3">Ngày đặt</th>
                    </tr>
                </thead>
                <tbody v-for="cart in cartArr" :key="cart.id">
                    <tr class="bg-white border-b" v-if="cart.paid">
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
                            {{ formatDate(cart.createdAt) }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import moment from "moment";
export default {
    created() {
        this.getCartArr();
    },
    computed: {
        ...mapGetters(["cartArr"]),
    },
    methods: {
        ...mapActions(["getCartArr"]),
        formatDate(date) {
            return moment(date).format("DD-MM-YYYY");
        },
    },
};
</script>
