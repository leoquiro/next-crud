interface ButtonProps {
    colour?: 'green' | 'blue' | 'gray'
    className?: string
    children: any
    onClick?: () => void
}

export default function Button(props: ButtonProps) {
    const colour = props.colour ?? 'gray'
    return (
        <button onClick={props.onClick} className={`
            bg-gradient-to-r from-${colour}-400 to-${colour}-700
            text-white px-4 py-2 rounded-md 
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}