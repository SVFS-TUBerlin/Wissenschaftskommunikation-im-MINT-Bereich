import { Center, Box, VStack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

// import { Button } from "./components/ui/button";

const Home = () => {
  return (
    <Center>
      <VStack>
        <Box paddingTop={4} paddingBottom={4} width={400} textAlign={"center"} background={"blackAlpha.800"} color={"white"} fontSize={"x-large"}>
          <Link to="/">WissKommPass</Link>
        </Box>
        <Box marginTop={5} marginLeft={20} marginRight={20} marginBottom={5} maxWidth={700} fontSize={"lg"} textAlign={"justify"}>
        In einer Welt der Informationsflut ist Wissenschaftskommunikation unentbehrlich. Sie schlägt die Brücke zwischen wissenschaftlichen Erkenntnissen der breiten Öffentlichkeit, macht abstrakte Ideen greifbar, erweckt Zahlen und Fakten zum Leben und zeigt, wie Wissenschaft unser Leben bereichert. Ob es darum geht, das Vertrauen in Wissenschaft zu stärken, Akteure zu informieren oder einfach Neugier zu wecken: Eine klare und wirkungsvolle Kommunikation hilft dabei, komplexe Themen verständlich und relevant zu machen. Denn nur wer versteht, kann mitreden und mitgestalten.
        </Box>
        <Box marginTop={0} marginLeft={20} marginRight={20} marginBottom={5} maxWidth={700} fontSize={"sm"}>
        Unser* interaktives Tool unterstützt dich und bietet einen Leitfaden für die Grundbausteine der Wissenschaftskommunikation. Es hilft dir, einen passenden Kommunikationsstil und geeignete Kanäle für deine Botschaft zu finden – individuell abgestimmt auf deine Ziele. Schritt für Schritt führt das Tool dich durch die wichtigsten Fragen und gibt dir konkrete Empfehlungen. So wird deine Wissenschaftskommunikation nicht nur effektiver, sondern auch kreativer und einprägsamer.
        </Box>
        <Button width={150} height={50} fontSize={"lg"}><Link width="100%" height="100%" to="/tool">Start</Link></Button>
        <Box marginTop={10} marginLeft={20} marginRight={20} marginBottom={10} maxWidth={500} fontSize={"2xs"}>
        * Wir sind 3 Studies, die sich im Rahmen des Modules „Wissenschaftskommunikation im MINT-Bereich“ viele Fragen gestellt und in gemeinsamer Arbeit mit der tollen Modulleitung dieses Tool entwickelt haben. Wir danken den Fachgebieten SVFS und LKM der TU Berlin.
        Bei Fragen oder Anmerkungen meldet euch gerne per Mail an: additive_SVFS_TUBerlin@protonmail.com
        </Box>
      </VStack>
    </Center>
  )
}

export default Home;