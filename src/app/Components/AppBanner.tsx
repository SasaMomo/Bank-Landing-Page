import Image from "next/image";

export default function AppBanner() {
  return (
    <div className="bg-pri-mold mx-auto pt-4">
      <div className=" bg-pri-red/40 rounded-2xl flex container mx-auto justify-around px-2 flex-wrap md:flex-nowrap md:px-10 lg:px-10 py-4 max-w-[1000px]">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Nosso App para o seu celular</h1>
          <p className="m-4 text-2xl">
            Tenha acesso a sua conta de forma ilimitada, pague boletos, faça
            cobranças, receba pix, confira sua fatura, consulte os serviços do
            cartão de crédito e muito mais! Tudo com a nossa segurança de ultima
            geração.
          </p>
          <p className="m-4 text-2xl">
            Disponível na Apple Store e Google play
          </p>
          <div className="flex justify-around md:px-20 gap-2">
            <Image
              src="https://i.imgur.com/VoZR5mR.png"
              alt="Apple Store icon"
              width={120}
              height={120}
              className="bg-dar-green/0 border-0 rounded-lg hover:bg-white hover:border-dar-green active:animate-bounce"
            />
            <div>
              <Image
                src="https://i.imgur.com/mq86LGr.png"
                alt="Google Play Icon"
                width={120}
                height={120}
                className=" bg-dar-green/0 border-0 rounded-lg min-w-[120px] hover:bg-white hover:border-dar-green p-2 active:animate-bounce"
              />
            </div>
          </div>
        </div>
        <div>
          <Image
            src="https://i.imgur.com/ZxbeH7a.png"
            alt="phone App"
            width={225}
            height={400}
            className="min-w-[225px] min-h-[400px]"
          />
        </div>
      </div>
    </div>
  );
}
