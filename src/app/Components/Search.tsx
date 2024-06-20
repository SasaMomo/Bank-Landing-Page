import {
  MagnifyingGlassCircleIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/16/solid";
import { EllipsisHorizontalCircleIcon } from "@heroicons/react/20/solid";

export function Search() {
  return (
    <div className="md:flex hidden items-center gap-2">
      <MagnifyingGlassIcon className="h-8 w-8 m-auto" />
      <input
        type="text"
        placeholder="Buscar"
        name="Barra de pesquisa"
        className=" bg-transparent outline-none placeholder:text-white w-[100px]"
      />
    </div>
  );
}
