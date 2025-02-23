interface ButtonProps extends React.ComponentProps<"button"> {}

export default function Button(props: ButtonProps) {
	return (
		<button
			className="flex items-center justify-between p-5 h-12 bg-gray-500 text-blue font-semibold rounded-xl w-full cursor-pointer hover:bg-blue hover:text-gray-900 transition-colors duration-300"
			{...props}
		/>
	);
}
