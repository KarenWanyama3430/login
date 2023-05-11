import  React from "react"
export default function SignUp(){
    return(
        <div> 
            <div className="whitespace-normal flex flex-col justify-items-center"></div>
            <form className ="max-w-[400px] w-full mx-auto bg-white p-4">
                <h2>Mcarfix Logo</h2>
                <div>
                    <label>Full Name </label>
                    <input type="text"/>
                </div>
                <div>
                    <label>Email</label>
                    <input type="text"/>
                </div>
                <div>
                    <label>Phone Number e.g 0723XXX256</label>
                    <input type="integer"/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password"/>
                </div>
                <div>
                    <label> Confirm Password</label>
                    <input type="password"/>
                </div>
                <div>
                    <label>Emergency Contact (optional)</label>
                    <input type="integer"/>
                </div>
                <div>
                    <p>By signing up you have agreed to the Terms and Conditions,Privacy Policy</p>
                </div>
                <button> Sign Up</button>
                <button>  Or Login</button>
                
            </form>

        </div>
    )
}