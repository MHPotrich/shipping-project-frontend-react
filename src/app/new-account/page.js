"use client";
import { useRouter } from "next/navigation";
import { createAccount } from "@/services/account";
import {
	Grid2 as Grid,
	TextField,
	Button,
	Container,
	Typography,
} from "@mui/material";
import { useState } from "react";
import CustomHeader from "@/components/custom-header";

export default function NewAccount() {
	const router = useRouter();
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	async function handlerCreateAccount() {
		setIsLoading(true);
		await createAccount({
			FirstName: firstName,
			lastName: lastName,
		});

		setIsLoading(false);
		router.replace("/");
	}

	return (
		<>
			<CustomHeader showAccountArea={false} />
			<Container>
				<Typography variant="h2" component="h2">
					Create an account
				</Typography>
				<Grid
					container
					rowSpacing={1}
					columnSpacing={{ xs: 1, sm: 2, md: 3 }}
				>
					<Grid size={6}>
						<TextField
							id="email"
							label="Email"
							variant="standard"
							fullWidth
							onChange={(event) => {
								setEmail(event.target.value);
							}}
						/>
					</Grid>
					<Grid size={6}>
						<TextField
							id="password"
							label="Password"
							variant="standard"
							fullWidth
							onChange={(event) => {
								setPassword(event.target.value);
							}}
						/>
					</Grid>
					<Grid size={6}>
						<TextField
							id="first-name"
							label="First Name"
							variant="standard"
							fullWidth
							onChange={(event) => {
								setFirstName(event.target.value);
							}}
						/>
					</Grid>
					<Grid size={6}>
						<TextField
							id="last-name"
							label="Last Name"
							variant="standard"
							fullWidth
							onChange={(event) => {
								setLastName(event.target.value);
							}}
						/>
					</Grid>
					<Grid size={12}>
						<Button
							variant="contained"
							loading={isLoading}
							onClick={handlerCreateAccount}
							fullWidth
						>
							Create Account
						</Button>
					</Grid>
					<Grid size={12}>
						<Button variant="text" fullWidth>
							Cancel
						</Button>
					</Grid>
				</Grid>
			</Container>
		</>
	);
}
