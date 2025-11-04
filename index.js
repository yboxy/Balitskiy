express = require('express')
views = require('./views')
app = express()
app.set("view engine", "ejs")
path = __dirname + '/templates/'
//app.get('/', views.main)
app.use(express.static('static'))
app.get('/', views.index)
app.get('/list/:id', views.arcObjects)
app.get('/obj/:id',views.arcObject)
app.use(views.error404)

app.listen(3000, ()=> {
	console.log("Сервер починає прослуховувати підключення на порт 3000…")
}) 