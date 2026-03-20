const usersEmail = ['joao@teste.com', 'mirela@teste.com'];
const userPass = ['teste2','teste3'];

function executaLogin(email, senha){
    const existeEmail = usersEmail.includes(email);

    if(existeEmail){
        const index = usersEmail.indexOf(email);
        if (senha === userPass[index]){
            console.log('Bem-vindo ao sistema de login!');
        }else{
            console.log('E-mail ou senha invalidos. 01')
        }
    }else{
        console.log('E-mail ou senha invalidos. 02')
    }
}

function cadastrarUser(email, senha){
    const existeEmail = usersEmail.includes(email);

    if(existeEmail){
        console.log('E-mail já cadastrado. ')
    }else{
        usersEmail.push(email);
        userPass.push(senha);
        console.log('User cadastrado com sucesso. ')
    }
}

cadastrarUser('joao@teste.com', 'teste5');
cadastrarUser('marcos@teste.com','teste5');
executaLogin('marcos@teste.com','teste5');

