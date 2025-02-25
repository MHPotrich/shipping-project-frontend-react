"use client";

import {
	AppBar,
	Toolbar,
	Box,
	Button,
	Container,
	Modal,
	Typography,
	TextField,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./style.css";
import { useState } from "react";
import Link from "next/link";

const pages = [
	{
		displayName: "Home",
		href: "/",
	},
	{
		displayName: "Track shipping",
		href: "/track",
	},
];

function LoginHeaderArea() {
	const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
	const [isLoginModalOpened, setIsLoginModalOpened] = useState(false);
	const [id, setId] = useState("");
	const [password, setPassword] = useState("");

	if (isUserLoggedIn) {
		return (
			<Box sx={{ marginLeft: "auto" }}>
				<Button sx={{ my: 2, color: "white", display: "block" }}>
					<AccountCircleIcon />
				</Button>
			</Box>
		);
	}

	return (
		<Box sx={{ marginLeft: "auto" }}>
			<Button
				sx={{
					my: 2,
					color: "white",
					display: "block",
					textAlign: "center",
				}}
				onClick={() => setIsLoginModalOpened(true)}
			>
				<span>Login/Sign up</span>
				<AccountCircleIcon />
			</Button>
			<Modal
				open={isLoginModalOpened}
				onClose={() => setIsLoginModalOpened(false)}
			>
				<Box
					sx={{
						position: "absolute",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
						width: 300,
						bgcolor: "background.paper",
						border: "2px solid #000",
						boxShadow: 24,
						p: 4,
						display: "flex",
						flexDirection: "column",
					}}
				>
					<Typography>Login</Typography>
					<TextField
						required
						id="login-id"
						label="Id"
						value={id}
						onChange={(event) => setId(event.target.value)}
						size="small"
					/>
					<TextField
						required
						id="login-password"
						label="Password"
						type="password"
						value={password}
						onChange={(event) => setPassword(event.target.value)}
						size="small"
					/>
					<Button variant="contained">Login</Button>
					<Button variant="text" href="/new-account">
						Sign up
					</Button>
				</Box>
			</Modal>
		</Box>
	);
}

export default function CustomHeader({ showAccountArea = true }) {
	return (
		<AppBar id="custom-header" position="static">
			<Container>
				<Toolbar>
					<Box
						sx={{
							flexGrow: 1,
							display: { xs: "none", md: "flex" },
						}}
					>
						{pages.map((page) => (
							<Button
								key={page.href}
								sx={{ my: 2, color: "white", display: "block" }}
								href={page.href}
							>
								{page.displayName}
							</Button>
						))}
					</Box>
					{showAccountArea && <LoginHeaderArea />}
				</Toolbar>
			</Container>
		</AppBar>
	);
}
