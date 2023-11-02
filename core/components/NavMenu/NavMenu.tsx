import Link from 'next/link';
import styles from './NavMenu.module.css';
import Image from 'next/image';
import {SignInButton} from "@/core/components/buttons/login";

export default function NavMenu() {
	return (
		<nav className={styles.nav}>
			<Link href={'/'}>
				<Image
					src="/logo.svg"
					width={216}
					height={30}
					alt='Mentea logo'
				/>
			</Link>
			<ul className={styles.links}>
				<li>
					<Link href={'/blog'}>Blog</Link>
				</li>
				<li>
					<Link href={'/users'}>Users</Link>
				</li>
				<li>
					<Link href={'/about'}>About us</Link>
				</li>
				<li>
					<SignInButton />
				</li>
			</ul>
		</nav>
	)
}