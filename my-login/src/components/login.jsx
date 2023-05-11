import  React from "react"
export default function Login(){
    return(
        <div> 
            <div className="whitespace-normal flex flex-col justify-items-center"></div>
            <form className ="max-w-[400px] w-full mx-auto bg-white p-4">
                <h2>Mcarfix Logo</h2>
                <div>
                    <label>Email </label>
                    <input type="text"  placeholder="Email"/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password"  placeholder="password "/>
                </div>
                <button> Login</button>
                <div>
                    <p>Forgot Password</p>

                    <p>Don't Have an Account?Sign up</p>
                
                </div>
            </form>

        </div>
    )
}