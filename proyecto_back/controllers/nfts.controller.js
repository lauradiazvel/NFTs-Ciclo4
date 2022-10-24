const Nft = require("../models/nfts.model");
let response ={
    msg:"",
    exito:false
}

exports.create = function(req,res){
    let nft = new Nft({
        token_id: req.body.token_id,
        nombre: req.body.nombre,
        edicion: req.body.edicion,
        autor: req.body.autor,
        coleccion: req.body.coleccion,
        tipo:req.body.tipo,
        publicado:req.body.publicado
    })
    
    nft.save(function(err){
        if(err){
            console.error(err),
            response.exito=false,
            response.msg="Error al guardar el nft"
            res.json(response)
            retunr;
        }
        
        response.exito=true,
        response.msg="El nft se guardo correctamente"
        res.json(response)
    })
}

exports.find=function(req,res){
    Nft.find(function(err, nfts){
        res.json(nfts)
    })
}

exports.findOne=function(req,res){
    Nft.findOne({_id: req.params.id},function(err,nft) {
        res.json(nft)
    })
}

exports.update= function(req,res){
    let nft={
        token_id: req.body.token_id,
        nombre: req.body.nombre,
        edicion: req.body.edicion,
        autor: req.body.autor,
        coleccion: req.body.coleccion,
        tipo:req.body.tipo,
        publicado:req.body.publicado
    }
    
    Nft.findByIdAndUpdate(req.params.id, {$set:nft}, function (err){
        if(err){
            console.error(err),
            response.exito=false,
            response.msg="Error al modificar el nft"
            res.json(response)
            return;
    }
    
    response.exito = true,
    response.msg="El nft modifico correctamente"
    res.json(response)
    })
}

exports.remove= function(req,res){
    Nft.findByIdAndRemove({_id: req.params.id}, function (err){
       if(err){
           console.error(err),
           response.exito=false,
           response.msg="Error al eliminar el nft"
           res.json(response)
           return;
        }

    response.exito=true,
    response.msg="El nft eliminado correctamente"
    res.json(response)
    })
}