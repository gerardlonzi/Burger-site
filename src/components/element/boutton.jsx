import React from 'react'

export default function Boutton({themes,children,colors}) {
    let color;
        if(colors == 'maron'){
            color=' bg-amber-950 hover:bg-amber-800'
        }
        else if(colors=='red'){
             color='bg-red-700 hover:bg-red-600'
        }
        else if(colors == 'yellow'){
            color='bg-yellow-600 hover:bg-yellow-500'
        }
       
    

    switch(themes){
        case 'big':
            return <button className={`${color} px-14 py-3  uppercase text-white font-semibold animat`}>{children}</button>
        case 'small':
            return <button className={`${color} px-6 py-1.5  uppercase relative  z-10 text-white font-semibold animat`}>{children}</button>    
        case 'moyen' :
            return <button  className={`${color} px-10 py-2 uppercase text-white font-semibold animat`}>{children}</button>
        default :
        return null    
    }
    

}
