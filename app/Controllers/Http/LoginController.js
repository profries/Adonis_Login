'use strict'

class LoginController {
    async login ({view}) { 
        console.log("Tela de Login")
        return view.render("login")
    }

    async autenticar () { 

    }

    async bemVindo () { 

    }
}

module.exports = LoginController
