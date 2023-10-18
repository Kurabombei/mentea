import type {Metadata} from 'next'
import NavMenu from "@/core/components/NavMenu/NavMenu";
import './globals.css'

export const metadata: Metadata = {
	title: 'Mentea',
	description: 'An web app to make your dreams come true',
}

export default function RootLayout({
	                                   children,
                                   }: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
		<body>
		<NavMenu/>
		{children}
		</body>
		</html>
	)
}
