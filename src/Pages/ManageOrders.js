import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import SubHeader from "../Components/SubHeader";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../Styles/manageorders.css";
function ManageOrders() {
  return (
    <div>
      <Header />
      <SubHeader />
      <div className="orders-container">
        <h1>Manage Orders</h1>
        <div className="tabs-container">
          <Tabs>
            <TabList>
              <Tab>New</Tab>
              <Tab>Active</Tab>
              <Tab>Completed</Tab>
              <Tab>Cancelled</Tab>
            </TabList>
            <TabPanel>
              <div className="tabpanel-container">
                <div className="table-heading">New Orders</div>
                <div className="order-table">
                  <div className="table-row th">Buyer</div>
                  <div className="table-row th">Gig Title</div>
                  <div className="table-row th">Due On</div>
                  <div className="table-row th">Total</div>
                  <div className="table-row th">Description</div>
                  <div className="table-row th">Status</div>
                </div>
                <div className="table-foot">No New orders to show</div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="tabpanel-container">
                <div className="table-heading">Active Orders</div>
                <div className="order-table">
                  <div className="table-row th">Buyer</div>
                  <div className="table-row th">Gig Title</div>
                  <div className="table-row th">Due On</div>
                  <div className="table-row th">Total</div>
                  <div className="table-row th">Description</div>
                  <div className="table-row th">Status</div>
                </div>
                <div className="table-foot">No Active orders to show</div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="tabpanel-container">
                <div className="table-heading">Completed Orders</div>
                <div className="order-table">
                  <div className="table-row th">Buyer</div>
                  <div className="table-row th">Gig Title</div>
                  <div className="table-row th">Due On</div>
                  <div className="table-row th">Total</div>
                  <div className="table-row th">Description</div>
                  <div className="table-row th">Status</div>
                </div>
                <div className="table-foot">No Completed orders to show</div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="tabpanel-container">
                <div className="table-heading">Cancelled Orders</div>
                <div className="order-table">
                  <div className="table-row th">Buyer</div>
                  <div className="table-row th">Gig Title</div>
                  <div className="table-row th">Due On</div>
                  <div className="table-row th">Total</div>
                  <div className="table-row th">Description</div>
                  <div className="table-row th">Status</div>
                </div>
                <div className="table-foot">No Cancelled orders to show</div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default ManageOrders;
