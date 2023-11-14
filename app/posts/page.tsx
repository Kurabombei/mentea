import {getServerSession} from "next-auth";
import {redirect} from "next/navigation";
import styles from "./posts.module.css";

export default async function Posts() {
	const session = await getServerSession()

	if(!session) {
		redirect('/api/auth/signin')
	}

	return (
		<main className={styles.main}>
			all Posts for current user ${ session?.user?.name }
		</main>
	)
}