import ConfirmationTransfer from './screen/confirmation-transfer';
import OrderList from './screen/order-list';
import Home from './screen/home';



export default routes = () => {
    return [
        {
            screenName:"home",
            title:"Home",
            component:Home,
            hideNavBar:true,
            initial:true
        },
        {
            screenName:"OrderList",
            title:"Order List",
            component:OrderList,
            hideNavBar:true,
        },
        {
            screenName:"ConfirmTransfer",
            title:"Confirmation Transfer",
            component:ConfirmationTransfer,
            hideNavBar:true,
        }
    ]
}