import styles from '../page.module.css';
import {prisma} from "@/lib/prisma";
import UserCard from "@/core/components/UserCard/UserCard";

export default async function Users() {
	const users = await prisma.user.findMany();

	return (
		<div className={styles.grid}>
			{users.map((user) => {
				return <UserCard key={user.id} {...user} />;
			})}
		</div>
	)
}