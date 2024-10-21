
import "./style.css"
import Trash from "../../assets/trash.png"

function Home() {

    const users = [{

        id: "122345ssdds",
        name: "julia",
        age: 20,
        email: "julia@gmail.com",
    },
    {
        id: "122345s11s",
        name: "aline",
        age: 21,
        email: "aline@gmail.com",
    },
    {
        id: "122225s11s",
        name: "aline",
        age: 21,
        email: "aline@gmail.com",
    },
    ]
    return (
        <div className="container">
            <form>
                <h1>Castro de usuários</h1>
                <input placeholder="Nome" name="nome" type="text" />
                <input placeholder="Idade" name="idade" type="number" />
                <input placeholder="Email" name="email" type="email" />
                <button type="button">Cadastrar</button>
            </form>

            {users.map(user => (
                <div key={user.id} className="card" >
                    <p>Nome: <span>{user.name}</span></p> 
                    <p>Idade: <span>{user.age}</span></p>
                    <p>Email: <span>{user.email} </span> </p>

                    <button>
                        <img className="img" src={Trash} />
                    </button>
                </div>
            ))}
        </div>
    )
}

export default Home