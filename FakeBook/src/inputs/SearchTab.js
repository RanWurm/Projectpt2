
function SearchTab({id,type="text",holder = "search in FakeBook"}){
	return(   
		<div>
		<input
		  className = {id}
<<<<<<< HEAD
		  type="text"
		  placeholder="Search in FakeBook"
=======
		  type={type}
		  placeholder= {holder}
>>>>>>> 722a639b4fde9c64f6aa85b460549da11a9d89e3
		 
		/>
	  </div>)
	
} export default SearchTab;