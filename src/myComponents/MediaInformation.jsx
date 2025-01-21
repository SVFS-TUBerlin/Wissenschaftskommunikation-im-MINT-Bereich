import { Box, Link, VStack, Text, List } from "@chakra-ui/react";
import { LuExternalLink } from "react-icons/lu";



const PodcastInformation = () => {
    return (
        <Box color="white">
            <VStack align={"left"}>
                <Link color="white" href="https://www.buzzsprout.com/blog/how-to-start-a-podcast">How to start a podcast (buzzsprout.com) <LuExternalLink /></Link>
                <Link color="white" href="https://www.podcast.de/podcast-wissen/erster-podcast-hilfe-und-tipps-zum-start">Erster Podcast: Hilfe und Tipps zum Start (podcast.de) <LuExternalLink /></Link>
            </VStack>
        </Box>
    )
}
const RadiobeitragInformation = () => {
    return (
        <Box color="white">
            <VStack align={"left"}>
                <Link color="white" href="https://www.cimdata.de/blog/2018/10/radiobeitraege-produzieren-mit-mediengestaltern/">Radiobeiträge produzieren mit Mediengestaltern (cimdata.de) <LuExternalLink /></Link>
                <Link color="white" href="https://medienbildung-muenchen.de/beitrag/radio-selber-machen/">Radio selber machen (medienbildung-muenchen.de) <LuExternalLink /></Link>
            </VStack>
        </Box>
    )
}
const HörspielInformation = () => {
    return (
        <Box color="white">
            <VStack align={"left"}>
                <Text fontWeight="semibold">Allgemein:</Text>
                <Link color="white" href="https://liberaudio.de/hoerbuch-selbst-aufnehmen-tipps-fuer-selfpublisher-um-kosten-zu-sparen/">Hörbuch selbst aufnehmen: Tipps für Selfpublisher um Kosten zu sparen (liberaudio.de) <LuExternalLink /></Link>
                <Text fontWeight="semibold">Hörspiel für/mit Kindern:</Text>
                <Link color="white" href="https://www.kinderfunkkolleg-geld.de/schule/Unterrichtsmaterialien/hoerspiele-selber-machen">Hörspiele selber machen (kinderfunkkolleg-geld.de) <LuExternalLink /></Link>
                <Link color="white" href="https://www.ndr.de/kultur/hoerspiel/hoerspiel_in_der_schule/diykit108.pdf">Hörspiel in der Schule: diykit108.pdf (ndr.de) <LuExternalLink /></Link>
                <Text fontWeight="semibold">kostenlos Audacity herunterladen:</Text>
                <Link color="white" href="https://www.audacityteam.org/download/">Audacity <LuExternalLink /></Link>
            </VStack>
        </Box>
    )
}
const AppInformation = () => {
    return (
        <Box color="white">
            <VStack align={"left"}>
                <Text fontWeight="semibold">Vorstellung verschiedener kostenloser App-Builder:</Text>
                <Link color="white" href="https://appmaster.io/de/blog/top-5-der-kostenlosen-app-builder-ohne-programmierung">Top 5 der kostenlosen App-Builder ohne Programmierung (appmaster.io) <LuExternalLink /></Link>
                <Text fontWeight="semibold">etwas professionelleres Programm (teilweise mit Gebühren):</Text>
                <Link color="white" href="https://de.wix.com/app-builder?utm_source=bing&utm_medium=cpc&utm_campaign=506131764^1261141483335345^search%20-%20dsa&experiment_id=de.wix.com^b^^&msclkid=07d0ff56851c11b381fb981b574ec058">Mehr Umsatz mit deiner eigenen App. Ohne Coding- und Programmierkenntnisse (wix.com) <LuExternalLink /></Link>
            </VStack>
        </Box>
    )
}
const VideoInformation = () => {
    return (
        <Box color="white">
            <VStack align={"left"}>
                <Text fontWeight="semibold">kostenlose Softwares zum Erstellen von Videos:</Text>
                <List.Root>
                    <List.Item>Windows Movie Maker</List.Item>
                    <List.Item>CapCut</List.Item>
                    <List.Item>etwas professioneller: Adobe Premiere Pro</List.Item>
                </List.Root>
                <Text fontWeight="semibold">Hilfreiche Tipps zur Erstellung von Videos: </Text>
                <Link color="white" href="https://www.techsmith.de/blog/videotipps-bessere-videos/">Videotipps. bessere Videos (techsmith.de) <LuExternalLink /></Link>
                <Link color="white" href="https://blog.hubspot.de/marketing/erklaervideo-erstellen">Erklärvideo erstellen (hubspot.de) <LuExternalLink /></Link>
            </VStack>
        </Box>
    )
}
const VortragInformation = () => {
    return (
        <Box color="white">
            <VStack align={"left"}>
                <Text fontWeight="semibold">Tipps zum Vortrag Halten:</Text>
                <Link color="white" href="https://www.canva.com/de_de/lernen/vortrag-halten-erfolgreiches-praesentieren/">Vortrag halten. Erfolgreiches Präsentieren (canva.com) <LuExternalLink /></Link>
                <Link color="white" href="https://www.avantgarde-experts.de/de/magazin/vortrag-halten/">Vortrag halten (avantgarde-experts.de) <LuExternalLink /></Link>
                <Text fontWeight="semibold">Software zum erstellen von digitalen Folien:</Text>
                <List.Root>
                    <List.Item>Canva</List.Item>
                    <List.Item>PowerPoint</List.Item>
                    <List.Item>Prezi</List.Item>
                    <List.Item>Google Slides</List.Item>
                    <List.Item>Für Umfragen: Mentimeter</List.Item>
                </List.Root>
            </VStack>
        </Box>
    )
}
const BuchInformation = () => {
    return (
        <Box color="white">
            <VStack align={"left"}>
                <Text fontWeight="semibold">Wie schreibe ich ein Buch?</Text>
                <Link color="white" href="https://www.mentorium.de/buch-schreiben/">Buch schreiben (mentorium.de) <LuExternalLink /></Link>
                <Link color="white" href="https://www.die-schreibtrainerin.de/buch-schreiben/">Buch schreiben (die-schreibtrainerin.de) <LuExternalLink /></Link>
                <Text fontWeight="semibold">Buch drucken & veröffentlichen:</Text>
                <Link color="white" href="https://www.bookmundo.com/de/">bookmundo.com <LuExternalLink /></Link>
                <Link color="white" href="https://www.bod.de/preise?msclkid=03f09fefde3e185ab298f8a204afa75c&utm_source=bing&utm_medium=cpc&utm_campaign=DE%3A%20Buch%20drucken&utm_term=buch%20online%20drucken&utm_content=Buch%20drucken">Preise für Druck und Veröffentlichung (bod.de) <LuExternalLink /></Link>
            </VStack>
        </Box>
    )
}
const FlugblaetterInformation = () => {
    return (
        <Box color="white">
            <VStack align={"left"}>
                <Text fontWeight="semibold">digitales Design Tool:</Text>
                <Link color="white" href="https://www.canva.com/de_de/erstellen/flugblatt/">Flugblatt erstellen (canva.com) <LuExternalLink /></Link>
                <Text fontWeight="semibold">Wie erstelle ich ein Flugblatt?</Text>
                <Link color="white" href="https://de.wikihow.com/Ein-Flugblatt-machen">Ein Flugblatt machen (wikihow.com) <LuExternalLink /></Link>
            </VStack>
        </Box>
    )
}
const ZeitschriftenartikelInformation = () => {
    return (
        <Box color="white">
            <VStack align={"left"}>
                <Text fontWeight="semibold">Artikel schreiben:</Text>
                <Link color="white" href="https://www.schreiben.net/artikel/zeitungsartikel-schreiben-10286/#:~:text=Tipps%20zum%20Verfassen%20eines%20Zeitungsartikels%201%20Benutze%20seri%C3%B6se,Zeitungsartikel%20...%208%20Themen%20f%C3%BCr%20einen%20Zeitungsartikel%20">Zeitungsartikel schreiben: Aufbau, 8 Tipps & 11 Arten (schreiben.net) <LuExternalLink /></Link>
                <Text fontWeight="semibold">Fachartikel schreiben:</Text>
                <Link color="white" href="https://www.textbroker.de/fachartikel-schreiben-so-funktionierts">Fachartikel: schreiben so funktionierts (textbroker.de) <LuExternalLink /></Link>
            </VStack>
        </Box>
    )
}
const CollageInformation = () => {
    return (
        <Box color="white">
            <VStack align={"left"}>
                <Text fontWeight="semibold">Tools für die Erstellung:</Text>
                <Link color="white" href="https://www.pureref.com">pureref.com <LuExternalLink /></Link>
                <Link color="white" href="https://www.canva.com/de_de/erstellen/fotocollage/">Fotocollage (canva.com) <LuExternalLink /></Link>
                <Text fontWeight="semibold">Inhaltliche Hilfe:</Text>
                <Link color="white" href="https://www.methodenkartei.uni-oldenburg.de/methode/collage/">Collage (methodenkartei.uni-oldenburg.de) <LuExternalLink /></Link>
            </VStack>
        </Box>
    )
}
const MindmapInformation = () => {
    return (
        <Box color="white">
            <VStack align={"left"}>
                <Text fontWeight="semibold">Tools für die Erstellung:</Text>
                <Link color="white" href="https://miro.com/de/mind-map/">Mind-Map (miro.com) <LuExternalLink /></Link>
                <Link color="white" href="https://www.canva.com/de_de/diagramme/mindmaps/">Mindmaps (canva.com) <LuExternalLink /></Link>
                <Text fontWeight="semibold">Inhaltliche Hilfe:</Text>
                <Link color="white" href="https://learnattack.de/journal/mindmap-erstellen-in-5-einfachen-schritten-zur-mindmap/">Mindmap erstellen in 5 einfachen Schritten zur Mindmap (learnattack.de) <LuExternalLink /></Link>
            </VStack>
        </Box>
    )
}
const WebseiteInformation = () => {
    return (
        <Box color="white">
            <VStack align={"left"}>
                <Link color="white" href="https://www.computerbild.de/artikel/Eigene-Website-erstellen-33318723.html">Eigene Website erstellen (computerbild.de) <LuExternalLink /></Link>
                <Text fontWeight="semibold">Tools:</Text>
                <List.Root>
                    <List.Item>IONOS</List.Item>
                    <List.Item>Wix</List.Item>
                    <List.Item>Strato</List.Item>
                    <List.Item>Jimdo</List.Item>
                    <List.Item>WordPress</List.Item>
                </List.Root>
            </VStack>
        </Box>
    )
}
const PosterInformation = () => {
    return (
        <Box color="white">
            <VStack align={"left"}>
                <Text fontWeight="semibold">Erstellen mit:</Text>
                <Link color="white" href="https://www.canva.com/de_de/erstellen/fotocollage/">Fotocollage (canva.com) <LuExternalLink /></Link>
                <Text fontWeight="semibold">Hilfreiche Tipps und Links:</Text>
                <Link color="white" href="https://www.wissenschaftskommunikation.de/format/postersession-und-posterslam/">Postersession und Posterslam (wissenschaftskommunikation.de) <LuExternalLink /></Link>
                <Link color="white" href="https://www.uni-bremen.de/fileadmin/user_upload/sites/studierwerkstatt/Leitfaden_wissenschaftliche_Poster_erstellen.pdf">Leitfaden_wissenschaftliche_Poster_erstellen.pdf (uni-bremen.de) <LuExternalLink /></Link>
            </VStack>
        </Box>
    )
}
const ExperimentInformation = () => {
    return (
        <Box color="white">
            <VStack align={"left"}>
                <Link color="white" href="https://de.serlo.org/biologie/27023/wie-funktionieren-experimente">Wie funktionieren Experimente (serlo.org) <LuExternalLink /></Link>
                <Link color="white" href="https://www2.klett.de/sixcms/media.php/82/27330_132_133.pdf">Ein Experiment durchführen (pdf) (klett.de) <LuExternalLink /></Link>
            </VStack>
        </Box>
    )
}
const SpielInformation = () => {
    return (
        <Box color="white">
            <VStack align={"left"}>
                <Link color="white" href="https://medienbildung-muenchen.de/beitrag/lernspiele-selbst-erstellen/">Lernspiele selbst erstellen (medienbildung-muenchen.de) <LuExternalLink /></Link>
                <Link color="white" href="https://www.wissenschaftskommunikation.de/format/gesellschaftsspiele/">Gesellschaftsspiele (wissenschaftskommunikation.de) <LuExternalLink /></Link>
            </VStack>
        </Box>
    )
}
const WorkshopInformation = () => {
    return (
        <Box color="white">
            <VStack align={"left"}>
                <Link color="white" href="https://karlhosang.de/workshop-konzept-erstellen/">Workshop Konzept erstellen (karlhosang.de) <LuExternalLink /></Link>
                <Link color="white" href="https://www.bildungundkonzept.de/aktuelles/wie-konzipiert-man-einen-workshop">Wie konzipiert man einen Workshop (bildungundkonzept.de) <LuExternalLink /></Link>
                <Text fontWeight="semibold">Hilfsmittel:</Text>
                <Link color="white" href="https://www.canva.com/de_de/erstellen/fotocollage/">Fotocollage (canva.com) <LuExternalLink /></Link>
                <Link color="white" href="https://kahoot.com">kahoot.com <LuExternalLink /></Link>
            </VStack>
        </Box>
    )
}

const MediaInformation = (props) => {

    const media = {
        "Podcast": <PodcastInformation/>,
        "Radiobeitrag": <RadiobeitragInformation/>,
        "Hörspiel": <HörspielInformation/>,
        "App / Anwendung": <AppInformation/>,
        "Video": <VideoInformation/>,
        "Vortrag": <VortragInformation/>,
        "Buch": <BuchInformation/>,
        "Flugblätter": <FlugblaetterInformation/>,
        "Zeitschriftenartikel": <ZeitschriftenartikelInformation/>,
        "Collage": <CollageInformation/>,
        "Mindmap": <MindmapInformation/>,
        "Webseite": <WebseiteInformation/>,
        "Poster / Plakat": <PosterInformation/>,
        "Experiment": <ExperimentInformation/>,
        "Spiel": <SpielInformation/>,
        "Workshop": <WorkshopInformation/>,
    }

    console.log("MediaInformation "+props.selectedMedia);

    return (
        <>
            {media[props.selectedMedia]}
        </>
    );
} 

export default MediaInformation;