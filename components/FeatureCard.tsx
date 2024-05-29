import Image from "next/image";
import React from "react";

interface featureCardProps {
	feature: {
		title: string;
		description: string;
		imgUrl: string;
		imgAlt: string;
	};
	borderColor: string;
}

const FeatureCard = ({ feature, borderColor }: featureCardProps) => {
	const { title, description, imgUrl, imgAlt } = feature;
	return (
		<div
			className={`bg-white p-6 flex flex-col rounded-t-[4px] rounded-b-lg border-t-[3px] ${borderColor} shadow-xl gap-10 max-w-[350px] lg:max-w-[320px] hover:cursor-pointer transform transition-transform ease-in hover:scale-105`}
		>
			<div className="flex flex-col gap-2">
				<h3 className="font-semibold text-xl">{title}</h3>
				<p className="font-extralight">{description}</p>
			</div>
			<div className="self-end">
				<Image src={imgUrl} alt={imgAlt} width={48} height={48} />
			</div>
		</div>
	);
};

export default FeatureCard;
