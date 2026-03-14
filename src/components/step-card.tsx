interface StepCardProps {
  number: number;
  title: string;
  description: string;
}

const opacityMap: Record<number, string> = {
  1: "opacity-25",
  2: "opacity-50",
  3: "opacity-75",
  4: "opacity-100",
};

export function StepCard({ number, title, description }: StepCardProps) {
  return (
    <div className="relative flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-gray-200/60 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden">
      {/* Orange accent bar at top */}
      <div className={`absolute top-0 left-0 right-0 h-0.5 bg-wso2-orange ${opacityMap[number] ?? "opacity-100"}`} />

      <div className="relative z-10 w-12 h-12 rounded-full bg-gradient-to-br from-wso2-orange to-wso2-orange-light text-white flex items-center justify-center text-xl font-bold mb-4">
        {number}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
}
