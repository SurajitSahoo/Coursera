import React,{useEffect} from 'react';
import {Button} from 'reactstrap';
import { ToastContainer,toast } from 'react-toastify';
const Home=()=>
{
  useEffect(()=>{
          document.title= "Home || Sourse from Surajit";
      },[]);

    return(
      <div style={{background: "silver",padding: 20}}>
        <header className='text-center'>
        <ToastContainer/>
        <h1>Sourse From Surajit</h1>
        <p>In this website you can learn differnt coding language course notes like java,python,c.</p>
        <hr/>
        <p>C is a general-purpose, procedural programming language developed by Dennis Ritchie at Bell Laboratories in 1972. It is renowned for its efficiency, flexibility, and ability to provide low-level access to system memory, making it ideal for system programming tasks.</p>
        <hr/>
        <p>Python is a high-level, interpreted, general-purpose programming language renowned for its readability and versatility. Created by Guido van Rossum and first released in 1991, it has become one of the most popular programming languages globally.</p>
        <hr/>
        <p>Java is a programming language and computing platform first released by Sun Microsystems in 1995. It has evolved from humble beginnings to power a large share of today's digital world, by providing the reliable platform upon which many services and applications are built.</p>
        </header>
      
      </div>
    
    )
}
export default Home;