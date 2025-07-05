import React from "react";

type AvatarProps = {
  src: string;
  alt?: string;
  size?: string;
};

const Avatar = ({ src, alt = "", size = "w-12" }: AvatarProps) => (
  <div className="avatar">
    <div className={`mask mask-circle ${size}`}> 
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} />
    </div>
  </div>
);

export default Avatar;
