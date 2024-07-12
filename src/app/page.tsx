import { headers } from "next/headers";
import AddCompanyButton from "./components/add-company-button";
import ServerComponent from "./components/server-componeny";
import ClientComponent from "./components/client-component";
import ServerComponentCopy from "./components/server-component-coppy";

export default function Home() {
  console.log(headers());
  return (
    <main >
      <h1 className="text-xl">Colombo-colt {new Date().toTimeString()}</h1>
      <AddCompanyButton />
      <ServerComponent />
      <ClientComponent>
        <ServerComponentCopy />
      </ClientComponent>
    </main>
  );
}

