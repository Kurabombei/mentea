import { NextResponse } from 'next/server';
import {getServerSession} from "next-auth";

// Dummy data
const posts = [
	{
		title: 'Lorem Ipsum',
		slug: 'lorem-ipsum',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
	},
	{
		title: 'Lorem Ipsum',
		slug: 'lorem-dorem',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
	},
	{
		title: 'Lorem Ipsum',
		slug: 'lorem-rirum',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
	},
	{
		title: 'Lorem Ipsum',
		slug: 'lorem-raram',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
	},
	{
		title: 'Lorem Ipsum',
		slug: 'lorem-iprum',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
	},
	{
		title: 'Lorem Ipsum',
		slug: 'lorem-ipsur',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
	},
];

export async function GET() {
	const session = await getServerSession()
	console.log(session?.user)
	return NextResponse.json(posts);
}