import React from "react"
import "./List.css"

const list = (props) =>
    props.arr.map((x) => {
        return ((x.id % 2 === 0) ? 
                    <div className="outgoing_msg">
                        <div className="sent_msg">
                            <p>{x.text}</p>
                        </div>
                    </div> : 
                    <div className="incoming_msg">
                        <div className="received_msg">
                            <div className="received_withd_msg">
                                <p>{x.text}</p>
                            </div>
                        </div>
                    </div>)
      })

export default list;

