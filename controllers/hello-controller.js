const HelloController = (app) => {
    app.get('/hello', (req, res) => {res.send('Life is Good!')})
    app.get('/', (req, res) => {res.send('Welcome to FSD!')})
}
export default HelloController;