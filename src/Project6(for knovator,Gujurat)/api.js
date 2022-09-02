var express=require("express")
var cors=require("cors")
var mongoClient=require("mongodb").MongoClient
var connectionString="mongodb://localhost:27017"
var app=express()
app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))
app.use(cors())
app.get("/seereviews",(req,res)=>{
    mongoClient.connect(connectionString,(err,ClientObj)=>{
      if(!err){
          ClientObj.db("reactdb").collection("reviews").find({}).toArray((error,documents)=>{
              if(!error){
                  res.send(documents)
              }
          })
      }
    })  
  })
app.post("/postreviews",(request,response)=>{
    var reviews={
        title:request.body.title,
        rating:request.body.rating,
        description:request.body.description,
    }
    mongoClient.connect(connectionString,(error,object)=>{
        if(!error){
            object.db("reactdb").collection("reviews").insertOne(reviews,(error,response)=>{
                if(!error){
                    console.log("review inserted")
                }
            })
        }
    })
})
app.listen(8080)
console.log("server started at port number:8080")