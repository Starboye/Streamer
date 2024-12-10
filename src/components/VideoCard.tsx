// import React from "react";

// type VideoCardProps = {
//   videoUrl: string;
//   title: string;
//   description: string;
//   thumbnail: string;
//   author: {
//     name: string;
//     avatar: string;
//   };
//   duration: string;
// };

// const VideoCard: React.FC<VideoCardProps> = ({
//   videoUrl,
//   title,
//   description,
//   thumbnail,
//   author,
//   duration
// }) => {
//   return (
//     <div className="video-card">
//       {/* Title Above Video */}
//       <h2>{title}</h2>
//       {/* Video Element with Poster as Thumbnail */}
//       <video 
//         src={videoUrl} 
//         controls 
//         className="video-thumbnail" 
//         poster={thumbnail} 
//       />
//       <p>{description}</p>
//       <p><strong>Author: </strong>{author.name}</p>
//       <p><strong>Duration: </strong>{duration}</p>
//       <div>
//         <img src={author.avatar} alt={author.name} className="author-avatar" />
//       </div>
//     </div>
//   );
// };

// export default VideoCard;


import React from "react";

type VideoCardProps = {
  videoUrl: string;
  title: string;
  description: string;
  thumbnail: string;
  author: {
    name: string;
    avatar: string;
  };
  duration: string;
};

const VideoCard: React.FC<VideoCardProps> = ({
  videoUrl,
  title,
  description,
  thumbnail,
  author,
  duration
}) => {
  return (
    <div className="video-card">
      <h3>{title}</h3>
      <video 
        src={videoUrl} 
        controls 
        className="video-thumbnail" 
        poster={thumbnail} 
      />
      <p>{description}</p>
      <p><strong>Author: </strong>{author.name}</p>
      <p><strong>Duration: </strong>{duration}</p>
      <div>
        <img src={author.avatar} alt={author.name} className="author-avatar" />
      </div>
    </div>
  );
};

export default VideoCard;
