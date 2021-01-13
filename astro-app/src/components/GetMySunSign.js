import React from 'react'
// new box with sign in it AFTER CLICK
const GetMySunSign = (props) => {
    return (
        <div>
            <h2>Your Birthday:</h2>
            <br />
            <h3>this is ur birthdayyyyy {props.day} {props.month} {props.year}</h3>
            <div>
                <h2>Your sun sign is..</h2>
            </div>
        {/* <ReturnSunSignDiv month/>*/}

        </div>
    )
}
export default GetMySunSign;
// <GetMySunSign usr_day={} usr_mo={} usr_yr={} />


//get sunsign props binded, then display; 
//then get return props and go from there


// export const ReturnSunSignDiv = () => {
    
// const aries = [];
// const taurus = [];
// const gemini = [];
// const cancer = [];
// const leo = [];
// const virgo = [];
// const scorpio = [];
// const sagitterrorist = [];
// const capricorn = [];
// const aquarius = [];
// return (
//         <div>
            
//         </div>
//     )
// }


//  ccreate component pass props (this.info) inside componrny csll in results like form