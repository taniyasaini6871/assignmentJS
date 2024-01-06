
const validation = (user) => {

    const validate = {
        isValid: false,
        errors: [],
    }

    if (!(/^[A-Za-z]+$/.test(user.userName?.trim()))) {
        validate.errors.push({
            name: 'userName',
            message: '*name should contain letters only'
        })
    }

    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(user.email?.trim()))) {
        validate.errors.push({
            name: 'email',
            message: '*enter correct email'
        })
    }

    if (user.password.length <= 8) {
        validate.errors.push({
            name: 'password',
            message: '*enter atleast 8 characters'
        })
    }

    if (user.password.value !== user.password2.value || password2.value === "") {
        validate.errors.push({
            name: 'confirmPassword',
            message: '*password does not matched'
        })
    }

    if (validate.errors.length === 0) {
        validate.isValid = true
    }
    return validate;

};


const user = {

    form: document.querySelector("#loginForm"),
    userName: document.querySelector("#username"),
    email: document.querySelector("#email"),
    password: document.querySelector("#password"),
    confirmedPassword: document.querySelector("#password2"),
    submitBtn : document.querySelector("#submit-btn"),
    dialogContainer :  document.querySelector("#dialogContainer"),
    closeDialogBtn : document.querySelector("#closeDiaglogBox"),
   
    addUser: function () {

        let newUser = new FormData(this.form)
        let user = Object.fromEntries(newUser);
        
        let errors = validation(user).errors;
        this.setError(errors)

        if(errors.length === 0){
            this.dialogContainer.classList.remove('hidden');
        }
    },

    setError: function (errors) {
        errors.map(error => {
            document.querySelector(`[data-${error.name}Error]`).innerHTML = error.message
        })

    },
    removeError : function(){
        this.userName.addEventListener('input', (e) => {
            if ((/^[A-Za-z]+$/.test(this.userName.value.trim()))) {
                document.querySelector('[data-userNameError]').innerHTML = '';
                return;
            }
        })

        this.email.addEventListener('input', (e) => {
            if ((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email.value.trim()))) {
                document.querySelector('[data-emailError]').innerHTML = '';
                return;
            }
        })

        this.password.addEventListener('input', (e) => {
            if (!this.password.length <= 8) {
                document.querySelector('[data-passwordError]').innerHTML = '';
                return;
            }
        })


        this.confirmedPassword.addEventListener('input', (e) => {
            if (this.password.value == this.confirmedPassword.value) {
                document.querySelector('[data-confirmPasswordError]').innerHTML = '';
                return;
            }
        })
    },

    bind: function () {

        this.form.addEventListener('submit', (e) => {
            e.preventDefault()
            this.addUser()
            this.removeError()
          
        })
        this.closeDialogBtn.addEventListener("click" , () => {
            this.dialogContainer.classList.add('hidden');
            this.form.reset();
        })
       
       
    },
    render: function () {
        this.bind();

    }
}
user.render();

