import { ArrowUpIcon, ArrowUpTrayIcon } from "@heroicons/react/24/solid";

export default function Footer() {
  return (
    <footer className="bg-pri-red ">
      <div className="flex md:flex-row items-center flex-wrap justify-around md:justify-around border-t-2 pt-4 container mx-auto p-4">
        <div>
          <p>Nossos produtos</p>
          <p>Conta corrente</p>
          <p>Seguros</p>
          <p>Investimentos</p>
        </div>
        <div>
          <p>Ajuda</p>
          <p>Renegociação</p>
          <p>Segurança</p>
          <p>Pacotes e tarifas</p>
        </div>
      </div>
    </footer>
  );
}
