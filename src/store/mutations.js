// 直接更新state多个方法的对象
import Vue from 'vue'
import {
  RECERVE_ADDRESS,
  CHANGE_LOCATON,
  GOT_ADDRESS,
  GET_RESTAURANT,
  ADD_CART,
  INIT_CART,
  DELETE_CART,
  CURRENT_CART
} from './mutation-types'
export default {
  [RECERVE_ADDRESS](state, address) {
    state.address = { ...address }
  },
  [CHANGE_LOCATON](state, address) {
    state.address = { ...address }
  },
  [GOT_ADDRESS](state, boolean) {
    state.gotAddress = boolean
  },
  [GET_RESTAURANT](state, data) {
    state.restaurant = data
  },
  [ADD_CART](state, food) {
    const cart = state.cart
    if (cart[food.restaurant_id]) {
      let foodInfo = cart[food.restaurant_id][food.food_id]
      if (foodInfo) {
        foodInfo['rep']++
      }
      else {
        foodInfo = {}
        food['rep'] = 1
        foodInfo[food.food_id] = food
        cart[food.restaurant_id] = { ...cart[food.restaurant_id], ...foodInfo }
      }
    }
    else {
      cart[food.restaurant_id] = {}
      food['rep'] = 1
      cart[food.restaurant_id][food.food_id] = food
    }
    state.cart = { ...cart }
    localStorage.setItem('cartList',JSON.stringify(state.cart))
    // const index=cart.findIndex(value=>
    //   value._id==food._id
    // )
    // if(index!=-1)
    // {
    //   cart[index]['rep']++
    // }
    // else{
    //   food['rep']=1
    //   cart.push(food)
    // }
    // state.cart=[...cart] //更新State
    // localStorage.setItem('cartList',JSON.stringify(state.cart))
  },

  [INIT_CART](state) {
    const data = JSON.parse(localStorage.getItem('cartList'))
    if (data != null) {
      state.cart = data
    }
    else {
      state.cart = []
    }
  },
  [DELETE_CART](state, food) {
    const cart = state.cart
    if(cart[food.restaurant_id][food.food_id]['rep']===1){
      Vue.delete(cart[food.restaurant_id],food.food_id)
      if(Object.keys(cart[food.restaurant_id]).length===0)
        delete cart[food.restaurant_id]
    }
    else{
      cart[food.restaurant_id][food.food_id]['rep']--
    }
    state.cart = { ...cart }
    localStorage.setItem('cartList',JSON.stringify(state.cart))
  },
  [CURRENT_CART](state,data){
    state.currentCart=data
  }
}
