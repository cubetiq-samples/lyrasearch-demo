// lyra elapse time
BigInt.prototype.toJSON = function() { return this.toString() }

const app = require('./server')

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log("Serevr is running at port: http://0.0.0.0:" + port)
})