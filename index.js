class hero {
    constructor(name, age, type){
        this.name = name
        this.age = age
        this.type = type
    }

    seletor(){
        if (this.type == "Mago"){
            return "magia"
        } else if (this.type == "Guerreira"){
            return "espada"
        } else if (this.type == "Monge"){
            return "artes marciais"
        } else{
            return "shuriken"
        }
    
    
    }

    attack(){
        console.log(`O ${this.type} atacou usando ${this.seletor()}`)
    }


}

let heroNicc = new hero("Nicclinha Herói de Guerra", 26, "Mago")
let heroReb = new hero ("Reb Matadora de Demônios", 24, "Guerreira")
let heroAli = new hero ("Alicinha do Vral", 04, "Monge")
let heroAslan = new hero ("Aslan Viado", 3, "Ninja")


heroNicc.attack()
heroReb.attack()
heroAli.attack()
heroAslan.attack()