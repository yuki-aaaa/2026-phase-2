import { useEffect, useState } from "react"
import { Link } from "react-router"
import { Button } from "~/components/ui/button"

export default function TopPage() {
	const [message, setMessage] = useState<string | null>(null)
	useEffect(() => {
		fetch(`${window.location.origin}/api/hello-react-router`)
			.then((res) => res.json())
			.then((json) => setMessage(json.message))
	}, [])

	return (
		<div class="min-h-screen bg-black">
			<h1 class="text-white">トップページ</h1>
			<div class="text-white">{message}</div>
			<div class="bg-[rgb(255,255,0)] text-[rgb(0,0,255)] text-2xl align-middle px-3 py-1.5 rounded">TEST</div>
			<Button variant="brand" size="xl" className="rounded-2xl" asChild>
				<Link to="/auth/login">Login</Link>
			</Button>
			<Button variant="brand" size="xl" className="rounded-2xl" asChild>
				<Link to="/auth/register">Register</Link>
			</Button>
			<Button variant="brand" size="xl" className="rounded-2xl" asChild>
				<Link to="/app">Home</Link>
			</Button>
		</div>
	)
}
