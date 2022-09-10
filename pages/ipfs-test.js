import axios from "axios";
import Hero from "../components/Hero";
import PopularMovie from "../components/PopularMovie";
import { server } from "../config";

export default function Ipfs() {
  return (
    <div className="bg-gray-700">
      <button onClick={handleIpfsTest}> Store Ipfs</button>
    </div>
  )
}



