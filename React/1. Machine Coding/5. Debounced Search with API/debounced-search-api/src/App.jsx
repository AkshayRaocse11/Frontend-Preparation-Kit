import './App.css'
import PostList from "./components/PostList.jsx";
import React from "react";
import useDebouncedSearch from "./hooks/useDebounce.js";

function App() {
	const [search, setSearch] = React.useState("");
	const [postUserData, setPostUserData] = React.useState([]);
	const [loading, setLoading] = React.useState(false);
	const {debounced} = useDebouncedSearch(apiSearch,500);
	
	// search with debounce api call
	// data handling and rendering
	// api calling states
	// possible basic pagination

	const handleChange = (e) => {
		const q = e.target.value;
		setSearch(q);
		debounced(q);
	};

	async function apiSearch(search){
		try {
			setLoading(true);
			const response = await fetch(`https://dummyjson.com/users/search?q=${search}&limit=20`);
			const data = await response.json();
			setPostUserData(data.users);
			setLoading(false);
		}catch(err){
			setLoading(false);
		}
	}
	
  return (
	  <>
		  <div className="search-container">
			  <label className="search-label">Debounced Search with API</label>
			  <div className="search-box">
				  <button className="search-icon" aria-hidden="true">🔍</button>
				  <input
					  className="search-input"
					  type="text"
					  value={search}
					  onChange={(e) => {
						  handleChange(e)
					  }}
					  placeholder="Search for your search..." />
				  <button className="clear-btn" aria-label="Clear" title="Clear">✕</button>
				  <div className="loader" aria-hidden="true"></div>
			  </div>
		  </div>

		  {loading ? (
			  <span>Loading...</span>
		  ) : postUserData.length === 0 ? (
			  <span>No Search Found</span>
		  ) : (
			  postUserData.map((post) => (
				  <PostList key={post.id}
					  name={`${post.firstName}#${post.lastName}`}
					  gender={post.gender}
					  profileImage={post.image}
				  />
			  ))
		  )}

	  </>
  )
}

export default App
