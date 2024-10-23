const con = require ('../connect/connect').con;


const create = (req, res) => {
    let cliente_id = req.body.cliente_id;
    let nome = req.body.nome;
    let cpf = req.body.cpf;
    let email = req.body.email;
    let endereco = req.body.endereco;
    let data_nascimento = req.body.data_nascimento;
    let data_cadastro = req.body.data_cadastro;

    let query = 'INSERT INTO clientes (cliente_id,nome,cpf,email,endereco,data_nascimento,data_cadastro)VALUES'
    query += `('${cliente_id}','${nome}','${cpf}','${email}','${endereco}','${data_nascimento}','${data_cadastro}');`;
    con.query(query, (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })
}

const update = (req, res) => {
    const { cliente_id, nome, cpf, email, endereco, data_nascimento,data_cadastro } = req.body;

    const query = 'UPDATE clientes SET nome = ?, cpf = ?, email = ?, endereco = ? WHERE cliente_id = ?';
    con.query(query, [cliente_id, nome, cpf, email, endereco, data_nascimento,data_cadastro], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: 'Cliente atualizado com sucesso', result });
        }
    });
};



const read = ( req,res)=>{
     con.query('SELECT * FROM clientes',(err,result) => {
        if(err){
            res.status(500).json(err);
        }else{
            res.json(result)
        } 
     })
}

const deletar = (req, res) => {
    let id = req.params.id;
    con.query(`DELETE FROM clientes WHERE  id = '${id}'`,(err, result) => {
        if(err){
            res.status(400).json(err).end();
        }else{
            res.status(201).json(result)
        }
    })
}


module.exports = {
    create,
    read,
    update,
    deletar
}