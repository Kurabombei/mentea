import type {Metadata} from 'next'
import NavMenu from "@/core/components/NavMenu/NavMenu";
import './globals.css'
import AuthProvider from "./AuthProvider";

export const metadata: Metadata = {
	title: 'Mentea',
	description: 'An web app to make your dreams come true',
}

type Props = { children: React.ReactNode }

export default function RootLayout({children}: Props) {
	return (
		<AuthProvider>
			<html lang="en">
				<body>
					<NavMenu/>
					<main>{children}</main>
				</body>
			</html>
		</AuthProvider>
	)
}
