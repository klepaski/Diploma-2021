const regexEmail = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
const regexUrl = new RegExp(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-zA-Z0-9]+([\-\.]{1}[a-zA-Z0-9]+)*\.[a-zA-Z]{2,5}(:[0-9]{1,5})?(\/.*)?$/)
const regexPass = new RegExp(/(?=^.{8,15}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*^\S*$/)



export default (name,  value, required) => {
    let error = null;

    switch (name) {
        case 'email':
            if(!regexEmail.test(value)) error = 'Invalid e-mail address'
            if(!value && required) error = 'This field is required'
            break;
        case 'password':
            if(value && value.length < 6) error = 'Min length 6 symbols'
            break;
        default:
            break;

    }

    if(!value && required) error = 'This field is required'
    return error;
}
