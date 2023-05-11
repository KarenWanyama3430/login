import  React from "react"
export default function ForgotPassword(){
    return(
        <div> 
            <div className="whitespace-normal flex flex-col justify-items-center"></div>
            <form className ="max-w-[400px] w-full mx-auto bg-white p-4">
                <h2>Mcarfix Logo</h2>
                <div>
                    <label>Enter Phone Number</label>
                    <input type="text"  placeholder="Email"/>
                </div>
                
                <button> Send Code</button>
                
            </form>

        </div>
    )
}