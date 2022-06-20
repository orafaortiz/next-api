import Link from "next/link";

function Sobre() {
    return (
      <div>
        <h1>SC - São José</h1>
        <h2>Encontre no seu bairro os produtos que precisa, rápido e simples.</h2>
        <p>E ainda contribui para o desenvolvimento economico da sua cidade.</p>

        <Link href="/">
            <a >Home</a>
        </Link>

      </div>
    );
  }
  
  export default Sobre;