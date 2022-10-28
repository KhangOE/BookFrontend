import { useState } from "react"

import {NavLink} from 'react-router-dom'
//import { Link } from "react-router-dom"

const SideBarList = [
      {
        name:'Dashboard',
        link:'/#',
        icon:123
      },
       {
      name:'Kaban',
      link:'/#',
      icon:123
    },
     {
      name:'Inbox',
      link:'/#',
      icon:123
    },
     {
      name:'User',
      link:'/#',
      icon:123
    },
     {
      name:"Product",
      link:'/#',
      icon:123
    },
     {
      name:'Sign In',
      link:'/#',
      icon:123
    },
     {
      name:"Sign Up",
      link:'/#',
      icon:123
    },
     {
      name:"Upgrade to Pro",
      link:'/#',
      icon:123
    },
     {
      name:'Document',
      link:'/#',
      icon:123
    },
     {
      name:'Conponent',
      link:'/#',
      icon:123
    },
     {
      name:'Help',
      link:'/#',
      icon:123
    },

  ]
 


export const AdminSide = ()=> {
    const [site,setSite] = useState('')

    return <>
      <aside className="w-48" aria-label="Sidebar">
        <div className="overflow-y-auto py-4 px-3 bg-white rounded dark:bg-gray-800">
          <ul className="space-y-2">
            {SideBarList.map(item => {
    
              return (<>
              <NavLink to="/">
              <li onClick={() => setSite(item.name)} >
              <a style={site === item.name ? {color: "red"} : {}}
                 href="/#" className={` ${site === item.name ? {color: "tex-red"} : {}} flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white bg-white hover:bg-gray-100 dark:hover:bg-gray-700`}>
                <svg aria-hidden="true" className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" /><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" /></svg>
                <span className="ml-3">{item.name}</span>
              </a>
            </li>
            </NavLink>
              </>)
            })}
           
          </ul>
        </div>
      </aside>
    </>
}