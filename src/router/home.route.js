const express=require(`express`);
const homeController=require('../controller/home.controller.js')

const Router=express.Router();

Router.get('/',homeController.home)

Router.get('/about',homeController.about)

Router.get('/team',homeController.team)

Router.get('/testimonials',homeController.testimonials)

Router.get('/services',homeController.services)

Router.get('/portfolio',homeController.portfolio)

Router.get('/pricing',homeController.pricing)

Router.get('/blog',homeController.blog)

Router.get('/contact',homeController.contact)





module.exports = Router; 