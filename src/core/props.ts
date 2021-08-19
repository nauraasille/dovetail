
export type componentName = 'Text'

export interface props {
    uuid: string;
    name: componentName;
    value: string;
    style: style;
    events: event[];
    fontSize: string;
    textColor: string;
    className: string[];
    [key: string]: any;
}

export interface style extends React.CSSProperties{
    // position: string;
    top: number;
    left: number;
}

export interface event {}

export const Tailwind = {
    fontSize: ['', 'text-xs', 'text-sm', 'text-base', 'text-lg', 'text-xl', 'text-2xl', 'text-3xl', 'text-4xl','text-5xl', 'text-6xl', 'text-7xl', 'text-8xl', 'text-9xl'],
    textColor: [
        "text-transparent",
        "text-current",
        "text-black",
        "text-white",
        "text-gray-50",
        "text-gray-100",
        "text-gray-200",
        "text-gray-300",
        "text-gray-400",
        "text-gray-500",
        "text-gray-600",
        "text-gray-700",
        "text-gray-800",
        "text-gray-900",
        "text-red-50",
        "text-red-100",
        "text-red-200",
        "text-red-300",
        "text-red-400",
        "text-red-500",
        "text-red-600",
        "text-red-700",
        "text-red-800",
        "text-red-900",
        "text-yellow-50",
        "text-yellow-100",
        "text-yellow-200",
        "text-yellow-300",
        "text-yellow-400",
        "text-yellow-500",
        "text-yellow-600",
        "text-yellow-700",
        "text-yellow-800",
        "text-yellow-900",
        "text-green-50",
        "text-green-100",
        "text-green-200",
        "text-green-300",
        "text-green-400",
        "text-green-500",
        "text-green-600",
        "text-green-700",
        "text-green-800",
        "text-green-900",
        "text-blue-50",
        "text-blue-100",
        "text-blue-200",
        "text-blue-300",
        "text-blue-400",
        "text-blue-500",
        "text-blue-600",
        "text-blue-700",
        "text-blue-800",
        "text-blue-900",
        "text-indigo-50",
        "text-indigo-100",
        "text-indigo-200",
        "text-indigo-300",
        "text-indigo-400",
        "text-indigo-500",
        "text-indigo-600",
        "text-indigo-700",
        "text-indigo-800",
        "text-indigo-900",
        "text-purple-50",
        "text-purple-100",
        "text-purple-200",
        "text-purple-300",
        "text-purple-400",
        "text-purple-500",
        "text-purple-600",
        "text-purple-700",
        "text-purple-800",
        "text-purple-900",
        "text-pink-50",
        "text-pink-100",
        "text-pink-200",
        "text-pink-300",
        "text-pink-400",
        "text-pink-500",
        "text-pink-600",
        "text-pink-700",
        "text-pink-800",
        "text-pink-900"
    ]
}
