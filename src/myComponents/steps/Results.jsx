import { BsAndroid } from "react-icons/bs";
import { Button } from "../../components/ui/button";
import { Box, VStack, Heading, Stack, Center, Text, HStack, Card } from "@chakra-ui/react";

const Results = (props) => {

	var mediaFile = require ('../media.json');

	const restart = () => {
		props.reset();
		props.firstStep();
	};

	const possibleMedia = () => {
		const media = []
		for(let i = 0; i < mediaFile.length; i++) {
			if(
				props.form.ziel.some(item => mediaFile[i].ziel.includes(parseInt(item))) &
				props.form.zielgruppe.alter.some(item => mediaFile[i].alter.includes(parseInt(item))) &
				mediaFile[i].themenbezug.includes(parseInt(props.form.zielgruppe.themenbezug)) 
				// props.form.zielgruppe.kontext.some(item => mediaFile[i].kontext.includes(item)) &
				// props.form.art.some(item => mediaFile[i].art.includes(item))
			) {
				console.log(mediaFile[i].name);
				media.push(mediaFile[i].name);
			}
		}
		return media;
	}

	return (
	<Stack>
		<Center color="white">
		<VStack>
			<Heading height={50} borderRadius="10px" color="black" >
				Hier sind ein paar Vorschläge, wie du deine Inhalte kommunizieren kannst.
			</Heading>
			<Box bg="grey" padding="10px" borderRadius="10px">
				<Text fontWeight="semibold">Du hast folgende Auswahl getroffen</Text>
				Deine Zielgruppe ist 
				<Text fontWeight="semibold">{props.form.zielgruppe.alter}</Text> 
				Jahre alt und hat zu dem Thema
				<Text fontWeight="semibold">{props.form.zielgruppe.themenbezug = "ja" ? "einen" : "keinen"}</Text>
				Bezug.
				Der Kontext deine Wissenschaftskommunikation ist
				<Text fontWeight="semibold">{props.form.zielgruppe.kontext}</Text>
				und du willst in diesem Zusammenhang deine Zielgruppe für dein Thema
				für deine Inhalte <Text fontWeight="semibold">{props.form.ziel}</Text>
				Dafür willst du vor allem 
				<Text fontWeight="semibold">{props.form.art}</Text>
				gestaltete Medien nutzen.
			</Box>
			<Box color="black">
				<HStack>
					{possibleMedia()}
				</HStack>
			</Box>
			<Button onClick={restart} marginTop={10} >Zum Anfang</Button>
		</VStack>
		</Center>
	</Stack>
	)
}

export default Results;