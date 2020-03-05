// 直接更新state多个方法的对象
import { 
  RECERVE_ADDRESS,
  CHANGE_LOCATON,
  GET_RESTAURANTS,
  GOT_ADDRESS
} from './mutation-types'
export default {
  [RECERVE_ADDRESS] (state,address ) {
    state.address = {...address}
  },
  [CHANGE_LOCATON](state,address){
    state.address = {...address}
  },
  [GET_RESTAURANTS](state,data){
    state.restaurants=data;
  },
  [GOT_ADDRESS](state,boolean){
    state.gotAddress=boolean
  }
}
