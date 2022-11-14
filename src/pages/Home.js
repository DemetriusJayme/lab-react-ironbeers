import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  return (
    <div>
      <button type="button" Link="./Beers.js">
        AllBeers
      </button>
      <button type="button" Link="./RandomBeer.js">
        Random Beers
      </button>
      <button type="button" Link="./NewBeer.js">
        New Beer
      </button>
    </div>
  );
}

export default Home;
