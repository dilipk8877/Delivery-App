import { combineReducers } from "redux";
import ChangeState  from "../features/changeState/ChangeState";
import usersSlice from "../features/customer/CustomerSlice";
import dashboard from "../features/Dashboard/DashboardSlice";
import merchantSlice from "../features/Merchants/merchantSlice";
import { Authreducer } from "../features/userreducer";
import AllOrdersSlice from "../features/Orders/OrderSlice";
import PromoSlice from "../features/Promocode/PromocodeSlice";
import loginSlice from "../features/Login/loginSlice";
import returnRequestSlice from "../features/ReturnRequest/ReturnRequest";
import cancelOrderSlice from "../features/CancelRequest/CancelRequest";
import sideNavSlice from "src/features/sideNav/sideNavSlice";
import RouteSlice from "src/features/Route/RouteSlice";
import teamsSlice from "src/features/teams/TeamSlice"
import AgentSlice from "src/features/agents/AgentSlice";
import ManagerSlice from "src/features/manageManager/ManagerSlice";
import GeoFenceSlice from "src/features/geoFence/GeoFenceSlice";
import autoAllocationSlice from "src/features/autoAllocation/AutoAllocation"
import PayoutSlice from "src/features/payout/PayoutSlice";
import pricingRuleSlice from "src/features/pricingRule/PricingSLice"
import MobileBannerSlice from "src/features/mobileBanner/MobileBannerSlice";
import dispDashboardDetailSlice from "src/features/dispatcherDashboard/DispatcherDashboard"
import ProfileSlice from "src/features/profile/ProfileSlice";

const rootReducer = combineReducers({
  user: Authreducer,
  promo: PromoSlice,
  nav: ChangeState,
  users: usersSlice,
  merchants: merchantSlice,
  dashboard: dashboard,
  orders: AllOrdersSlice,
  logins: loginSlice,
  returnRequest: returnRequestSlice,
  cancelOrder: cancelOrderSlice,
  sideNav: sideNavSlice,
  route:RouteSlice,
  team:teamsSlice,
  agent:AgentSlice,
  manager:ManagerSlice,
  geoFen:GeoFenceSlice,
  autoAll:autoAllocationSlice,
  payout:PayoutSlice,
  pricingRule:pricingRuleSlice,
  mobileBanner:MobileBannerSlice,
  dashboardDeatils:dispDashboardDetailSlice,
  profile:ProfileSlice

});

export default rootReducer;
