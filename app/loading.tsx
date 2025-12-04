'use client';

export default function Loading() {
	return (
		<div className="flex items-center justify-center min-h-screen bg-background">
			<div className="flex items-center gap-4">
				{[0, 1, 2].map((index) => (
					<div
						key={index}
						className="loading-dot w-4 h-4 rounded-full bg-primary"
						style={{
							animationDelay: `${index * 0.2}s`,
						}}
					/>
				))}
			</div>
		</div>
	);
}

