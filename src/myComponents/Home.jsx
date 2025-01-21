import { Center, Box, VStack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from "../components/ui/accordion"

// import { Button } from "./components/ui/button";

const Home = () => {
  return (
    <VStack>
      <Center>
        <Box paddingTop={4} paddingBottom={4} width={400} marginBottom={3} textAlign={"center"} background={"blackAlpha.800"} color={"white"} fontSize={"x-large"}>
          <Link to="/">Medienkompass</Link>
        </Box>
      </Center>
      <Box marginRight="20rem" padding="1rem 2rem" background="orange" borderRadius={20} color="white" >
        Wie kann ich mein Thema präsentieren?
      </Box>
      <Box marginLeft="15rem" padding="1rem 2rem" background="green" borderRadius={20} color="white" >
        "Ich will nicht nur einen langweiligen Vortrag halten."
      </Box>
      <Box padding="1rem 2rem" background="purple" borderRadius={20} color="white" >
        Du brauchst Inspiration for deine Kommunikation?
      </Box>

      <Box margin={5} maxWidth="60%" padding="1rem 2rem" background="turquoise" color="white" >
        Du stehst kurz vor einem Vortrag und möchtest ihn spannender gestalten? Der „Medienkompass“ bietet dir Starthilfe, um passende Methoden für deine Zielgruppe und Intention zu finden. Lass dich von kreativen Alternativen inspirieren, um Wissen effektiv zu vermitteln.
      </Box>
      
      <Link to="/tool"><Button width={150} height={50} fontSize={"lg"}>Start</Button></Link>

      <AccordionRoot marginTop={3} maxWidth="60%" collapsible defaultValue={["b"]}>
          <AccordionItem key={1} value={1} >
            <AccordionItemTrigger>Wozu dient der Medienkompass?</AccordionItemTrigger>
            <AccordionItemContent>
              Unser interaktives Tool unterstützt dich und bietet einen Leitfaden für die Grundbausteine der Wissenschaftskommunikation. Es hilft dir, einen passenden Kommunikationsstil und geeignete Kanäle für deine Botschaft zu finden – individuell abgestimmt auf deine Ziele. Schritt für Schritt führt das Tool dich durch die wichtigsten Fragen und gibt dir konkrete Empfehlungen. So wird deine Wissenschaftskommunikation nicht nur effektiver, sondern auch kreativer und einprägsamer.
            </AccordionItemContent>
          </AccordionItem>
          <AccordionItem key={2} value={2} >
            <AccordionItemTrigger>Was ist Wissenschaftskommunikation?</AccordionItemTrigger>
            <AccordionItemContent>
              In einer Welt der Informationsflut ist Wissenschaftskommunikation unentbehrlich. Sie schlägt die Brücke zwischen wissenschaftlichen Erkenntnissen der breiten Öffentlichkeit, macht abstrakte Ideen greifbar, erweckt Zahlen und Fakten zum Leben und zeigt, wie Wissenschaft unser Leben bereichert. Ob es darum geht, das Vertrauen in Wissenschaft zu stärken, Akteure zu informieren oder einfach Neugier zu wecken: Eine klare und wirkungsvolle Kommunikation hilft dabei, komplexe Themen verständlich und relevant zu machen. Denn nur wer versteht, kann mitreden und mitgestalten.
            </AccordionItemContent>
          </AccordionItem>
          <AccordionItem key={3} value={3} >
            <AccordionItemTrigger>Wer hat den Medienkompass entwickelt?</AccordionItemTrigger>
            <AccordionItemContent>
              Wir sind 3 Studies, die sich im Rahmen des Modules „Wissenschaftskommunikation im MINT-Bereich“ viele Fragen gestellt und in gemeinsamer Arbeit mit der tollen Modulleitung dieses Tool entwickelt haben. Wir danken den Fachgebieten SVFS und LKM der TU Berlin.
              Bei Fragen oder Anmerkungen meldet euch gerne per Mail an: additive_SVFS_TUBerlin@protonmail.com
            </AccordionItemContent>
          </AccordionItem>
      </AccordionRoot>

      <Center>
        <Box marginLeft={20} marginRight={20} marginTop={3} marginBottom={3} maxWidth={500} fontSize={"2xs"}>
        WissKommPass is licensed under <a href="https://creativecommons.org/licenses/by/4.0/?ref=chooser-v1">CC BY 4.0</a>
        </Box>
      </Center>
    </VStack>
  )
}

export default Home;