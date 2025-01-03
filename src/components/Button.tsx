import React from "react";


export default function({ children, onClick }:{children: React.ReactNode, onClick: ()=>void}) {
  return (
    <button className="px-3 py-1 border rounded-md bg-blue-500 px" onClick={onClick}>
        {children}
    </button>
  );
}