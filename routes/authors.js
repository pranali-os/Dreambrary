const express = require('express')
const router = express.Router()
const Author = require('../models/author')
const Book = require('../models/book')




//ALL AUTHORS ROUTE
router.get('/', async(req, res) => {
    let searchOptions = {}
    if (req.query.name != null && req.query.name !== ''){
        searchOptions.name = new RegExp(req.query.name, 'i')
    }
    try{
        const authors = await Author.find({searchOptions})
        res.render('authors/index', {
            authors: authors, 
            searchOptions: req.query 
        })
    } catch{
        res.redirect('/')
    }
    
})

//NEW AUTHOR ROUTE
router.get('/new', (req, res) => {
    res.render('authors/new', { author: new Author()})
})

//create Authors route
router.post('/', async(req, res) => {
    const author = new Author({
        name: req.body.name
    }) 
    try{
        const newAuthor = await author.save()
        res.redirect(`authors/${newAuthor.id}`)  //before then
           // res.redirect(`authors`)

    } catch{
        res.render('authors/new', {
            author: author,
            errorMessage: 'Error creating Author'
        })
    }    

})    
    //author.save((err, newAuthor) => {
       // if (err){
            //res.render('authors/new', {
                //author: author,
               // errorMessage: 'Error creating Author'
           // })
       // } else {
            //res.redirect(`authors/${newAuthor.id}`)  //before then
            //res.redirect(`authors`)
       // }
    //})
  
router.get('/:id', async (req, res) => {
    try{
        const author = await Author.findById(req.params.id)
        const books = await Book.find({ author: author.id }).limit(6).exec()
        res.render('authors/show', {
            author: author,
            booksByAuthor: books
        })
    } catch{
      
      res.redirect('/')
    }
    //res.send('Show Author' + req.params.id)
})
router.get('/:id/edit', async (req, res) => {
    try{
        const author = await Author.findById(req.params.id)       //using mongoose to update and modify data of specific id
        res.render('authors/edit', {author: author})
    } catch {
        res.redirect('/authors')
    }
   //res.send('Edit Author' + req.params.id)       //test before editing
})
router.put('/:id', async(req, res) => {
   let author
    try{
        author = await Author.findById(req.params.id)
        author.name = req.body.name                    //UPDATING AUTHOR
        await author.save()
        res.redirect(`/authors/${author.id}`)  //before then
    } catch{
        if (author == null) {
            res.redirect('/')
        } else {
            res.render('authors/edit', {
            author: author,
            errorMessage: 'Error udating the Author'
           })
        }   
    }    
    //res.send('Update Author' + req.params.id)
})
router.delete('/:id', async(req, res) => {
    let author
    try{
        author = await Author.findById(req.params.id)
        await author.remove()
        res.redirect('/authors')  //before then
    } catch{
        if (author == null) {
            res.redirect('/')
        } else {
            res.redirect(`/authors/${author.id}`)
          
        }   
    }    
    //res.send('Delete Author' + req.params.id)
})
module.exports = router