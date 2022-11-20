import { resolveHref } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { useRouter } from "next/router";
import { BarChart, Hammer, Help, Leaf, Map, Person, Podium, Warning } from "react-ionicons";

const navigationRoutes = ["map", "planner", "reports", "alerts", "dashboard", "maintance", "help", "user"];

export default function Header() {

    const router = useRouter();

    return (
        <div className="flex px-4 place-content-between flex-row h-14 w-full bg-black">
            {/* For the LOGO */}
            <div className="place-self-center text-white">SOME BUSINESS</div>
            {/* Location of Mapa,Planificador,Reportes,Alertas,Dashboard,Flota,Pedidos */}
            <div className="place-self-center flex flex-row space-x-5">
                <Link href="../categories/Map">
                    <button className="p-1 hover:text-blue-500 hover:bg-blue-700 rounded-xl">
                        <div className="pl-2"><Map color="white" /></div>
                        <div className="text-white">Mapa</div>
                    </button>
                </Link>
                <Link href="../categories/Planner">
                    <button className="p-1 hover:text-blue-500 hover:bg-blue-700 rounded-xl">
                        <div className="pl-8"><Leaf color="white" /></div>
                        <div className="text-white">Planificador</div>
                    </button>
                </Link>
                <Link href="../categories/Reports">
                    <button className="p-1 hover:text-blue-500 hover:bg-blue-700 rounded-xl">
                        <div className="pl-5"><BarChart color="white" /></div>
                        <div className="text-white">Reportes</div>
                    </button>
                </Link>
                <Link href="../categories/Alerts">
                    <button className="p-1 hover:text-blue-500 hover:bg-blue-700 rounded-xl">
                        <div className="pl-4"><Warning color="white" /></div>
                        <div className="text-white">Alertas</div>
                    </button>
                </Link>
                <Link href="../categories/Utils">
                    <button className="p-1 hover:text-blue-500 hover:bg-blue-700 rounded-xl">
                        <div className="pl-10"><Hammer color="white" /></div>
                        <div className="text-white">Flota,Pedidos</div>
                    </button>
                </Link>
            </div>
            {/* Place for Help,User */}
            <div className="flex place-self-center flex-row space-x-4">
                <Link href="../categories/Help">
                <div className="">
                    <div className="pl-1"><Help color="white" /></div>
                    <div className="text-white">Help</div>
                </div>
                </Link>
                <Link href="../categories/Usermanag">
                <div>
                    <div className="pl-1"><Person color="white" /></div>
                    <div className="text-white">User</div>
                </div>
                </Link>
            </div>
        </div>
    );
}
