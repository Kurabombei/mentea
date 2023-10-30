export const dynamic = 'force-dynamic'
export const revalidate = 420

import {IPost, IProps} from "@/core/interfaces";

export default async function functionName({params}: IProps) {
	const posts: IPost[] = await fetch('http://localhost:3000/api/content').then(
		(res) => res.json()
	);

	const post = posts.find((post) => post.slug === params.slug)
	if (post) {
		return (
			<div>
				<h1>{post.title}</h1>
				<p>{post.content}</p>
			</div>
		)
	} else {
		return (
			<div>
				<h1>Sorry, no post found by this id: {params.slug}. Try another link!</h1>
			</div>
		)
	}
}