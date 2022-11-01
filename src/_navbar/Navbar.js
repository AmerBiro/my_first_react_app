const Navbar = () => {
     const home = "/"
     const create = "/create"
     
     return ( 
          <nav className="navbar">
               <h1>Amer's app</h1>
               <div className="links">
                    <a href={home}>Home</a>
                    <a href={create} style={{
                         color: 'white',
                         backgroundColor: '#f1356d',
                         borderRadius: '8px'
                    }}>New blog</a>
               </div>
          </nav>
      );
}
 
export default Navbar;