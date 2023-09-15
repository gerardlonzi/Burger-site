import React from 'react'

export default function Boutton({themes,children,colors}) {
    let color;
        if(colors == 'maron'){
            color='bgbutton hover:bg-amber-950 '
        }
        else if(colors=='red'){
             color='bg-red-700 hover:bg-red-600'
        }
        else if(colors == 'yellow'){
            color=' bgbutton-yellow  hover:bg-yellow-600 '
        }
       
    

    switch(themes){
        case 'big':
            return <button className={`${color} px-12 py-3  md:px-16 md:py-4  uppercase text-white font-semibold animat`}>{children}</button>
        case 'small':
            return <button className={`${color} text-sm md:text-lg tracking-widest px-6 py-1.5 md:px-6 md:py-1.5  uppercase relative  z-10 text-white font-medium animat`}>{children}</button>    
        case 'moyen' :
            return <button  className={`${color} px-10 py-2 uppercase text-white font-semibold animat`}>{children}</button>
        default :
        return null    
    }
    

}
