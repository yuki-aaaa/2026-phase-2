import { Link } from "react-router"
import { Button } from "~/components/ui/button"
import { loader } from "~/routes/app/api/hello-react-router"


export default function TopPage() {
	return (
		<div className="min-h-screen bg-black">
			<h1 className="text-white">トップページ</h1>
			<div className="text-white">{loader().message}</div>
			<div className="bg-[rgb(255,255,0)] text-[rgb(0,0,255)] text-2xl align-middle px-3 py-1.5 rounded">
				TEST
			</div>
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
