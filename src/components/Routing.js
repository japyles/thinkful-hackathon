import React from "react";
import {Routes, Route} from "react-router-dom";
import SearchResults from "./SearchResults";
import SignIn from "./SignIn";

function Routing() {
    return (
    <Routes>
        <Route exact path="/" />
        <Route path="/search-results" element={<SearchResults />}/>
    </Routes>
    );
}

export default Routing;