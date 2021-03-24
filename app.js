var express = require('express');
var path = require('path');
var flash=require('connect-flash')
var toastr=require('express-toastr')
var session=require('express-session')
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.use(session({
  secret: "ilovevisitors",
  saveUninitialized:true,
  resave:true
}))

app.use(toastr())
app.use(flash())

app.get('/', (req, res)=>{
  res.render('index', {status:"", success: req.flash('success'), 
  errors: req.flash('errors'), warnings:req.flash('warnings'),
  infos:req.flash('infos')})
})

app.post('/', (req, res)=>{
  req.flash('success', "Genrated Toastr")
  req.flash('errors', "Genrated Toastr")
  req.flash('warnings', "Genrated Toastr")
  req.flash('infos', "Genrated Toastr")
  res.redirect('/')
})

app.listen(3000)