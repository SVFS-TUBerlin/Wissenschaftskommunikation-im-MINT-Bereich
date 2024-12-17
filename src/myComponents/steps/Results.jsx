import { Button } from "../../components/ui/button";
import { useState } from 'react';
import { Box, HStack, VStack, Heading, Stack, Center, Text, Card, Flex, Table } from "@chakra-ui/react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
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
			const entry = i>0 ? ", "+answer?.title : answer?.title
			results.push(entry);
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
		<Center>
		<VStack>
			<VStack>
				<Heading size="md">Du hast folgende Auswahl getroffen:</Heading>
				<Table.Root color="grey" width={"60%"}>
					<Table.Body>
						<Table.Row>
							<Table.Cell>Ziel der Kommunikation:</Table.Cell>
							<Table.Cell><Text fontWeight="semibold">{resolveIDtoTitle(props.stepFile[0], props.form.ziel)}</Text></Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>Alter deiner Zielgruppe:</Table.Cell>
							<Table.Cell><Text fontWeight="semibold">{resolveIDtoTitle(props.stepFile[1].questions[0], props.form.zielgruppe.alter)}</Text> </Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>Themenbezug der Zielgruppe:</Table.Cell>
							<Table.Cell><Text fontWeight="semibold">{resolveIDtoTitle(props.stepFile[1].questions[1], props.form.zielgruppe.themenbezug) === 301 ? "ja" : "nein"}</Text></Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>Kontext:</Table.Cell>
							<Table.Cell><Text fontWeight="semibold">{resolveIDtoTitle(props.stepFile[1].questions[2], props.form.zielgruppe.kontext)}</Text></Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>Art des Mediums:</Table.Cell>
							<Table.Cell><Text fontWeight="semibold">{resolveIDtoTitle(props.stepFile[2], props.form.art)}</Text></Table.Cell>
						</Table.Row>
					</Table.Body>
				</Table.Root>
			<Heading height={50} marginTop={5} borderRadius="10px" color="black" >
				Hier sind ein paar Vorschläge, wie du deine Inhalte kommunizieren kannst.
			</Heading>
			<MediaResults />
			</VStack>
			{/* <Button onClick={handleShow} >Modal öffnen</Button> */}
			<HStack marginTop={5}>
				<Button variant="outline" onClick={props.stepCount!=0 ? props.previousStep : null}><GoArrowLeft color={props.stepCount!=0 ? "rgb(0,0,0)" : "rgb(150,150,150)"} /></Button>
				<Box marginLeft={5} marginRight={5}>{props.stepCount+1}/{props.totalSteps}</Box>
				<Button variant="outline" onClick={props.stepCount!=3 ? props.nextStep : null}><GoArrowRight color={props.stepCount!=3 ? "rgb(0,0,0)" : "rgb(150,150,150)"} /></Button>
			</HStack>
			<Button variant="outline" onClick={restart} >Zum Anfang</Button>
		</VStack>
		</Center>
	</Stack>
	)
}



export default Results;