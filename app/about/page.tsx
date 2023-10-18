import {Metadata} from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
	title: 'About us',
	description: 'About mentea as a project'
}
export default async function About() {
	return (
		<main>
			<h1>About</h1>
			<p>We are a social mentorship company.</p>
		</main>
	)
}