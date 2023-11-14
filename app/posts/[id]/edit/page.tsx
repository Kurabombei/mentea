import { revalidatePath } from "next/cache";
import {prisma} from "@/lib/prisma";
import styles from "../../posts.module.css"

interface Post {
	id: number;
	createdAt: Date;
	updatedAt: Date;
	title: string;
	content: string;
	published: string;
	author: any;
	authorId: string;
	categories: any[];
}

export default async function PostEditPage({
	                                          params,
                                          }: {
	params: { id: string };
}) {

	// Fetch data
	const post: Post = await prisma.post.findUnique({where: {
			id: params.id
		}})

	async function updatePost(formData: FormData) {
		"use server";

		// Mutate data
		// await kv.set(key, {
		// 	name: formData.get("title"),
		// 	image: formData.get("image"),
		// 	breed: formData.get("breed"),
		// });

		// Revalidate
		revalidatePath(`/posts/${params.id}/edit`);

	}

	return (
		<div className={styles.cardBody}>
			<h2>Edit {post?.title}</h2>

			<form action={updatePost}>
				<label>Title</label>
				<input name="title" type="text" defaultValue={post?.title} />
				<label>Content</label>
				<input name="content" type="text" defaultValue={post?.content} />
				<button type="submit">Save and Continue</button>

			</form>
		</div>
	);
}