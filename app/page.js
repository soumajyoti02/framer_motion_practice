import Image from "next/image";
import Hero from "./components/Hero";
import PageWrapper from "./page-wrapper";

export default function Home() {
	return (
		<>
			<PageWrapper>
				<Hero />
			</PageWrapper>
		</>
	);
}
