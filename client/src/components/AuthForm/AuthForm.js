
const AuthForm = () => {
    return (
        <div className="authForm">
            <h2>Authorization</h2>
            <input type="text" placeholder={"email"} value={""} name={"email"}/>
            <input type="password" placeholder={"password"} value={""} name={"password"}/>
            <button>Send</button>
        </div>
    );
}

export default AuthForm;
