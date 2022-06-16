export default function validateInfo(values) {
    let errors = {};

    //username
    if (values.username === "") {
        errors.username = "username should not be Empty."
    }


    //emial
    if (values.email === "") {
        errors.email = "Email should lnot be empty."
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Email address is invlid";
    }

    //password
    if (values.password === "") {
        errors.password = "Password should not be empty.";
    } else if (values.password.length <= 4) {
        errors.password = "Password needs to be 5 characters of more."
    }

    //password1
    if (values.password1 === "") {
        errors.password1 = "Password should not be empty."
    } else if (values.password1 !== values.password) {
        errors.password1 = "Password does not match";
    }

    return errors;
}