import { useState } from "react"

const Home = () => {
     let [name, setName] = useState('Amer')

     let [status, setStatus] = useState(false)
     let [num, setNum] = useState()

     const clickButton = (e) => {
          console.log('Hello user', e)
     }

     const clickMeAgain = (name, e) => {
          console.log(name, e)
     }

     const changeName = (name) => {
          setName('new name')
     }

     const changeStatus = (num) => {
          if(status == false){
               setNum(0)
               setStatus(true)
          }else{
               setNum(1)
               setStatus(false)
          }
     }

     return ( 
          <div className="home">
               <h2>Home Page</h2>
               <button onClick={clickButton}>Click me</button>

               <button onClick={(e) => {
                    clickMeAgain('clicked agian', e.shiftKey)
               }}>click me again</button>

               <p>{name}</p>
               <button onClick={changeName}>change name</button>

               <p>Status = {num}</p>
               <button onClick={changeStatus}>change status</button>

          </div>
      );
}
 
export default Home;