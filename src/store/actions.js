// 通过mutation间接更新state的多个方法的对象
import { 
  RECERVE_ADDRESS,
  CHANGE_LOCATON,
  GOT_ADDRESS,
  GET_RESTAURANT
} from './mutation-types'
import { location,getRestaurant} from '../api'

export default {

  // 获取当前位置
  async getLocation ({ commit, state }) {
    const { latitude, longitude,} = state
    const geohash = latitude + ' , ' + longitude
    const result = await location(geohash)
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
  }
}
