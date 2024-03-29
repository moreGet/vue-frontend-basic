import { createStore } from 'vuex'
import persistedstate from 'vuex-persistedstate' // 새로고침을 하여도 store가 유지

const store = createStore({
  state () { // state 함수 내부의 변수는 반드시 mutations 내부 함수 구현을 통해 변경 가능하다.
    return {
      user: {},
      count: 0,
      cart: [
        { product_id: 1, product_name: '아이폰 거치대', category: 'A' },
        { product_id: 2, product_name: '블루투스 마우스', category: 'B' }
      ]
    }
  },
  mutations: {
    increment (state) {
      state.count = state.count + 1
    },
    user (state, data) {
      state.user = data
    }
  },
  plugins: [
    persistedstate({ paths: ['user'] }) // 새로고침을 하여도 store(increment)가 유지
  ],
  getters: {
    cartCount: (state) => {
      return state.cart.length
    },
    productACount: (state) => {
      return state.cart.filter(p => p.category === 'A').length
    }
  }
})

export default store
