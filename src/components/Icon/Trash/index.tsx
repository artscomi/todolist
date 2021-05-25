import React from "react";

const Trash: React.FC<React.SVGProps<SVGElement>> = (props) => {
  return (
    <svg className={props.className} width="20" height="23">
      <defs />
      <path
        fill="#CE5151"
        d="M10 0a5 5 0 014.9 4.004H19a1 1 0 110 2h-1v13.304A3.7 3.7 0 0114.307 23H5.693A3.7 3.7 0 012 19.308V6.004H1a1 1 0 110-2h4.1A5 5 0 0110 0zm6 6.004H4v13.304A1.7 1.7 0 005.693 21h8.614A1.7 1.7 0 0016 19.308V6.004zm-8 3a1 1 0 011 .999V17a1 1 0 01-2 0v-6.998a1 1 0 011-1zm4 0a1 1 0 011 .999V17a1 1 0 01-2 0v-6.998a1 1 0 011-1zm-2-7a3 3 0 00-2.816 2h5.632a3 3 0 00-2.816-2z"
      />
    </svg>
  );
};

export default Trash;
