import styles from './page.module.css'
import {getServerSession} from "next-auth";
import {redirect} from "next/navigation";

export default async function Home() {
  const session = await getServerSession()

  if(!session) {
    redirect('/api/auth/signin')
  }

  return (
    <main className={styles.main}>
    </main>
  )
}
//
// // pages/api/hello_worlds.js
// import postgres from "postgres";
//
// let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;
//
// const conn = postgres({
//   host: PGHOST,
//   database: PGDATABASE,
//   username: PGUSER,
//   password: PGPASSWORD,
//   port: 5432,
//   ssl: "require",
// });
//
// function selectAll() {
//   return conn.query("SELECT * FROM hello_world");
// }
