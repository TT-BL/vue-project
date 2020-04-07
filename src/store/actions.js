// 通过mutation间接更新state的多个方法的对象
import { 
  RECERVE_ADDRESS,
  CHANGE_LOCATON,
  GOT_ADDRESS,
  GET_RESTAURANT,
  ADD_CART,
  INIT_CART,
  DELETE_CART,
  CURRENT_CART,
  SAVE_DELIVERY_ADDRESS,
  ALL_DELIVERY_ADDRESS,
  CLEAR_DELIVERY_ADDRESS,
  UPDATE_DELIVERY_ADDRESS,
  DELIVERY_ADDRESS
} from './mutation-types'
import { location,getRestaurant,getAddress} from '../api/index'

export default {

  // 获取当前位置
  async getLocation ({ commit, state }) {
    const { latitude, longitude,} = state
    const geohash = latitude + ' , ' + longitude
    // console.log(geohash)
    const result = await location()
    if (result.data.status === 200) {
      const data = result.data.data
      commit(RECERVE_ADDRESS, {...data.location})
      commit(GOT_ADDRESS,true)
    }
  },
  // 切换位置
  changeLocation({commit},address){
   const location={city:address.title,...address.location}
   commit(CHANGE_LOCATON,location)
   commit(GOT_ADDRESS,true)
  },

  //获取商家详细信息
  async getShop({commit},restaurant_id)
  {
    const result=await getRestaurant(restaurant_id)
    if(result.data.status===1){
      commit(GET_RESTAURANT,result.data.data)
    }
  },

  //加入购物车
  addCart({commit},food){
    commit(ADD_CART,food)
  },

  //初始化cart
  initCart({commit}){
    commit(INIT_CART)
  },

  //商品数量减一
  deleteCart({commit},food){
    commit(DELETE_CART,food)
  },
  //获取当前商家购物车信息
  currentCart({commit,state},restaurant_id)
  {
    let currentcart
    if(state.cart[restaurant_id]){
      currentcart=state.cart[restaurant_id]
    }
    else{
      currentcart={}
    }
    commit(CURRENT_CART,currentcart)
  },
  //保存改变的收货位置
  addDelivery({commit},address){
    const deliverAddress={city:address.title,...address.location}
    commit(SAVE_DELIVERY_ADDRESS,deliverAddress)
  },
  //清空已保存改变的收货位置 
  clearDelivery({commit}){
    commit(CLEAR_DELIVERY_ADDRESS)
  },
  //获取用户所有的收货地址
  getAllAddress({commit}){
    let address=[]
    getAddress().then(response=>{
      console.log(response)
      if(response.data.status==200)
      {
        address=response.data.address
        commit(ALL_DELIVERY_ADDRESS,address)
      }
    })
  },
  updateAddress({commit},data){
    commit(UPDATE_DELIVERY_ADDRESS,data)
  },
  deliverAddress({commit},data){
    commit(DELIVERY_ADDRESS,data)
  }
}
