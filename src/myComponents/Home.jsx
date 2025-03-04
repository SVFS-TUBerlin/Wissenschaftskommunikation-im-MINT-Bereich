import { Center, Box, VStack, Button, HStack, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from "../components/ui/accordion"

// import { Button } from "./components/ui/button";

const Home = () => {
  console.log(window.innerWidth)
  return (
    <VStack >
      <Box maxWidth="1000px" paddingLeft="10px" paddingRight="10px">
        <Center>
          <Box paddingTop={4} paddingBottom={4} width="100%" marginBottom={3} textAlign={"center"} background={"blackAlpha.800"} color={"white"} fontSize={"x-large"}>
            <Link to="/">Medienkompass</Link>
          </Box>
        </Center>
        <HStack >
          <Box maxWidth="900px">
            <Box marginRight="2rem" marginBottom={3} padding="1rem 2rem" background="orange" borderRadius={20} color="white" >
              Wie kann ich mein Thema präsentieren?
            </Box>
            <Box marginLeft="3rem" marginBottom={3} padding="1rem 2rem" background="green" borderRadius={20} color="white" >
              "Ich will nicht nur einen langweiligen Vortrag halten."
            </Box>
            <Box padding="1rem 2rem" background="purple" borderRadius={20} color="white" >
              Du brauchst Inspiration for deine Kommunikation?
            </Box>
          </Box>
          {window.innerWidth >= 750 && <Box width="50%">
            <VStack>
              <Heading>Einführungsvideo</Heading>
              <video src={"/Wissenschaftskommunikation-im-MINT-Bereich/intro.mp4"} width="90%" controls />
            </VStack>
          </Box>}
        </HStack>

        {window.innerWidth < 750 && <Box width="100%" marginTop="10px">
            <VStack margin="auto">
              <Heading>Einführungsvideo</Heading>
              <video src={"/Wissenschaftskommunikation-im-MINT-Bereich/intro.mp4"} width="80%" controls />
            </VStack>
          </Box>}

        <Box margin={6} padding="1rem 2rem" background="#92a8D1" color="white" >
          Du stehst kurz vor einem Vortrag und möchtest ihn spannender gestalten? Der „Medienkompass“ bietet dir Starthilfe, um passende Methoden für deine Zielgruppe und Intention zu finden. Lass dich von kreativen Alternativen inspirieren, um Wissen effektiv zu vermitteln.
        </Box>
        
        <Center>
          <Link to="/tool"><Button width={150} height={50} fontSize={"lg"}>Start</Button></Link>
        </Center>

        <AccordionRoot marginTop={3} collapsible defaultValue={["b"]}>
            <AccordionItem key={1} value={1} >
              <AccordionItemTrigger>Wozu dient der Medienkompass?</AccordionItemTrigger>
              <AccordionItemContent>
                Unser interaktives Tool unterstützt dich und bietet dir einen Leitfaden für die Grundbausteine der Wissenschaftskommunikation. Es hilft dir, einen passenden Kommunikationsstil und geeignete Kanäle für deine Botschaft zu finden - individuell abgestimmt auf deine Ziele. Schritt für Schritt führt das Tool dich durch die wichtigsten Fragen und gibt dir konkrete Empfehlungen. So wird deine Wissenschaftskommunikation nicht nur effektiver, sondern auch kreativer und einprägsamer.
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
                Bei Fragen oder Anmerkungen meldet euch gerne per Mail an: n.panjalipoursangari@tu-berlin.de
              </AccordionItemContent>
            </AccordionItem>
        </AccordionRoot>

        <Center>
          <Box marginLeft={20} marginRight={20} marginTop={3} marginBottom={3} maxWidth={500} fontSize={"2xs"}>
          Medienkompass is licensed under <a href="https://creativecommons.org/licenses/by/4.0/?ref=chooser-v1">CC BY 4.0</a>
          </Box>
        </Center>
      </Box>
    </VStack>
  )
}

export default Home;