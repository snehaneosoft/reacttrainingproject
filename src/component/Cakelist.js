import Cake from "./Cake"

let cake = {
    id:1,
    name:"Chocolate Truffle",
    price:500,
    image:"cakecat1.jpg"
  }
  let cake1 = {
    id:2,
    name:"Fruit Cake",
    price:800,
    image:"fruit.webp"
  }
  let cake2 = {
    id:3,
    name:"Fairy Tale",
    price:800,
    image:"cakebanner4.jpg"
  }
  
function Cakelist(props){
    return (
        <div class="container cakecontainer">
            <div className="row">
            <Cake history={props.history} cakedata={cake} />
            <Cake history={props.history} cakedata={cake1} />
            <Cake history={props.history} cakedata={cake2} />
            </div>
        </div>
    )
}

export default Cakelist