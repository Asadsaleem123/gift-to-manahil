import React from "react";
import data from "../data";
let ImageContainer =""
const prevent = (e)=>{
    e.preventDefault()
}
function myFunction(a , b){
   let aliceScore = 0
   let bobScore = 0
   let arr = []
   for(let i = 0 ; i<a.length ; i++){
    if(a[i] > b[i]){
        aliceScore +=1
        
    }else if(a[i] < b[i]){
        bobScore += 1
    }
   }
arr.push(aliceScore)
arr.push(bobScore)
return arr
}

function getRandomImage() {
    const Memes = data.data.memes.map((Meme)=>{
     return Meme
    })
    let randomIndex = Math.floor(Math.random()*Memes.length)
    let randomMeme = Memes[randomIndex]
    const randomMemeUrl = randomMeme.url
    const randomMemeText = randomMeme.name.split(" ")
    const randomMemeTextOne = randomMemeText[1]
    document.getElementById("img--container").innerHTML = `<img src = ${randomMemeUrl} />`
  }
export default function Main(){
    console.log(myFunction([1,2,3] , [4,5,6]))
    const [imageText , setImageText ] = React.useState({
        topText : "",
        bottomText : ""
    })
    console.log(imageText.topText)
    function handleChange(event){
      setImageText(preText=>{
        const {name,value} = event.target
        console.log(name)
        console.log(value)
        return {
            ...preText,
            [name] : value
        }
      })
    }
    return (
        <div className="main--container">
           <form onSubmit={prevent}>
            <div className="inputs--container">
            <input
            placeholder="image top text"
            name="topText"
             type="text"
             value={imageText.topText}
             onChange={handleChange}
             />
              <input 
              placeholder="image bottom text"
              name = "bottomText"
              type="text"
              value={imageText.bottomText}
              onChange={handleChange}
               />
            </div>
            <div  className="btn--container">
           <button onClick={getRandomImage}>Get a new meme Image</button>
               </div> 
           </form>
           <h1 className="top-text">{imageText.topText}</h1>
               <h1 className="bottom-text">{imageText.bottomText}</h1>
            <div className="meme--container" id="img--container">
               <img src="https://i.imgflip.com/1bhf.jpg" />
            </div>
        </div>
      
    );
}





/*  
 ImageContainer += data.data.memes.map((item)=>{
     return (
     <div key={item.id} className="img--container">
         <img src = {item.url} alt="emotions"/>
     </div>
     )
    })
   return ImageContainer
 
*/