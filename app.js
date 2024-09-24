const express= require('express');
const mongoose = require('mongoose');
const Message = require('./models/message')



const dbURI = 'mongodb+srv://abhinay923:Sangam923@website1.q6bbi.mongodb.net/website1?retryWrites=true&w=majority&appName=website1';
mongoose.connect(dbURI)
    .then((result)=>app.listen(3000))
    .catch((err)=> console.log(err));

const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));




app.get('/checkupload', (req, res)=>{
    const message = new Message({
        name: 'testname', 
        email: 'test@email.com',
        feedback: 'random feedback here'
    });
    message.save()
        .then((result)=> res.send(result))
        .catch((err)=> console.log(err));
})

app.get('/', (req, res)=>{
    res.render('index', {title : 'Index'});
})

app.get('/portfolio', (req, res)=>{
    res.render('portfolio', {title : 'Portfolio'});
})
app.get('/services', (req, res)=>{
    res.render('services', {title : 'Services'});
})
app.get('/contact', (req, res)=>{
    Message.find().sort({createdAt: -1})
        .then((result)=>{
            res.render('contact', {title : 'Contact', messages: result});
        })
        .catch(err=> console.log(err));
})

app.post('/contact', (req, res)=>{
    
    const message  = new Message(req.body);
    message.save()
        .then((result)=>res.redirect('contact'))
        .catch((err)=> {console.log(err)});
})

app.delete('/contact/:id',(req, res)=>{
    const id =req.params.id;
    Message.findByIdAndDelete(id)
        .then((result)=>{
            res.json({redirect: '/contact'})
        })
        .catch((err)=>console.log(err));
})



app.use((req, res)=>{
    res.status(404).render('404' , {title : '404 Page'});
})