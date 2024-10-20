
import "./style.css"

function Home(){
    return (
    <div className="container">
        <form>
            <h1>Castro de usuários</h1>
            <input name="nome" type="text" />
            <input name="idade" type="number" />
            <input name="email" type="email" />
            <button type="button">Cadastrar</button>
        </form>


        
    </div>
    )
}

export default Home