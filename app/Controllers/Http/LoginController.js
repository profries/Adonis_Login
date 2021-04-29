'use strict'

const Usuario = use('App/Models/Usuario')

class LoginController {
    async login ({view}) { 
        console.log("Tela de Login")
        return view.render("login")
    }

    async autenticar ({request, response, session}) { 
        //const usuario = new Usuario()
        //usuario.email = request.input('email')
        //usuario.senha = request.input('senha')
        const usuario = await Usuario.findBy('email', request.input('email'));

        console.log("Usuario",JSON.stringify(usuario));
        //if(usuario.email == "admin@admin.com" && usuario.senha == "12345") {
        if(usuario && usuario.senha == request.input('senha')) {
            console.log("Autenticado com sucesso!")
            session.put("nome", usuario.nome);
            return response.redirect('/bemvindo');
        }
        else {
            console.log("Usuário ou senha inválidos!")
            session.flash({
                notification: "Usuário ou senha inválidos!"
            })
            return response.redirect('back');
        }

    }

    async bemVindo ({view,response,session}) {
        const nome = session.get("nome")
        if(nome){
            return view.render("bemvindo",{nome:nome})
        }
        else {
            return response.redirect('/');
        }
    }
}

module.exports = LoginController
