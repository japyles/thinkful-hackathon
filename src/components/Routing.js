import React from "react";
import {Routes, Route} from "react-router-dom";
import SearchForm from "./SearchForm";
import SignIn from "./SignIn";

function Routing() {
    return (
    <Routes>
        <Route exact path="/" />
        {/* <Route path="/search-results" element={<SearchForm />}/> */}
    </Routes>
    );
}

export default Routing;