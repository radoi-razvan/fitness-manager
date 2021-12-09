import react from "react";

export const RegistrationForm = () => {
    return (
        <div>
            <form method="POST" action="">
                <label htmlFor="email" />
                <input type="email" name="email" placeholder="example@email.com" required/>
                <label htmlFor="username" />
                <input type="text" name="username" placeholder="JohnDoe" required/>
                <label htmlFor="password" />
                <input type="password" name="password" required/>
                <select name="role" id="role">
                    <option value="Owner"> Gym owner </option>
                    <option value="Participant"> Gym member </option>
                </select>
                <button type="submit"> Sign up </button>
            </form>
        </div>
    )
}