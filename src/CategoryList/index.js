const Categories = ({category,setCategory}) =>{
    const activeCategory = {
        backgroundColor:"yellow"
    }
 return(
   <div className="">
    <h2>Categories</h2>
    <button style={category == ""? activeCategory:null} onClick={()=>setCategory("")}> All </button>
    <button  style={category == "35"? activeCategory:null} onClick={()=>setCategory("35")}>Comedy</button>
    <button style={category == "28"? activeCategory:null}  onClick={()=>setCategory("28")}>Action</button>
    <button style={category == "10770"? activeCategory:null} onClick={()=>setCategory("10770")}>Arabic</button>
    <button style={category == "18"? activeCategory:null} onClick={()=>setCategory("18")}>Series</button>
   </div>
 )
}
export default Categories