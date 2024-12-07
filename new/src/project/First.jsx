import React, { useState, useMemo } from "react";
 
function SearchList() {
  const [query, setQuery] = useState("");
  const items = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape"];
 
  
  return (
<div>
<h1>Search List</h1>
<input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

       
</div>
  );
}
 
export default SearchList;