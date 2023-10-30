import { NextResponse } from 'next/server';

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

export function GET() {
	return NextResponse.json(posts);
}