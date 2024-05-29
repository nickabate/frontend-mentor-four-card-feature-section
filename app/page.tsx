import Constants from "@/constants";
import Image from "next/image";
import FeatureCard from "@/components/FeatureCard";

export default function Home() {
	return (
		<main className="min-h-screen bg-neutral-30 justify-center lg:flexCenter flex-col pt-6 pb-12">
			<section className="text-center py-12 max-w-[600px] mx-auto">
				<h1 className="text-2xl font-extralight">
					Reliable, efficient delivery
				</h1>
				<h2 className="font-semibold text-2xl mt-2">Powered by Technology</h2>
				<h4 className=" text-lg text-neutral-20 font-extralight my-4">
					Our Artificial Intelligence powered tools use millions of project data
					points to ensure that your project is successful
				</h4>
			</section>
			<section className="flex flex-col lg:flex-row gap-6 justify-center items-center">
				<FeatureCard
					feature={Constants.features[0]}
					borderColor="border-primary-20"
				/>
				<div className="flex flex-col gap-6">
					<FeatureCard
						feature={Constants.features[1]}
						borderColor="border-primary-10"
					/>
					<FeatureCard
						feature={Constants.features[2]}
						borderColor="border-primary-30"
					/>
				</div>
				<FeatureCard
					feature={Constants.features[3]}
					borderColor="border-primary-40"
				/>
			</section>
		</main>
	);
}
