import { Button } from "../../components/ui/button";
import { useState } from 'react';
import { Box, HStack, VStack, Heading, Stack, Center, Card, Flex, Image } from "@chakra-ui/react";

import Modal from 'react-bootstrap/Modal';
import "./styles.css";
import MediaInformation from "../MediaInformation";

import { FiExternalLink } from "react-icons/fi";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";


const Results = (props) => {

	var mediaFile = require ('../media.json');
	const [show, setShow] = useState(false);
	const [showMore, setShowMore] = useState(false);
	const [mediaCount, setmediaCount] = useState(0);
	const [selectedMedia, setSelectedMedia] = useState("");
	const handleClose = () => setShow(false);
	const handleShow = (media) => {
		setSelectedMedia(media);
		console.log(selectedMedia);
		setShow(true);
	}

	const openPDFinNewWindow = () => {

	}

	const restart = () => {
		props.reset();
		window.scrollTo(0,0);
		props.firstStep();
	};

	const compareRanks= (a, b) => {
		if(a.rank < b.rank) {
			return -1;
		}
		if(a.rank > b.rank) {
			return 1;
		}
		return 0;
	}

	const handleShowMore = () => {
		setShowMore(!showMore);
	}

	const MediaResults = () => {
		const media = []
		for(let i = 0; i < mediaFile.length; i++) {
			if(
				props.form.ziel.some(item => parseInt(item) === 111 || mediaFile[i].ziel.includes(parseInt(item))) &
				props.form.zielgruppe.alter.some(item => parseInt(item) === 208 || mediaFile[i].alter.includes(parseInt(item))) &
				// (parseInt(props.form.zielgruppe.themenbezug) === 303 || mediaFile[i].themenbezug.includes(parseInt(props.form.zielgruppe.themenbezug))) &
				// props.form.zielgruppe.kontext.some(item => parseInt(item) === 406 || mediaFile[i].kontext.includes(parseInt(item))) &
				props.form.art.some(item => parseInt(item) === 505 || mediaFile[i].art.includes(parseInt(item)))
			) {
				let mediaRanking = 0;
				for(let j = 0; j < props.form.ziel.length; j++) {
					mediaRanking += mediaFile[i].ziel.indexOf(parseInt(props.form.ziel[j]));
				}
				for(let j = 0; j < props.form.zielgruppe.alter.length; j++) {
					mediaRanking += mediaFile[i].alter.indexOf(parseInt(props.form.zielgruppe.alter[j]));
				}
				media.push({
					"rank": mediaRanking,
					"media": mediaFile[i]
				});
			}
		}

		media.sort(compareRanks);
		setmediaCount(media.length);

		return (
			<Flex gap="15px" wrap="wrap" justify="center" >
			{
				media.slice(0, showMore ? media.length : 3).map((item, index) =>  
					<Card.Root width="320px" padding="5px" background="lightgrey" >
						<Card.Title textAlign="center" >{item.media.name}</Card.Title>
						<Card.Body>
							<Image rounded="md" height="150px" src={"/Wissenschaftskommunikation-im-MINT-Bereich/img/"+item.media.name+".webp"} alt={"Bild von "+item.media.name}></Image>
						</Card.Body>
						<Card.Footer>
							<a href={"/Wissenschaftskommunikation-im-MINT-Bereich/media/"+item.media.name+".pdf"} target="_blank">
								<HStack>
									Weitere Informationen (PDF)
									<FiExternalLink />
								</HStack>
							</a>
						</Card.Footer>
					</Card.Root>)
			}
				
			</Flex>
		);
	}

	const resolveIDtoTitle = (step, id) => {
		const results = []
		for(let i = 0; i < id.length; i++) {
			let answer = (step.answers.find(item => item.id === parseInt(id[i])));
			const entry = i>0 ? ", "+answer?.title : answer?.title
			results.push(entry);
		}
		return results;
	}

	const onDownloadPDF = (pathToFile) => {
        const pdfUrl = pathToFile;
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Medienkompass_Beipackzettel.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

	return (
	<Stack>
		<Modal className="modal-wrapper" show={show} onHide={handleClose} >
			<Box className="modal" show={show} >
			<Modal.Header className="modal-header" closeButton>
				<Modal.Title>Tipps & hilreiche Links</Modal.Title>
			</Modal.Header>
			<Modal.Body className="modal-body" ><MediaInformation selectedMedia={selectedMedia} /></Modal.Body>
			<Modal.Footer className="modal-footer">
				<Button onClick={handleClose} borderColor="grey" >
					Close
				</Button>
			</Modal.Footer>
			</Box>
		</Modal>
		<Center>
		<VStack>
			<Heading marginBottom={5} borderRadius="10px" color="black" >
				Hier sind Vorschläge, wie du deine Inhalte kommunizieren kannst:
			</Heading>
			<MediaResults />
			{(mediaCount > 3) && <Button variant="plain" onClick={handleShowMore}>
				<HStack>
					{ showMore ? "weniger anzeigen" : "mehr anzeigen" }
					{ showMore ? <IoChevronUp /> : <IoChevronDown /> }
				</HStack>
			</Button>}
			<Box maxWidth="60%" padding="1rem 2rem" background="turquoise" color="white" margin={3} marginBottom={0}>
				<VStack>
					Um dir noch mehr bei deiner Wissenschaftskommunikation zu helfen, haben wir hier einen praktischen Hilfezettel für die wichtigsten Aspekte entworfen:
					<Button variant="outline" onClick={() => onDownloadPDF("Medienkompass_Beipackzettel.pdf")}>Download Medienkompass_Beipackzettel.pdf</Button>
				</VStack>
			</Box>
			<Button marginTop={5} onClick={restart} >Zurück zum Fragebogen</Button>
		</VStack>
		</Center>
	</Stack>
	)
}



export default Results;