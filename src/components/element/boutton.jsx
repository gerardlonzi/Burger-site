import React from 'react'

export default function Boutton({themes,children,colors,className}) {
    let color;
        if(colors == 'maron'){
            color='bgbutton  hover:bg-amber-950 font-bolder text-white '
        }
        else if(colors=='red'){
             color='bg-red-700 hover:bg-red-600'
        }
        else if(colors == 'yellow'){
            color=' bgbutton-yellow   text-black font-bold  hover:bg-yellow-600 '
        }
       
    

    switch(themes){
        case 'big':
            return <button className={`${color} px-12 py-3  md:px-16 md:py-4  uppercase text-white font-semibold animat ${className}`}>{children}</button>
        case 'small':
            return <button className={`${color} tracking-widest px-10 py-2   uppercase relative  z-10  font-medium animat font3 ${className}`}>{children}</button>    
        case 'moyen' :
            return <button  className={`${color} px-10 py-2 uppercase text-white font-semibold animat ${className}`}>{children}</button>
        default :
        return null    
    }
    

    
}
