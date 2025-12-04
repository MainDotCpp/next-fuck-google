'use client';
import { TextShimmer } from "@/components/ui/text-shimmer";
import { SparklesText } from "@/components/ui/sparkles-text";
export default function Loading() {
	return (
		<>
		<TextShimmer className="m-auto text-center" as='div'>Loading...</TextShimmer>
		<SparklesText className="m-auto text-center" text="Loading..."></SparklesText>
		</>
	);
}

