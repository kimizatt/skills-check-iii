module.exports ={
    getHouses: async (req, res) => {
        const db = req.app.get('db')
        let response = await req.app.get(db).read_houses()
        return res.status(200).send(response)
    }, 
    addHouse: (req, res) => {
        const db = req.app.get('db')
        const {name, address, city, state, zip}= req.body
        console.log(req.body)
        db.create_house([name, address, city, state, zip])
        .then( ()=> res.sendStatus(200))
        .catch(err => {
            res.status(500).send({errorMessage: 'Something went wrong.'})
            console.log(err)
        })
        
    },

}