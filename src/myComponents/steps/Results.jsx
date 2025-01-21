import { Button } from "../../components/ui/button";
import { useState } from 'react';
import { Box, VStack, Heading, Stack, Center, Text, Card, Flex, Table } from "@chakra-ui/react";
import Modal from 'react-bootstrap/Modal';
import "./styles.css";
import MediaInformation from "../MediaInformation";

const Results = (props) => {

	var mediaFile = require ('../media.json');
	const [show, setShow] = useState(false);
	const [selectedMedia, setSelectedMedia] = useState("");
	const handleClose = () => setShow(false);
	const handleShow = (media) => {
		setSelectedMedia(media);
		console.log(selectedMedia);
		setShow(true);
	}

	const restart = () => {
		props.reset();
		window.scrollTo(0,0);
		props.firstStep();
	};

	const MediaResults = () => {
		const media = []
		for(let i = 0; i < mediaFile.length; i++) {
			if(
				props.form.ziel.some(item => parseInt(item) === 111 || mediaFile[i].ziel.includes(parseInt(item))) &
				props.form.zielgruppe.alter.some(item => parseInt(item) === 208 || mediaFile[i].alter.includes(parseInt(item))) &
				(parseInt(props.form.zielgruppe.themenbezug) === 303 || mediaFile[i].themenbezug.includes(parseInt(props.form.zielgruppe.themenbezug))) &
				props.form.zielgruppe.kontext.some(item => parseInt(item) === 406 || mediaFile[i].kontext.includes(parseInt(item))) &
				props.form.art.some(item => parseInt(item) === 505 || mediaFile[i].art.includes(parseInt(item)))
			) {
				media.push(mediaFile[i]);
			}
		}
		return (
			<Flex gap="15px" wrap="wrap" justify="center" >
			{
				media.map((item, index) =>  
				<Button variant="solid" padding="1px" height="fit-content" borderRadius="8px" >
					<Card.Root onClick={() => handleShow(item.name)} width="320px" padding="10px" >
						<Card.Title textAlign="center" >{item.name}</Card.Title>
					</Card.Root>
				</Button>)
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
        link.download = "beipackzettel.pdf"; // specify the filename
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
			<VStack>
				<Heading size="md">Du hast folgende Auswahl getroffen:</Heading>
				<Table.Root color="grey" width={"60%"}>
					<Table.Body>
						<Table.Row>
							<Table.Cell padding="6px" >Ziel der Kommunikation:</Table.Cell>
							<Table.Cell padding="6px" ><Text fontWeight="semibold">{resolveIDtoTitle(props.stepFile[0], props.form.ziel)}</Text></Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell padding="6px" >Alter deiner Zielgruppe:</Table.Cell>
							<Table.Cell padding="6px" ><Text fontWeight="semibold">{resolveIDtoTitle(props.stepFile[1].questions[0], props.form.zielgruppe.alter)}</Text> </Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell padding="6px" >Themenbezug der Zielgruppe:</Table.Cell>
							<Table.Cell padding="6px" ><Text fontWeight="semibold">{resolveIDtoTitle(props.stepFile[1].questions[1], props.form.zielgruppe.themenbezug) === 301 ? "ja" : "nein"}</Text></Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell padding="6px" >Kontext:</Table.Cell>
							<Table.Cell padding="6px" ><Text fontWeight="semibold">{resolveIDtoTitle(props.stepFile[1].questions[2], props.form.zielgruppe.kontext)}</Text></Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell padding="6px" >Art des Mediums:</Table.Cell>
							<Table.Cell padding="6px" ><Text fontWeight="semibold">{resolveIDtoTitle(props.stepFile[2], props.form.art)}</Text></Table.Cell>
						</Table.Row>
					</Table.Body>
				</Table.Root>
			<Heading marginTop={5} marginBottom={0} borderRadius="10px" color="black" >
				Hier sind Vorschläge, wie du deine Inhalte kommunizieren kannst.
			</Heading>
            <Box marginBottom={3}>(Klicke auf ein Medium für mehr Informationen)</Box>
			<MediaResults />
            <Box marginBottom={3}>Um dir noch mehr bei deiner Wissenschaftskommunikation zu helfen, haben wir hier einen praktischen Hilfezettel für die wichtigsten Aspekte entworfen:</Box>
			<Button onClick={() => onDownloadPDF("WissKommPass_Beipackzettel.pdf")}>Download Zusatzmaterial</Button>
			</VStack>
			<Button marginTop={5} variant="outline" onClick={restart} >Zum Anfang</Button>
		</VStack>
		</Center>
	</Stack>
	)
}



export default Results;