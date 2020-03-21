export default{
   address:state=>state.address,
   gotAddress: state => state.gotAddress,
   totalPrice:(state)=>{
      let price=0
      for(let i in state.currentCart) {
         price+=state.currentCart[i]['rep']*state.currentCart[i]['price']
      }
      return price
   },
   totalCount:(state)=>{ 
      let count=0
      for(let i in state.currentCart) {
         count+=state.currentCart[i]['rep']
      }
      return count
   }
}