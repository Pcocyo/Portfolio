export interface AnimatedChildProps {
    className?: string;
    children: React.ReactNode;
    key?:number;
    hover: boolean;
    x: [string,string]
    double:boolean
}
export function createChildVariants(x: [string,string]) {
    return (
        {
            idle:{
                x:"0",
                width:'50%'
            },
            Ridle:{
                x:"100%",
                width:'50%'
            },
            animate: {
                x: x,
                transition: {
                    repeat: Infinity,
                    repeatType: "reverse" as "reverse", // Explicitly state the literal type
                    duration: 1,
                    ease: "easeInOut",
                },
            },
            hover: {
                x: '0',
                width: "50%",
                transition: {
                    type: "easeInOut",
                },
            },
            Rhover: {
                x: '100%',
                width: "50%",
                transition: {
                    type: "easeInOut",
                },
            },
            individualHover: {
                scale: 1.1,
                backgroundColor:'#F26051'
            }
        }
    )
}