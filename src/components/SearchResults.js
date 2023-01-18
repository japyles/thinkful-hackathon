import React from "react";
import "../styles/SearchResults.module.css";
import { CiSearch } from "react-icons/ci";
import {CiLocationOn} from "react-icons/ci"
import {IoOptionsOutline} from "react-icons/io5";

function SearchResults({ formData, handleChange, handleSubmit }) {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                    <input
                        id="main_search"
                        name="main_search"
                        type="text"
                        className="main-search"
                        onChange={handleChange}
                        placeholder="title or tool..."
                    />
                    <input
                        id="location_search"
                        name="location_search"
                        type="text"
                        className="location-search"
                        onChange={handleChange}
                        placeholder="city, state, zip code..."
                    />
                    
                    <button type="location"> <CiLocationOn /> </button>
                    <button type="submit"> <CiSearch /> </button>
                    <button type="filter"><IoOptionsOutline /></button>
            </form>

            <h2>0 Results found</h2>
        </div>
    );
}
export default SearchResults;