import React from "react";
import Section from "../components/Section";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";
import ProfileMenu from "../components/ProfileMenu";
import ProfileMain from "../components/ProfileMain";
import ProfileOrther from "../components/ProfileOrther";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import AddAddress from "../components/AddAddress";
import AddProduct from "../components/AddProduct";
import AddCategory from "../components/AddCategory";
import AddPayment from "../components/AddPayment";
import CustomerOrderTable from "../components/CustomerOrderTable";
import CustomerOrderItem from "../components/CustomerOrderItem";

const CardProfile = styled.div`
  .container {
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin: 0 auto 200px;
  }
`;

function Profile() {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <CardProfile>
        <Section>
          <Sidebar />
          <div className="container">
            <ProfileMenu />
            <Route exact path={path} component={ProfileMain} />
            <Route path={`${path}/address`} component={AddAddress} />
            <Route path={`${path}/addpayment`} component={AddPayment} />
            <Route exact path={`${path}/addproduct`} component={AddProduct} />
            <Route path={`${path}/addproduct/addcategory`} component={AddCategory} />
            <Route path={`${path}/customerorder/:orderId`} component={CustomerOrderItem} />
            <Route path={`${path}/customerorder`} exact component={CustomerOrderTable} />
            <ProfileOrther />
          </div>
        </Section>
      </CardProfile>
    </Switch>
  );
}

export default Profile;
