const con = require ('../connect/connect').con;


const create = (req, res) => {
    let quarto_id = req.body.quarto_id;
    let cliente_id = req.body.cliente_id;
    let numero = req.body.numero;
    let andar = req.body.andar;
    let tipo_enum = req.body.tipo_enum;
    let valor_diaria = req.body.valor_diaria;
    let statusQuarto_enum = req.body.statusQuarto_enum;

    let query = 'INSERT INTO quartos (cliente_id,numero,andar,tipo_enum,valor_diaria,statusQuarto_enum)VALUES'
    query += `('${cliente_id}','${numero}','${andar}','${tipo_enum}','${valor_diaria}','${statusQuarto_enum }');`;
    con.query(query, (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })
}



const read = ( req,res)=>{
     con.query('SELECT * FROM quartos',(err,result) => {
        if(err){
            res.status(500).json(err);
        }else{
            res.json(result)
        } 
     })
}

const update = (req, res) => {
    const { quarto_id, cliente_id, numero, andar, tipo_enum, valor_diaria, statusQuarto_enum } = req.body;

    const query = 'UPDATE quartos SET cliente_id = ?,numero = ?, andar = ?, tipo_enum = ?, valor_diaria = ? statusQuarto_enum = ? WHERE quarto_id  = ?';
    con.query(query, [quarto_id , cliente_id, numero, andar, tipo_enum, valor_diaria,statusQuarto_enum], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: 'Quarto atualizado com sucesso', result });
        }
    });
};

const deletar = (req, res) => {
    let id = req.params.id;
    con.query(`DELETE FROM quartos WHERE  id = '${id}'`,(err, result) => {
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