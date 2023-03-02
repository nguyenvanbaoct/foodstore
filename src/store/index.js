import Vue from "vue";
import Vuex from "vuex";
import {
    getCartList,
    getFoodListServ,
    postCart,
} from "../services/foodServices";

Vue.use(Vuex);

const storeData = {
    state: {
        foods: [],
        carts: [],
        cartArr: [],
        cartPaidFalse: [],
    },
    getters: {
        foods: (state) => state.foods,
        carts: (state) => state.carts,
        cartArr: (state) => state.cartArr,
        cartPaidFalse: (state) => state.cartPaidFalse,
    },
    actions: {
        async getFoods({ commit }) {
            try {
                const result = await getFoodListServ();
                commit("SET_DATA", result.data);
            } catch (error) {
                console.log(error);
            }
        },
        async getCartArr({ commit }) {
            try {
                const result = await getCartList();
                commit("SET_DATA_CART", result.data);
            } catch (error) {
                console.log(error);
            }
        },
        async postCart({ commit }, dataCart) {
            try {
                await postCart(dataCart);
                commit("ADD_CART", dataCart);
                console.log("success", dataCart);
            } catch (error) {
                console.log(error);
            }
        },
    },
    mutations: {
        SET_DATA(state, foods) {
            state.foods = foods;
        },
        SET_DATA_CART(state, cartArr) {
            state.cartArr = cartArr;
        },
        ADD_CART(state, dataCart) {
            state.carts.push(dataCart);
        },
        SET_CART_PAID_FALSE(state, item) {
            state.cartPaidFalse = item;
        },
    },
};

const store = new Vuex.Store(storeData);
export default store;
