import React from 'react'

function Card(username, btnText="visit me") {
    // console.log("props", props)
    console.log(username)
    return (
        <>
        <div className="bg-white text-red-600">Card</div>
        <button className={btnText} ></button>
        </>
    )
}

export default Card