// action : {
//   type,
//   payload,
// }
const intitialState = {
    balance: 0
  }
  
  const balanceReducer = (state=intitialState, action) => {
    switch (action.type) {
      case "add1000":
        return {
          balance: state.balance + 1000
        }

      case "add5000": 
        return {
          balance: state.balance + 5000
        }

      case "withdraw1000":
        const confirmation = window.confirm('Are u sure?');
        if (confirmation){
          if (state.balance < 1000){
            alert('not enough money')
          }
          else {
            alert('succeed');
            return {
              balance: state.balance - 1000
            }
          }
        } 
      default:
        return state
    }
  }
  
  export default balanceReducer