import Image from "next/image";
import { startTransition } from "react";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen	 space-x-">
      {/*  IMAGEN */}
      <div className="space-y-6">
        <h1 className="text-center text-xl font-extralight">
          Encuentra al influencer ideal para tu
          <br /> emprendimiento
        </h1>
        <Image src="/pene2.svg" alt="First Image" width={504} height={367} />
      </div>

      {/* LOGIN */}
      <div className="flex flex-col items-center p-10 px-20 space-y-3 bg-white rounded-3xl shadow ">
        <h2 className="text-xl font-semibold">Inicia Sesión</h2>
        <input
          className="rounded-2xl"
          type="text"
          placeholder="Correo Electrónico"
        />
        <input className="rounded-2xl" type="text" placeholder="Contraseña" />
        <button className="rounded-2xl bg-[#5B99C2] text-color-[#1A4870] hover:bg-[#35556a] font-bold text-[#1A4870] ">
          Iniciar Sesión
        </button>
        <p className="text-xs">o inicia sesión con:</p>
        <div className="flex space-x-4"></div>
        <div className="flex flex-col items-center w-96 space-y-3">
          <p className="text-center text-xs break-normal font-medium">
            Al crear una cuenta aceptas nuestros{" "}
            <span className="text-[#5B99C2] font-bold">
              Terminos de Servicio
            </span>{" "}
            y{" "}
            <span className="text-[#5B99C2] font-bold">
              Politicas de Privacidad
            </span>
            , tranquilo no es como Disney Plus.
          </p>
          <p className="text-center text-xs break-normal font-medium">
            No tienes una cuenta?
            <span className="text-[#5B99C2] font-bold"> Crear Cuenta</span>
          </p>
        </div>
      </div>
    </div>
  );
}
