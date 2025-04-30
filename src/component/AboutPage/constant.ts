export const AboutTextVariants = {
    whileHover: {
        color: '#F26051'
    }
}

const AbTitleLgStyle: string = `
    lg:text-[84px]
    lg:text-left
    lg:mb-[14px]
    lg:mb-[14px]
`
const AbTitleSmStyle: string = `
    text-[42px]
    text-center
    mb-[28px]

`
const AbTitleDfStyle: string = `
    text-[#FF2B51]
    font-semibold 
`

export const AboutTitleStyle:string = `${AbTitleDfStyle} ${AbTitleSmStyle} ${AbTitleLgStyle}`

const AbTextLgStyle:string = `
    lg:text-left
    lg:w-[350px]
    lg:mb-[14px]
` 
const AbTextSmStyle:string = `
    text-center
    w-full
    mb-[28px] 
` 
const AbTextDfStyle:string = `
    text-[21px]
    font-light
    tracking-[2px]
` 
export const AboutTextStyle = `${AbTextDfStyle} ${AbTextSmStyle} ${AbTextLgStyle}`

const AbNavigationLgStyle:string = `
     lg:border-0 
     lg:rounded-0  
     lg:p-0
    
`
const AbNavigationSmStyle:string = `
     border-2 
     border-[#F26051] 
     rounded-[35px]  
     p-[14px]
`
const AbNavigationDfStyle:string = `
    cursor-pointer    
`
export const AboutNavigationStyle:string =`${AbNavigationDfStyle} ${AbNavigationSmStyle} ${AbNavigationLgStyle}`