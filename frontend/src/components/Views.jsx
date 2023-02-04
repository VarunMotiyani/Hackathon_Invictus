import { Text } from "@chakra-ui/layout";
import { useContext } from "react";
import { AccountContext } from "./AccountContext";

import { Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import SignUp from "./Login/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "./Dashboard/Dashboard";
// import App1 from "./Uploaders/App1";
import Table from "./AgGrid/Table"
// import Final from "./PdfPage/Final"

const Views = () => {
  const { user } = useContext(AccountContext);
  return user.loggedIn === null ? (
    <Text>Loading...</Text>
  ) : (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<SignUp />} />
      
      <Route element={<PrivateRoutes />}>
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/agrid" element={<Table />} />
      {/* <Route path="/agrid/:name" element={<Final />} /> */}
      </Route>
      <Route path="*" element={<Login />} />
    </Routes>
  );
};

export default Views;