'use client'
import React from "react";
import {useSession} from "next-auth/react";

type Props = { children: React.ReactNode }

export default async function AuthCheck({children}: Props) {
	const {data: session, status} = useSession()
	console.log(session, status)

	if(status === 'authenticated') {
		return <>{children}</>
	} else {
		return <>Not authenticated</>
	}
}