
function App() {
 return (
    
      <div>
        <CradWrapper> 
          <div>
            Hii There 1
          </div>
        </CradWrapper>
        <CradWrapper>
        <div>
            Hii There 2
          </div>
        </CradWrapper>
        <CradWrapper>
        <div>
            Hii There 3
          </div>
        </CradWrapper>
       
        </div>
  )
}

// function TextComponent(){
//   return <div>
//     Hii There
//   </div>
// }

// function TextComponent2(){
//   return <div>
//     Hii There
//   </div>
// }

function CradWrapper({children}){
  //create a div which has a 

   return <div style={{border :"2px solid black"}}>
     {children}
     
   
   </div>

}




export default App
