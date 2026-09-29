
class Homecontroller {
    async home (req, res){
        const data={
                name:"Subham",
                age:25,
                address:"Mumbai",
                course:"Nodejs"
        }
        res.render('Home', {
            title:' Home page',
            user:"Subham Dey",
            data:data
        })
        
    }

    async about (req, res){
        res.render('About', {
            title:'About page'
        })
    }

    async team (req, res){
        res.render('Team', {
            title:'Team page'
        })
    }

    async testimonials (req, res){
        res.render('Testimonials', {
            title:'Testimonials page'
        })
    }

    async services (req, res){
        res.render('Services', {
            title:'Services page'
        })
    }

    async portfolio (req, res){
        res.render('Portfolio', {
            title:'Portfolio page'
        })
    }

    async pricing (req, res){
        res.render('Pricing', {
            title:'Pricing page'
        })
    }

    async blog (req, res){
        res.render('blog', {
            title:'Blog page'
        })
    }

    async contact (req, res){
        res.render('contact', {
            title:'contact page'
        })
    }
}


module.exports=new Homecontroller()






