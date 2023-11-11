import {prisma} from "@/lib/prisma";
import {Metadata} from "next";
import styles from "@/core/components/UserCard/UserCard.module.css";

interface Props {
	params: {
		id: string
	}
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
	const user = await prisma.user.findUnique({where: {id: params.id}})
	return {title: `User profile of ${user?.name}`}
}

export default async function UserProfile({params}: Props) {
	const user = await prisma.user.findUnique({where: {id: params.id}})
	const {name, bio, image} = user ?? {}

	return (
		<div className={`${styles.card} ${styles.wideCard}`}>
			<h1>{name}</h1>
			<div className={styles.picture}>
				<img
					width={300}
					src={image ?? '/default_avatar.jpg'}
					alt={`${name}'s profile`}
				/>
			</div>
			<div className={styles.cardContent}>
				<h3>Bio</h3>
				<p>{bio}</p>
			</div>
		</div>
	)
}