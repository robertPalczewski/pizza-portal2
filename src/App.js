import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Dashboard from './components/views/Dashboard/Dashboard';
import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import Waiter from './components/views/Waiter/Waiter';
import Kitchen from './components/views/Kitchen/Kitchen';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import TablesBooking from './components/views/TablesBooking/TablesBooking';
import TablesBookingNew from './components/views/TablesBookingNew/TablesBookingNew';
import TablesEvent from './components/views/TablesEvent/TablesEvent';
import TablesEventNew from './components/views/TablesEventNew/TablesEventNew';
import WaiterOrder from './components/views/WaiterOrder/WaiterOrder';
import WaiterOrderNew from './components/views/WaiterOrderNew/WaiterOrderNew';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={'/panel'}>
        <MainLayout>
          <Switch>
            <Route exact path={`${process.env.PUBLIC_URL}/`} component={Dashboard} />
            <Route exact path={`${process.env.PUBLIC_URL}/login`} component={Login} />
            <Route path={`${process.env.PUBLIC_URL}/tables`} component={Tables} />
            <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/:id`} component={TablesBooking} />
            <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/new`} component={TablesBookingNew} />
            <Route exact path={`${process.env.PUBLIC_URL}/tables/event/:id`} component={TablesEvent} />
            <Route exact path={`${process.env.PUBLIC_URL}/tables/event/new`} component={TablesEventNew} />
            <Route path={`${process.env.PUBLIC_URL}/waiter`} component={Waiter} />
            <Route exact path={`${process.env.PUBLIC_URL}/waiter/order/:id`} component={WaiterOrder} />
            <Route exact path={`${process.env.PUBLIC_URL}/waiter/order/new`} component={WaiterOrderNew} />
            <Route path={`${process.env.PUBLIC_URL}/kitchen`} component={Kitchen} />
          </Switch>
        </MainLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
