import React, { useState } from "react"
import List from "../List/List"
import "./Chat.css"

const Chat = (props) =>{


    const [data,thedata] = useState({
        msg : " ",
        index : 0,
        arrayy : []
    })

    const dataBind = (event) =>{
        thedata({...data,msg : event.target.value})
    }

    let number = 0
    let newarray = []

    const SendMessage = () => {
        number = data.index
        newarray = data.arrayy
        newarray[number] = {id:data.index,text:data.msg}

        thedata({...data,
            arrayy:newarray,
            index:data.index+1,
            msg : " "
        })

        var objDiv = document.getElementById("scroll");
        objDiv.scrollTop = objDiv.scrollHeight;
    }
    console.log(data.arrayy)

    // window.setInterval(function() {
    //     var elem = document.getElementById('scroll');
    //     elem.scrollTop = elem.scrollHeight;
    //   },5000);

    


    return(
        <div className="chat-popup">
            <div className="form-container">
                <div className="modal-header">
                    <span className="close" onClick={props.closeChat}>&times;</span>
                    <h1>Chat</h1>
                </div>
                
                <hr/>
                <div className="displaymsg" id="scroll">
                    <List arr={data.arrayy} />
                </div>

                <hr/>
                <div className="type_msg">
                    <input type="text" className="msg" onChange={dataBind} value={data.msg} />
                    <button className="sub" type="submit" onClick={SendMessage}>Send</button>
                </div>               
            </div>
        </div>
    )
}

export default Chat