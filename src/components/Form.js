import useForm from "./useForm";
import validateInfo from "./validateForm";

function Form({submitForm}) {
    const {handleChange,values,handleSubmit,errors} = useForm(submitForm,validateInfo);

    return (
        <div className="form-cont">
                <h1>Let's Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='username'>
                            USERNAME    
                        </label>
                        <input
                            type="text"
                            placeholder="enter your username"
                            className="username"
                            name="username"
                            value={values.username}
                            onChange={handleChange}
                        />
                        {errors.username && <p>{errors.username}</p>}
                    </div>

                    <div>
                        <label htmlFor='email'>
                            EMAIL    
                        </label>
                        <input
                            type="emial"
                            placeholder="enter your Email"
                            className="emial"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                        />
                        {errors.email && <p style={{color: "crimson"}}>{errors.email}</p>}
                    </div>

                    <div>
                        <label htmlFor='password'>
                            PASSWORD    
                        </label>
                        <input
                            type="password"
                            placeholder="enter password"
                            className="password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                        />
                        {errors.password && <p style={{color: "crimson"}}>{errors.password}</p>}
                    </div>

                    <div>
                        <label htmlFor='password1'>
                            RE-ENTER PASSWORD    
                        </label>
                        <input
                            type="password"
                            placeholder="re-enter your password"
                            className="password1"
                            name="password1"
                            value={values.password1}
                            onChange={handleChange}
                        />
                        {errors.password1 && <p style={{color: "crimson"}}>{errors.password1}</p>}
                    </div>
                    <button type='submit'>SUBMIT</button>
                </form>  
            </div>
    )
}
 
export default Form;