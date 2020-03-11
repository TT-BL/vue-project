// 直接更新state多个方法的对象
import { 
  RECERVE_ADDRESS,
  CHANGE_LOCATON,
  GOT_ADDRESS,
  GET_RESTAURANT
} from './mutation-types'
export default {
  [RECERVE_ADDRESS] (state,address ) {
    state.address = {...address}
  },
  [CHANGE_LOCATON](state,address){
    state.address = {...address}
  },
  [GOT_ADDRESS](state,boolean){
    state.gotAddress=boolean
  },
  [GET_RESTAURANT](state,data){
    state.restaurant=data
  }
}
