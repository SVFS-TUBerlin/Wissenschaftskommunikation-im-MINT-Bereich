import { Button } from "../../components/ui/button";
import { useState } from 'react';
import { Box, VStack, Heading, Stack, Center, Text, Card, Flex } from "@chakra-ui/react";
import Modal from 'react-bootstrap/Modal';
import "./styles.css";

const Results = (props) => {

	var mediaFile = require ('../media.json');
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const restart = () => {
		props.reset();
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
				<Card.Root onClick={handleShow} width="320px" padding="10px" >
					<Card.Title textAlign="center" >{item.name}</Card.Title>
				</Card.Root>)
			}
				
			</Flex>
		);
	}

	const resolveIDtoTitle = (step, id) => {
		const results = []
		for(let i = 0; i < id.length; i++) {
			let answer = (step.answers.find(item => item.id === parseInt(id[i])));
			results.push(answer?.title);
		}
		return results;
	}

	return (
	<Stack>
		<Modal className="modal-wrapper" show={show} onHide={handleClose}>
			<Box className="modal" show={show} >
			<Modal.Header className="modal-header" closeButton>
				<Modal.Title>Modal heading</Modal.Title>
			</Modal.Header>
			<Modal.Body className="modal-body" >Woohoo, you are reading this text in a modal!</Modal.Body>
			<Modal.Footer className="modal-footer">
				<Button onClick={handleClose} borderColor="grey" >
					Close
				</Button>
			</Modal.Footer>
			</Box>
		</Modal>
		<Center color="white">
		<VStack>
			<Heading height={50} borderRadius="10px" color="black" >
				Hier sind ein paar Vorschläge, wie du deine Inhalte kommunizieren kannst.
			</Heading>
			<VStack>
				<Box bg="grey" padding="10px" borderRadius="10px">
					<Text fontWeight="semibold">Du hast folgende Auswahl getroffen</Text>
					Deine Zielgruppe ist 
					<Text fontWeight="semibold">{resolveIDtoTitle(props.stepFile[1].questions[0], props.form.zielgruppe.alter)}</Text> 
					Jahre alt und hat zu dem Thema
					<Text fontWeight="semibold">{resolveIDtoTitle(props.stepFile[1].questions[1], props.form.zielgruppe.themenbezug) === 301 ? "einen" : "keinen"}</Text>
					Bezug.
					Der Kontext deine Wissenschaftskommunikation ist
					<Text fontWeight="semibold">{resolveIDtoTitle(props.stepFile[1].questions[2], props.form.zielgruppe.kontext)}</Text>
					und du willst in diesem Zusammenhang deine Zielgruppe für dein Thema
					für deine Inhalte <Text fontWeight="semibold">{resolveIDtoTitle(props.stepFile[0], props.form.ziel)}</Text>
					Dafür willst du vor allem 
					<Text fontWeight="semibold">{resolveIDtoTitle(props.stepFile[2], props.form.art)}</Text>
					gestaltete Medien nutzen.
				</Box>
				<MediaResults />
			</VStack>
			{/* <Button onClick={handleShow} >Modal öffnen</Button> */}
			<Button onClick={restart} marginTop={10} >Zum Anfang</Button>
		</VStack>
		</Center>
	</Stack>
	)
}



export default Results;