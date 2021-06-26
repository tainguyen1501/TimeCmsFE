import React from 'react'

export default function Button({text, styleButton='btn-gray', svg, handlerOnClick}) {
    const className = `btn ${styleButton} text-sm inline-flex ml-2 my-1 py-2 px-3 items-center rounded focus:outline-none`
    switch(svg){
        case 'create':
            svg = 'M12 6v6m0 0v6m0-6h6m-6 0H6'
            break;
        case 'edit':
            svg = 'M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z'
            break;
        case 'delete':
            svg = 'M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
            break;
        case 'save':
            svg = 'M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4'
            break;
        case 'search':
            svg = 'M10 18a7.952 7.952 0 004.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0018 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z'
            break;
        default:
            break;
    }
    const Onclick = () =>{
        if(handlerOnClick != null)
            handlerOnClick()
    }
    return (
        <button  className={className} onClick={() => Onclick()}>
            {svg &&
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={svg} />
                </svg>
            }
            <span className="mx-2 font-small">{text}</span>
        </button>
    )
}
