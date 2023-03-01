import Vue from "vue";
import Vuex from "vuex";
import {
    getCartList,
    getFoodListServ,
    postCart,
    putCart,
} from "../services/foodServices";

Vue.use(Vuex);

const storeData = {
    state: {
        foods: [],
        carts: [],
        cartHistory: [],
        cartArr: [],
        editCart: [],
    },
    getters: {
        foods: (state) => state.foods,
        carts: (state) => state.carts,
        cartArr: (state) => state.cartArr,
        paid: (state) => state.paid,
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
        async putCart({ commit }, paid) {
            try {
                await putCart(paid);
                commit("EDIT_CART", paid);
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
        EDIT_CART(state, editCart) {
            state.editCart = editCart;
        },
    },
};

const store = new Vuex.Store(storeData);
export default store;
