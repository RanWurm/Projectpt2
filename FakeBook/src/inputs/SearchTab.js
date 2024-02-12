import './SearchTab.css'
function SearchTab({id}){
	return(   
		<div>
		<input
		  className = {id}
		  type="text"
		  placeholder="Search in FakeBook"
		 
		/>
	  </div>)
	
} export default SearchTab;