//import database
const mysql=require('../connection/index')

module.exports={
//soal nomer 2. 
    //mendapatkan data movies (to get the data (movies))
    GetMovie:(req,res)=>{
        //syntax sql
        let sql= `select * from movies`
        //database action for that

        mysql.query(sql,(err,result)=>{
            if(err) res.status(500).send(err)
            res.status(200).send(result)
        })
    },
    //menghapus data movies (to delete the (movies))
    deleteMovie: (req,res)=>{
        let sql=`delete from movies where id= ${req.params.id}`
        mysql.query(sql,(err,result)=>{
            if(err)res.status(500).send(err)
            res.status(200).send(result)
        })
    },
    //add new data for the movie(menambahkan data for the movie)
    addNewData:(req,res)=>{
        const {nama,tahun,descripstion } = req.body 
        const movie = {
              nama,
              tahun,
              descripstion
              //ini emang typo kak di table sql nya yang description 
              //mau aku ganti tapi mager (was too lazy for this goddamn typo
              //and definitely not in the mood for that )
            }
        if(movie){
            let sql=`insert into movies set ?`
            mysql.query(sql,movie,(err,result)=>{
                if(err)res.status(500).send(err)
                res.status(200).send(result)
            })
        }else{
            res.status(500).send('fill in')
        }
    },
    //edit the data (edit data yang sudah ada)
    editTheData:(req,res)=>{
        const {nama,tahun,descripstion } = req.body 
        const movie = {
              nama,
              tahun,
              descripstion
              //ini emang typo kak di table sql nya yang description 
              //mau aku ganti tapi mager (was too lazy for this goddamn typo
              //and definitely not in the mood for that )
            }
        let sql=`update movies set ? where id=${req.params.id}`
        
        mysql.query(sql, data,(err,result)=>{
            if(err) res.status(500).send(err)
            res.status(200).send(result)
        })
    },
//soal nomer 3
    GetCategory: (req,res)=>{
        //syntax sql for that
        let sql=`select * from categories`
        //database action for that 

        mysql.query(sql,(err,result)=>{
            if(err) res.status(500).send(err)
        })
    },
    deleteCategory:(req,res)=>{
        let sql=`DELETE FROM categories WHERE idcategories = ${id};`
        mysql.query(sql,(err,result)=>{
            if(err)res.status(500).send(err)
            res.status(200).send(result)
        })
    },
    addNewDataForCategory:(req,res)=>{
        const nama={
        }
        if(movie){
            let sql=`insert into categories set ?`
            mysql.query(sql,(err,result)=>{
                if(err)res.status(500).send(err)
                res.status(200).send(result)
            })
        }else{
            res.status(500).send
        }
    },
    //soal nomer 4
    //to get the data from both
    getDataa:(req,res)=>{
        let sql = `select m.nama as namamovie, c.nama as namacategory from movies m 
        join movcat mc on m.idmovies = mc.idmovie 
        join categories c on c.idcategories = mc.idcategory;`

        mysql.query(sql,(err,result)=>{
            if(err) res.status(500).send(err)
            return res.status(200).send(result)
        })
    },
    //add the data 
    addData:(req,res)=>{
        const {idmovie, idcategory} = req.body
        const data = {
            idmovie,
            idcategory
        }
        let sql = `insert into movcat set ?`
        mysql.query(sql,data,(err,result)=>{
            if(err) res.status(500).send(err)
            res.status(200).send(result)
        })
    },
    //delete the data
    deleteData:(req,res)=>{
        const {id} = req.params
        console.log(id)
        let sql = `DELETE FROM movcat WHERE idmovcat = ${id};`
        mysql.query(sql,(err,result)=>{
            if(err) res.status(500).send(err)
            return res.status(500).send(result)
        })
    }
}

