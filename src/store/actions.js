// 通过mutation间接更新state的多个方法的对象
import { 
  RECERVE_ADDRESS,
  CHANGE_LOCATON,
  GET_RESTAURANTS,
  GOT_ADDRESS
} from './mutation-types'
import { location,getRestaurants} from '../api'

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

  //获取商家
  async getShops({commit,state}){
    const { address } = state
    const lng=address.lng
    const lat=address.lat
    const result=await getRestaurants({lng,lat})
    // console.log(result)
    if(result.data.status===200){
      commit(GET_RESTAURANTS,result.data.data)
    }
  },
}
