import './App.css';
import React, { useEffect,useState ,Fragment }  from "react"
import Chat from "./Chat/Chat"
import "amazon-connect-chatjs"
import "amazon-connect-streams";
let con = window.connect


function App() {

  
  useEffect(() => {
    
    const script = document.createElement('script');
    script.src = "N:/React/usecase/src/amazon-connect-chat-interface.js";
    script.async = true;
    document.body.appendChild(script);
  return () => {
      document.body.removeChild(script);
    }
  }, []);

  let [unclicked,clicked]= useState({
    booleean : false,
    some :false,
    flag:0
  })


  
  const toggleChat= () =>{
    const Show = unclicked.booleean ;
    clicked({...unclicked,booleean : !Show});
    
  //   console.log(connect.chat)
    
  //   connect.ChatInterface.init({
  //     containerId: 'root'
  // });
}

  const closeChatWindow = () =>{
    const close = unclicked.booleean
    clicked({...unclicked,booleean : !close})
  }

  let chatWindow = null
  
  if(unclicked.booleean)
  {
    chatWindow = <Chat closeChat={closeChatWindow}></Chat>
  }

  const isLoaded = window.connect && window.connect.ChatSession;

  var today = new Date();
  var day = today.getDay(); 
  var hours = today.getHours();
  //console.log(day +" " + hours)
  if((day == 6 || day == 0 || (hours<9 && hours>21)) && unclicked.flag == 0 )
  {
    clicked({...unclicked,some:true,flag:1})
  }
  console.log(unclicked.some)



  return (
    <div className="App"> 
      <button className="open-button" id="chat" onClick={toggleChat} disabled={unclicked.some}>Chat</button>
      {chatWindow}
      <Fragment>
        <h1>react-amazon-connect-chatjs</h1>
        {isLoaded ? "loaded!" : "failed"}
      </Fragment>
    </div>
  );
}

export default App;



// import './App.css';
// import React, { useState } from 'react';

// function App() {
//   let [openflag, setopenflag] = useState({toggle:false,flag:0,chat:false});

//   const chatwindow = () =>{
//     setopenflag({...openflag,chat:true})
//   }


//   var today = new Date();
//   var day = today.getDay();
//   var hours = today.getHours();
//   if((day == 6 || day == 1 || (hours<9 && hours>21)) && openflag.flag == 0)
//     {
//       setopenflag({toggle:true,flag : 1,chat:false})
//     }

//   return (
//       <div>
//           <button  className="open-button" disabled = {openflag.toggle} onClick={chatwindow}>
//             Click here to chat
//           </button> 
//       <div className= {"chat-comp" + (openflag.chat ? '' : '-hidden')}> 
//               <iframe scrolling="no" src="https://reactbucket-1.s3.amazonaws.com/index.html"></iframe>  
//       </div>
//     </div>
//   ); 
// }

// export default App;

