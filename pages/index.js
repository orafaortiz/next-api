import Link from "next/link";

function Home() {
  return (
    <div>
      <h1>SC - São José</h1>
      <h2>Encontre no seu bairro os produtos que precisa, rápido e simples.</h2>
      <p>E ainda contribui para o desenvolvimento economico da sua cidade.</p>

        <Link href="/sobre">
            <a >Saiba Mais</a>
        </Link>
      
    </div>
  );
}

export default Home;