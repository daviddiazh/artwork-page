import { artWorks } from "@/mocks/artworks";
import { Home as HomeComponent } from './components/HomePage'

export default function Home() {

  return (
    <HomeComponent artWorks={artWorks} />
  );
}
