import './SearchTab.css'
function SearchTab({id}){
	return(   
		<div>
		<input
		  className = {id}
		  type="text"
		  placeholder="search in FakeBook"
		 
		/>
	  </div>)
	
} export default SearchTab;