const Home = () => {
     
     const clickButton = (e) => {
          console.log('Hello user', e)
     }

     const clickMeAgain = (name, e) => {
          console.log(name, e)
     }

     return ( 
          <div className="home">
               <h2>Home Page</h2>
               <button onClick={clickButton}>Click me</button>

               <button onClick={(e) => {
                    clickMeAgain('clicked agian', e.shiftKey)
               }}>click me again</button>

          </div>
      );
}
 
export default Home;