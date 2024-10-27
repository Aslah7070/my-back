const loadHomePage=async(req,res)=>{
    try {
        return res.render("home")
    } catch (error) {
        console.log("home page not found");
        res.status(500).send("server error")
        
    }
}
const pageNotFound = async (req, res) => {
    try {
        console.log("Not found");
        res.status(404).render("page-404"); // Use 404 status code explicitly
    } catch (error) {
        console.error("Error rendering page:", error);
        res.status(500).render("error"); // Handle unexpected errors
    }
};

// const pageNotFound=async(req,res)=>{
// try {
//     res.render("page-404")
//     console.log("not found");
    
// } catch (error) {
//     res.redirect("/pageNotFound")
// }
// }


module.exports={loadHomePage,pageNotFound}