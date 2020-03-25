import { _get,_post} from './ajax'

// 定位当前位置
export const location = (data) => {
  const req = {
    data,
    url: '/v1/location'
  }
  return _get(req)
}
//搜索位置
export const suggestion=(data)=>{
  const req = {
    data,
    url: 'v1/suggestion'
  }
  return _get(req)
}
//获取商家信息
export const getRestaurants=(data)=>{
  const req = {
    data,
    url: 'v1/restaurants'
  }
  return _get(req)
}
//商家搜索
export const searchShops=(data)=>{
  const req = {
    data,
    url: 'v1/search/restaurant'
  }
  return _get(req)
}
//获取商家详细信息
export const getRestaurant=(data)=>{
  const req={
    url:`v1/restaurant/${data}`
  }
  return _get(req)
}
//获取食物信息
export const getFoods=(data)=>{
  const req={
    url:`v1/food/${data}`
  }
  return _get(req)
}
//获取商家评论信息
export const restaurantComment=(data)=>{
  const req={
    data,
    url: 'v1/comment'
  }
  return _get(req)
}
//登录
export const login=(data)=>{
  const req={
    data,
    url:'admin/user_login'
  }
  return _post(req)
}
//获取我的订单
export const order=(data)=>{
  const req={
    data,
    url:'/v1/orders'
  }
  return _get(req)
}
