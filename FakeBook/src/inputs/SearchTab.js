
function SearchTab({id,type="text",holder = "Search in FakeBook"}){
	return(   
		<div>
		<input
		  className = {id}
		  type={type}
		  placeholder= {holder}
		/>
	  </div>)
	
} export default SearchTab;