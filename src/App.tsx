// // // // // // // import React from 'react';
// // // // // // // import './styles.css';
// // // // // // // import MOCK_CONTENT from './data/mockContent';  // Assuming you have this file
// // // // // // // import VideoCard from './components/VideoCard'; // Assuming the VideoCard component

// // // // // // // const App: React.FC = () => {
// // // // // // //   return (
// // // // // // //     <div className="app-container">
// // // // // // //       {/* Navigation Bar */}
// // // // // // //       <nav className="navbar">
// // // // // // //         <div className="navbar-logo">
// // // // // // //           <img src="https://via.placeholder.com/150x50" alt="Logo" className="logo" />
// // // // // // //         </div>
// // // // // // //         <div className="navbar-search">
// // // // // // //           <input type="text" placeholder="Search..." className="search-input" />
// // // // // // //         </div>
// // // // // // //         <div className="navbar-login">
// // // // // // //           <button className="login-btn">Login</button>
// // // // // // //         </div>
// // // // // // //       </nav>

// // // // // // //       {/* Banner Section */}
// // // // // // //       <section className="banner">
// // // // // // //         <img
// // // // // // //           src="https://via.placeholder.com/1200x400"
// // // // // // //           alt="Banner"
// // // // // // //           className="banner-image"
// // // // // // //         />
// // // // // // //       </section>

// // // // // // //       {/* Video Content Section */}
// // // // // // //       <div className="video-grid">
// // // // // // //         {MOCK_CONTENT.map((content) => (
// // // // // // //           <VideoCard
// // // // // // //             key={content.id}
// // // // // // //             videoUrl={content.videoUrl}
// // // // // // //             title={content.title}
// // // // // // //             description={content.description}
// // // // // // //             thumbnail={content.thumbnail}
// // // // // // //             author={content.author}
// // // // // // //             duration={content.duration}
// // // // // // //           />
// // // // // // //         ))}
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default App;


// // // // // // import React, { useState } from 'react';
// // // // // // import './styles.css';
// // // // // // import MOCK_CONTENT from './data/mockContent';  // Assuming you have this file
// // // // // // import VideoCard from './components/VideoCard'; // Assuming the VideoCard component

// // // // // // const App: React.FC = () => {
// // // // // //   const [searchQuery, setSearchQuery] = useState<string>(''); // State for search query

// // // // // //   // Filter the videos based on the search query
// // // // // //   const filteredContent = MOCK_CONTENT.filter((content) =>
// // // // // //     content.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // // // // //     content.id.includes(searchQuery) ||
// // // // // //     content.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // // // // //     content.author.name.toLowerCase().includes(searchQuery.toLowerCase()) // Search by author name
// // // // // //   );

// // // // // //   return (
// // // // // //     <div className="app-container">
// // // // // //       {/* Navigation Bar */}
// // // // // //       <nav className="navbar">
// // // // // //         <div className="navbar-logo">
// // // // // //           <img src="https://via.placeholder.com/150x50" alt="Logo" className="logo" />
// // // // // //         </div>
// // // // // //         <div className="navbar-search">
// // // // // //           <input
// // // // // //             type="text"
// // // // // //             placeholder="Search videos by title, id, description, or author"
// // // // // //             className="search-input"
// // // // // //             value={searchQuery}
// // // // // //             onChange={(e) => setSearchQuery(e.target.value)} // Update state as user types
// // // // // //           />
// // // // // //         </div>
// // // // // //         <div className="navbar-login">
// // // // // //           <button className="login-btn">Login</button>
// // // // // //         </div>
// // // // // //       </nav>

// // // // // //       {/* Banner Section */}
// // // // // //       <section className="banner">
// // // // // //         <img
// // // // // //           src="https://via.placeholder.com/1200x400"
// // // // // //           alt="Banner"
// // // // // //           className="banner-image"
// // // // // //         />
// // // // // //       </section>

// // // // // //       {/* Video Content Section */}
// // // // // //       <div className="video-grid">
// // // // // //         {filteredContent.length > 0 ? (
// // // // // //           filteredContent.map((content) => (
// // // // // //             <VideoCard
// // // // // //               key={content.id}
// // // // // //               videoUrl={content.videoUrl}
// // // // // //               title={content.title}
// // // // // //               description={content.description}
// // // // // //               thumbnail={content.thumbnail}
// // // // // //               author={content.author}
// // // // // //               duration={content.duration}
// // // // // //             />
// // // // // //           ))
// // // // // //         ) : (
// // // // // //           <p>No videos found matching your search.</p>
// // // // // //         )}
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default App;


// // // // // // import React, { useState } from 'react';
// // // // // // import './styles.css';
// // // // // // import { MOCK_CONTENT } from './data/mockContent';  // Import the mock content
// // // // // // import VideoCard from './components/VideoCard'; // Assuming the VideoCard component

// // // // // // const App: React.FC = () => {
// // // // // //   const [searchQuery, setSearchQuery] = useState<string>(''); // State for the search query

// // // // // //   // Filter the MOCK_CONTENT based on searchQuery
// // // // // //   const filteredContent = MOCK_CONTENT.filter((content) => {
// // // // // //     return (
// // // // // //       content.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // // // // //       content.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // // // // //       content.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // // // // //       content.author.name.toLowerCase().includes(searchQuery.toLowerCase())
// // // // // //     );
// // // // // //   });

// // // // // //   return (
// // // // // //     <div className="app-container">
// // // // // //       {/* Navigation Bar */}
// // // // // //       <nav className="navbar">
// // // // // //         <div className="navbar-logo">
// // // // // //           <img src="https://via.placeholder.com/150x50" alt="Logo" className="logo" />
// // // // // //         </div>
// // // // // //         <div className="navbar-search">
// // // // // //           <input
// // // // // //             type="text"
// // // // // //             placeholder="Search videos by title, id, description, or author"
// // // // // //             className="search-input"
// // // // // //             value={searchQuery}
// // // // // //             onChange={(e) => setSearchQuery(e.target.value)} // Update state as user types
// // // // // //           />
// // // // // //         </div>
// // // // // //         <div className="navbar-login">
// // // // // //           <button className="login-btn">Login</button>
// // // // // //         </div>
// // // // // //       </nav>

// // // // // //       {/* Banner Section */}
// // // // // //       <section className="banner">
// // // // // //         <img
// // // // // //           src="https://via.placeholder.com/1200x400"
// // // // // //           alt="Banner"
// // // // // //           className="banner-image"
// // // // // //         />
// // // // // //       </section>

// // // // // //       {/* Video Content Section */}
// // // // // //       <div className="video-grid">
// // // // // //         {filteredContent.length > 0 ? (
// // // // // //           filteredContent.map((content) => (
// // // // // //             <VideoCard
// // // // // //               key={content.id}
// // // // // //               videoUrl={content.videoUrl}
// // // // // //               title={content.title}
// // // // // //               description={content.description}
// // // // // //               thumbnail={content.thumbnail}
// // // // // //               author={content.author}
// // // // // //               duration={content.duration}
// // // // // //             />
// // // // // //           ))
// // // // // //         ) : (
// // // // // //           <p>No videos found matching your search.</p> // Message when no video matches
// // // // // //         )}
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default App;



// // // // // import React, { useState } from 'react';
// // // // // import './styles.css';
// // // // // import { MOCK_CONTENT } from './data/mockContent';  // Import the mock content
// // // // // import VideoCard from './components/VideoCard'; // Assuming the VideoCard component

// // // // // const App: React.FC = () => {
// // // // //   const [searchQuery, setSearchQuery] = useState<string>(''); // State for the search query

// // // // //   // Filter the MOCK_CONTENT based on searchQuery
// // // // //   const filteredContent = MOCK_CONTENT.filter((content) => {
// // // // //     return (
// // // // //       content.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // // // //       content.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // // // //       content.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // // // //       content.author.name.toLowerCase().includes(searchQuery.toLowerCase())
// // // // //     );
// // // // //   });

// // // // //   const openVideoInNewTab = (content: any) => {
// // // // //     const videoUrl = `/video/${content.id}`;
// // // // //     const newTab = window.open(videoUrl, '_blank');
// // // // //     if (newTab) {
// // // // //       newTab.document.write(`
// // // // //         <html>
// // // // //           <head>
// // // // //             <title>${content.title}</title>
// // // // //             <style>
// // // // //               body { font-family: Arial, sans-serif; background-color: #111; color: white; text-align: center; }
// // // // //               h1 { color: #ff00ff; }
// // // // //               video { width: 80%; max-width: 800px; margin-top: 20px; }
// // // // //               .video-info { margin-top: 20px; font-size: 1.2rem; color: white; }
// // // // //             </style>
// // // // //           </head>
// // // // //           <body>
// // // // //             <h1>${content.title}</h1>
// // // // //             <video controls autoplay>
// // // // //               <source src="${content.videoUrl}" type="video/mp4" />
// // // // //             </video>
// // // // //             <div class="video-info">
// // // // //               <p>${content.description}</p>
// // // // //               <p>Duration: ${content.duration}</p>
// // // // //               <p>Author: ${content.author.name}</p>
// // // // //             </div>
// // // // //           </body>
// // // // //         </html>
// // // // //       `);
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className="app-container">
// // // // //       {/* Navigation Bar */}
// // // // //       <nav className="navbar">
// // // // //         <div className="navbar-logo">
// // // // //           <img src="https://via.placeholder.com/150x50" alt="Logo" className="logo" />
// // // // //         </div>
// // // // //         <div className="navbar-search">
// // // // //           <input
// // // // //             type="text"
// // // // //             placeholder="Search videos by title, id, description, or author"
// // // // //             className="search-input"
// // // // //             value={searchQuery}
// // // // //             onChange={(e) => setSearchQuery(e.target.value)} // Update state as user types
// // // // //           />
// // // // //         </div>
// // // // //         <div className="navbar-login">
// // // // //           <button className="login-btn">Login</button>
// // // // //         </div>
// // // // //       </nav>

// // // // //       {/* Banner Section */}
// // // // //       <section className="banner">
// // // // //         <img
// // // // //           src="https://via.placeholder.com/1200x400"
// // // // //           alt="Banner"
// // // // //           className="banner-image"
// // // // //         />
// // // // //       </section>

// // // // //       {/* Video Content Section */}
// // // // //       <div className="video-grid">
// // // // //         {filteredContent.length > 0 ? (
// // // // //           filteredContent.map((content) => (
// // // // //             <div key={content.id} className="video-card" onClick={() => openVideoInNewTab(content)}>
// // // // //               <img src={content.thumbnail} alt={content.title} />
// // // // //               <div className="video-card-content">
// // // // //                 <h3>{content.title}</h3>
// // // // //                 <p>{content.description}</p>
// // // // //               </div>
// // // // //             </div>
// // // // //           ))
// // // // //         ) : (
// // // // //           <p>No videos found matching your search.</p> // Message when no video matches
// // // // //         )}
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default App;


// // // // // import React, { useState } from 'react';
// // // // // import './styles.css';
// // // // // import { MOCK_CONTENT } from './data/mockContent'; // Import the mock content

// // // // // const App: React.FC = () => {
// // // // //   const [searchQuery, setSearchQuery] = useState<string>(''); // State for the search query

// // // // //   // Filter the MOCK_CONTENT based on searchQuery
// // // // //   const filteredContent = MOCK_CONTENT.filter((content) => {
// // // // //     return (
// // // // //       content.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // // // //       content.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // // // //       content.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // // // //       content.author.name.toLowerCase().includes(searchQuery.toLowerCase())
// // // // //     );
// // // // //   });

// // // // //   const openVideoInNewTab = (content: any) => {
// // // // //     const newTab = window.open('', '_blank'); // Open a new blank tab
// // // // //     if (newTab) {
// // // // //       newTab.document.write(`
// // // // //         <html>
// // // // //           <head>
// // // // //             <title>${content.title}</title>
// // // // //             <style>
// // // // //               body { font-family: Arial, sans-serif; background-color: #111; color: white; text-align: center; }
// // // // //               h1 { color: #ff00ff; }
// // // // //               video { width: 80%; max-width: 800px; margin-top: 20px; }
// // // // //               .video-info { margin-top: 20px; font-size: 1.2rem; color: white; }
// // // // //             </style>
// // // // //           </head>
// // // // //           <body>
// // // // //             <h1>${content.title}</h1>
// // // // //             <video controls autoplay>
// // // // //               <source src="${content.videoUrl}" type="video/mp4" />
// // // // //             </video>
// // // // //             <div class="video-info">
// // // // //               <p>${content.description}</p>
// // // // //               <p>Duration: ${content.duration}</p>
// // // // //               <p>Author: ${content.author.name}</p>
// // // // //             </div>
// // // // //           </body>
// // // // //         </html>
// // // // //       `);
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className="app-container">
// // // // //       {/* Navigation Bar */}
// // // // //       <nav className="navbar">
// // // // //         <div className="navbar-logo">
// // // // //           <img src="https://via.placeholder.com/150x50" alt="Logo" className="logo" />
// // // // //         </div>
// // // // //         <div className="navbar-search">
// // // // //           <input
// // // // //             type="text"
// // // // //             placeholder="Search videos by title, id, description, or author"
// // // // //             className="search-input"
// // // // //             value={searchQuery}
// // // // //             onChange={(e) => setSearchQuery(e.target.value)} // Update state as user types
// // // // //           />
// // // // //         </div>
// // // // //         <div className="navbar-login">
// // // // //           <button className="login-btn">Login</button>
// // // // //         </div>
// // // // //       </nav>

// // // // //       {/* Banner Section */}
// // // // //       <section className="banner">
// // // // //         <img
// // // // //           src="https://via.placeholder.com/1200x400"
// // // // //           alt="Banner"
// // // // //           className="banner-image"
// // // // //         />
// // // // //       </section>

// // // // //       {/* Video Content Section */}
// // // // //       <div className="video-grid">
// // // // //         {filteredContent.length > 0 ? (
// // // // //           filteredContent.map((content) => (
// // // // //             <div key={content.id} className="video-card" onClick={() => openVideoInNewTab(content)}>
// // // // //               <img src={content.thumbnail} alt={content.title} />
// // // // //               <div className="video-card-content">
// // // // //                 <h3>{content.title}</h3>
// // // // //                 <p>{content.description}</p>
// // // // //               </div>
// // // // //             </div>
// // // // //           ))
// // // // //         ) : (
// // // // //           <p>No videos found matching your search.</p> // Message when no video matches
// // // // //         )}
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default App;



// // // // import React, { useState } from 'react';
// // // // import './styles.css';
// // // // import { MOCK_CONTENT } from './data/mockContent'; // Import the mock content

// // // // const App: React.FC = () => {
// // // //   const [searchQuery, setSearchQuery] = useState<string>(''); // State for the search query

// // // //   // Filter the MOCK_CONTENT based on searchQuery
// // // //   const filteredContent = MOCK_CONTENT.filter((content) => {
// // // //     return (
// // // //       content.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // // //       content.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // // //       content.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // // //       content.author.name.toLowerCase().includes(searchQuery.toLowerCase())
// // // //     );
// // // //   });

// // // //   const openVideoInNewTab = (content: any) => {
// // // //     const newTab = window.open('', '_blank'); // Open a new blank tab
// // // //     if (newTab) {
// // // //       newTab.document.write(`
// // // //         <html>
// // // //           <head>
// // // //             <title>${content.title}</title>
// // // //             <style>
// // // //               body { font-family: Arial, sans-serif; background-color: #111; color: white; text-align: center; }
// // // //               h1 { color: #ff00ff; }
// // // //               video { width: 80%; max-width: 800px; margin-top: 20px; }
// // // //               .video-info { margin-top: 20px; font-size: 1.2rem; color: white; }
// // // //             </style>
// // // //           </head>
// // // //           <body>
// // // //             <h1>${content.title}</h1>
// // // //             <video controls autoplay>
// // // //               <source src="${content.videoUrl}" type="video/mp4" />
// // // //             </video>
// // // //             <div class="video-info">
// // // //               <p>${content.description}</p>
// // // //               <p>Duration: ${content.duration}</p>
// // // //               <p>Author: ${content.author.name}</p>
// // // //             </div>
// // // //           </body>
// // // //         </html>
// // // //       `);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="app-container">
// // // //       {/* Navigation Bar */}
// // // //       <nav className="navbar">
// // // //         <div className="navbar-logo">
// // // //           <img src="https://via.placeholder.com/150x50" alt="Logo" className="logo" />
// // // //         </div>
// // // //         <div className="navbar-search">
// // // //           <input
// // // //             type="text"
// // // //             placeholder="Search videos by title, id, description, or author"
// // // //             className="search-input"
// // // //             value={searchQuery}
// // // //             onChange={(e) => setSearchQuery(e.target.value)} // Update state as user types
// // // //           />
// // // //         </div>
// // // //         <div className="navbar-login">
// // // //           <button className="login-btn">Login</button>
// // // //         </div>
// // // //       </nav>

// // // //       {/* Banner Section */}
// // // //       <section className="banner">
// // // //         <img
// // // //           src="https://via.placeholder.com/1200x400"
// // // //           alt="Banner"
// // // //           className="banner-image"
// // // //         />
// // // //       </section>

// // // //       {/* Video Content Section */}
// // // //       <div className="video-grid">
// // // //         {filteredContent.length > 0 ? (
// // // //           filteredContent.map((content) => (
// // // //             <div key={content.id} className="video-card" onClick={() => openVideoInNewTab(content)}>
// // // //               <video className="video-thumbnail" muted loop>
// // // //                 <source src={content.videoUrl} type="video/mp4" />
// // // //               </video>
// // // //               <div className="video-card-content">
// // // //                 <h3>{content.title}</h3>
// // // //                 <p>{content.description}</p>
// // // //               </div>
// // // //             </div>
// // // //           ))
// // // //         ) : (
// // // //           <p>No videos found matching your search.</p> // Message when no video matches
// // // //         )}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default App;


// // // import React, { useState } from 'react';
// // // import './styles.css';
// // // import { MOCK_CONTENT } from './mockContent'; // Import the mock content

// // // const App: React.FC = () => {
// // //   const [searchQuery, setSearchQuery] = useState<string>(''); // State for the search query

// // //   // Filter the MOCK_CONTENT based on searchQuery
// // //   const filteredContent = MOCK_CONTENT.filter((content) => {
// // //     return (
// // //       content.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // //       content.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // //       content.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // //       content.author.name.toLowerCase().includes(searchQuery.toLowerCase())
// // //     );
// // //   });

// // //   const openVideoInNewTab = (content: any) => {
// // //     const newTab = window.open('', '_blank'); // Open a new blank tab
// // //     if (newTab) {
// // //       newTab.document.write(`
// // //         <html>
// // //           <head>
// // //             <title>${content.title}</title>
// // //             <style>
// // //               body { font-family: Arial, sans-serif; background-color: #111; color: white; text-align: center; }
// // //               h1 { color: #ff00ff; }
// // //               video { width: 80%; max-width: 800px; margin-top: 20px; }
// // //               .video-info { margin-top: 20px; font-size: 1.2rem; color: white; }
// // //             </style>
// // //           </head>
// // //           <body>
// // //             <h1>${content.title}</h1>
// // //             <video controls autoplay>
// // //               <source src="${content.videoUrl}" type="video/mp4" />
// // //             </video>
// // //             <div class="video-info">
// // //               <p>${content.description}</p>
// // //               <p>Duration: ${content.duration}</p>
// // //               <p>Author: ${content.author.name}</p>
// // //             </div>
// // //           </body>
// // //         </html>
// // //       `);
// // //     }
// // //   };

// // //   return (
// // //     <div className="app-container">
// // //       {/* Navigation Bar */}
// // //       <nav className="navbar">
// // //         <div className="navbar-logo">
// // //           <img src="https://via.placeholder.com/150x50" alt="Logo" className="logo" />
// // //         </div>
// // //         <div className="navbar-search">
// // //           <input
// // //             type="text"
// // //             placeholder="Search videos by title, id, description, or author"
// // //             className="search-input"
// // //             value={searchQuery}
// // //             onChange={(e) => setSearchQuery(e.target.value)} // Update state as user types
// // //           />
// // //         </div>
// // //         <div className="navbar-login">
// // //           <button className="login-btn">Login</button>
// // //         </div>
// // //       </nav>

// // //       {/* Banner Section */}
// // //       <section className="banner">
// // //         <img
// // //           src="https://via.placeholder.com/1200x400"
// // //           alt="Banner"
// // //           className="banner-image"
// // //         />
// // //       </section>

// // //       {/* Video Content Section */}
// // //       <div className="video-grid">
// // //         {filteredContent.length > 0 ? (
// // //           filteredContent.map((content) => (
// // //             <div key={content.id} className="video-card" onClick={() => openVideoInNewTab(content)}>
// // //               <div className="video-thumbnail-wrapper">
// // //                 {/* Static Thumbnail */}
// // //                 <img
// // //                   src={content.thumbnail}
// // //                   alt={content.title}
// // //                   className="video-thumbnail"
// // //                 />
// // //                 {/* Video that plays on hover */}
// // //                 <video className="video-preview" muted loop>
// // //                   <source src={content.videoUrl} type="video/mp4" />
// // //                 </video>
// // //               </div>
// // //               <div className="video-card-content">
// // //                 <h3>{content.title}</h3>
// // //                 <p>{content.description}</p>
// // //               </div>
// // //             </div>
// // //           ))
// // //         ) : (
// // //           <p>No videos found matching your search.</p> // Message when no video matches
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default App;


// // // ------

// // import React, { useState } from 'react';
// // import './styles.css';
// // import { MOCK_CONTENT } from './data/mockContent'; // Import the mock content

// // const App: React.FC = () => {
// //   const [searchQuery, setSearchQuery] = useState<string>(''); // State for the search query

// //   // Filter the MOCK_CONTENT based on searchQuery
// //   const filteredContent = MOCK_CONTENT.filter((content) => {
// //     return (
// //       content.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
// //       content.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
// //       content.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
// //       content.author.name.toLowerCase().includes(searchQuery.toLowerCase())
// //     );
// //   });

// //   const openVideoInNewTab = (content: any) => {
// //     const newTab = window.open('', '_blank'); // Open a new blank tab
// //     if (newTab) {
// //       newTab.document.write(`
// //         <html>
// //           <head>
// //             <title>${content.title}</title>
// //             <style>
// //               body { font-family: Arial, sans-serif; background-color: #111; color: white; text-align: center; }
// //               h1 { color: #ff00ff; }
// //               video { width: 80%; max-width: 800px; margin-top: 20px; }
// //               .video-info { margin-top: 20px; font-size: 1.2rem; color: white; }
// //             </style>
// //           </head>
// //           <body>
// //             <h1>${content.title}</h1>
// //             <video controls autoplay>
// //               <source src="${content.videoUrl}" type="video/mp4" />
// //             </video>
// //             <div class="video-info">
// //               <p>${content.description}</p>
// //               <p>Duration: ${content.duration}</p>
// //               <p>Author: ${content.author.name}</p>
// //             </div>
// //           </body>
// //         </html>
// //       `);
// //     }
// //   };

// //   return (
// //     <div className="app-container">
// //       {/* Navigation Bar */}
// //       <nav className="navbar">
// //         <div className="navbar-logo">
// //           <img src="https://via.placeholder.com/150x50" alt="Logo" className="logo" />
// //         </div>
// //         <div className="navbar-search">
// //           <input
// //             type="text"
// //             placeholder="Search videos by title, id, description, or author"
// //             className="search-input"
// //             value={searchQuery}
// //             onChange={(e) => setSearchQuery(e.target.value)} // Update state as user types
// //           />
// //         </div>
// //         <div className="navbar-login">
// //           <button className="login-btn">Login</button>
// //         </div>
// //       </nav>

// //       {/* Banner Section */}
// //       <section className="banner">
// //         <img
// //           src="https://via.placeholder.com/1200x400"
// //           alt="Banner"
// //           className="banner-image"
// //         />
// //       </section>

// //       {/* Video Content Section */}
// //       <div className="video-grid">
// //         {filteredContent.length > 0 ? (
// //           filteredContent.map((content) => (
// //             <div key={content.id} className="video-card" onClick={() => openVideoInNewTab(content)}>
// //               <div className="video-thumbnail-wrapper">
// //                 {/* Static Thumbnail */}
// //                 <img
// //                   src={content.thumbnail}
// //                   alt={content.title}
// //                   className="video-thumbnail"
// //                 />
// //                 {/* Video that plays on hover */}
// //                 <video className="video-preview" muted loop>
// //                   <source src={content.videoUrl} type="video/mp4" />
// //                 </video>
// //               </div>
// //               <div className="video-card-content">
// //                 <h3>{content.title}</h3>
// //                 <p>{content.description}</p>
// //               </div>
// //             </div>
// //           ))
// //         ) : (
// //           <p>No videos found matching your search.</p> // Message when no video matches
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default App;


// // -------------

// // import React from "react";
// // import { MOCK_CONTENT } from "./data/mockContent";

// // const App: React.FC = () => {
// //   return (
// //     <div className="app-container">
// //       <nav className="navbar">
// //         <div className="navbar-logo">
// //           <img src="/path-to-logo/logo.png" alt="Logo" />
// //         </div>
// //         <div className="navbar-search">
// //           <input type="text" placeholder="Search..." />
// //         </div>
// //         <div className="navbar-login">
// //           <button>Login</button>
// //         </div>
// //       </nav>

// //       <div className="banner">
// //         <img
// //           className="banner-image"
// //           src="https://picsum.photos/1920/400"
// //           alt="Banner"
// //         />
// //       </div>

// //       <div className="video-grid">
// //         {MOCK_CONTENT.map((video) => (
// //           <div className="video-card" key={video.id}>
// //             {/* Thumbnail and Video */}
// //             <img
// //               src={video.thumbnail}
// //               alt={video.title}
// //               className="video-thumbnail"
// //             />
// //             <video
// //               src={video.videoUrl}
// //               loop
// //               muted
// //               className="video-preview"
// //             ></video>

// //             {/* Video Details */}
// //             <div className="video-details">
// //               <h3 className="video-title">{video.title}</h3>
// //               <p className="video-description">{video.description}</p>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default App;

// // ===============

// // import React, { useState } from "react";
// // import { MOCK_CONTENT } from "./data/mockContent";

// // const App: React.FC = () => {
// //   const [searchQuery, setSearchQuery] = useState("");

// //   // Filter videos based on the search query
// //   const filteredContent = MOCK_CONTENT.filter(
// //     (video) =>
// //       video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
// //       video.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
// //       video.author.name.toLowerCase().includes(searchQuery.toLowerCase())
// //   );

// //   return (
// //     <div className="app-container">
// //       {/* Navigation Bar */}
// //       <nav className="navbar">
// //         <div className="navbar-logo">
// //           <img src="/path-to-logo/logo.png" alt="Logo" />
// //         </div>
// //         <div className="navbar-search">
// //           <input
// //             type="text"
// //             placeholder="Search..."
// //             value={searchQuery}
// //             onChange={(e) => setSearchQuery(e.target.value)} // Update search query
// //           />
// //         </div>
// //         <div className="navbar-login">
// //           <button>Login</button>
// //         </div>
// //       </nav>

// //       {/* Banner */}
// //       <div className="banner">
// //         <img
// //           className="banner-image"
// //           src="https://picsum.photos/1920/400"
// //           alt="Banner"
// //         />
// //       </div>

// //       {/* Video Grid */}
// //       <div className="video-grid">
// //         {filteredContent.map((video) => (
// //           <div className="video-card" key={video.id}>
// //             {/* Video Thumbnail and Preview */}
// //             <img
// //               src={video.thumbnail}
// //               alt={video.title}
// //               className="video-thumbnail"
// //             />
// //             <video
// //               src={video.videoUrl}
// //               loop
// //               muted
// //               className="video-preview"
// //             ></video>

// //             {/* Video Details */}
// //             <div className="video-details">
// //               <h3 className="video-title">{video.title}</h3>
// //               <p className="video-description">{video.description}</p>
// //               <p className="video-author">By {video.author.name}</p>
// //             </div>
// //           </div>
// //         ))}
// //         {filteredContent.length === 0 && (
// //           <p style={{ color: "white" }}>No videos match your search.</p>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default App;


// // ========REDIRECT==============


// import React, { useState } from "react";
// import { MOCK_CONTENT } from "./data/mockContent";

// const App: React.FC = () => {
//   const [searchQuery, setSearchQuery] = useState("");

//   // Filter videos based on search query
//   const filteredContent = MOCK_CONTENT.filter(
//     (video) =>
//       video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       video.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       video.author.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   // Function to handle redirection to video details page
//   const handleVideoClick = (videoId: string) => {
//     // Open a new tab with the details page
//     window.open(`/video-details.html?id=${videoId}`, "_blank");
//   };

//   return (
//     <div className="app-container">
//       {/* Navigation Bar */}
//       <nav className="navbar">
//         <div className="navbar-logo">
//           <img src="/path-to-logo/logo.png" alt="Logo" />
//         </div>
//         <div className="navbar-search">
//           <input
//             type="text"
//             placeholder="Search..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//           />
//         </div>
//         <div className="navbar-login">
//           <button>Login</button>
//         </div>
//       </nav>

//       {/* Banner */}
//       <div className="banner">
//         <img
//           className="banner-image"
//           src="https://picsum.photos/1920/400"
//           alt="Banner"
//         />
//       </div>

//       {/* Video Grid */}
//       <div className="video-grid">
//         {filteredContent.map((video) => (
//           <div
//             className="video-card"
//             key={video.id}
//             onClick={() => handleVideoClick(video.id)}
//           >
//             {/* Thumbnail and Preview */}
//             <img src={video.thumbnail} alt={video.title} />
//             <video src={video.videoUrl} loop muted></video>

//             {/* Video Details */}
//             <div className="video-details">
//               <h3>{video.title}</h3>
//               <p>{video.description}</p>
//               <p>By {video.author.name}</p>
//             </div>
//           </div>
//         ))}
//         {filteredContent.length === 0 && (
//           <p style={{ color: "white" }}>No videos match your search.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;


// ==============same page video pop up===================

// import React, { useState } from "react";
// import { MOCK_CONTENT } from "./data/mockContent";

// const App: React.FC = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

//   // Filter videos based on the search query
//   const filteredContent = MOCK_CONTENT.filter(
//     (video) =>
//       video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       video.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       video.author.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   // Handle video selection
//   const handleVideoClick = (videoId: string) => {
//     setSelectedVideo(videoId); // Set the selected video
//   };

//   // Handle back to video list
//   const handleBackToList = () => {
//     setSelectedVideo(null); // Clear selected video
//   };

//   // If a video is selected, show its details
//   if (selectedVideo) {
//     const video = MOCK_CONTENT.find((v) => v.id === selectedVideo);
//     return (
//       <div className="video-details-page">
//         <button onClick={handleBackToList} style={{ marginBottom: "20px" }}>
//           Back to Videos
//         </button>
//         {video && (
//           <>
//             <video
//               src={video.videoUrl}
//               controls
//               autoPlay
//               style={{ width: "100%", maxHeight: "400px" }}
//             />
//             <h1>{video.title}</h1>
//             <p>{video.description}</p>
//             <p>By {video.author.name}</p>
//           </>
//         )}
//       </div>
//     );
//   }

//   return (
//     <div className="app-container">
//       {/* Navigation Bar */}
//       <nav className="navbar">
//         <div className="navbar-logo">
//           <img src="/path-to-logo/logo.png" alt="Logo" />
//         </div>
//         <div className="navbar-search">
//           <input
//             type="text"
//             placeholder="Search..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//           />
//         </div>
//         <div className="navbar-login">
//           <button>Login</button>
//         </div>
//       </nav>

//       {/* Banner */}
//       <div className="banner">
//         <img
//           className="banner-image"
//           src="https://picsum.photos/1920/400"
//           alt="Banner"
//         />
//       </div>

//       {/* Video Grid */}
//       <div className="video-grid">
//         {filteredContent.map((video) => (
//           <div
//             className="video-card"
//             key={video.id}
//             onClick={() => handleVideoClick(video.id)}
//           >
//             {/* Thumbnail */}
//             <img src={video.thumbnail} alt={video.title} />
//             {/* Details */}
//             <div className="video-details">
//               <h3>{video.title}</h3>
//               <p>{video.description}</p>
//               <p>By {video.author.name}</p>
//             </div>
//           </div>
//         ))}
//         {filteredContent.length === 0 && (
//           <p style={{ color: "white" }}>No videos match your search.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;


// =============== hower mess up ================


import React, { useState } from "react";
import { MOCK_CONTENT } from "./data/mockContent";

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [hoveredVideo, setHoveredVideo] = useState<string | null>(null);

  const filteredContent = MOCK_CONTENT.filter(
    (video) =>
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.author.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleVideoClick = (videoId: string) => {
    setSelectedVideo(videoId);
  };

  const handleBackToList = () => {
    setSelectedVideo(null);
  };

  if (selectedVideo) {
    const video = MOCK_CONTENT.find((v) => v.id === selectedVideo);
    return (
      <div className="video-details-page">
        <button onClick={handleBackToList} style={{ marginBottom: "20px" }}>
          Back to Videos
        </button>
        {video && (
          <>
            <video
              src={video.videoUrl}
              controls
              autoPlay
              style={{ width: "100%", maxHeight: "400px" }}
            />
            <h1>{video.title}</h1>
            <p>{video.description}</p>
            <p>By {video.author.name}</p>
          </>
        )}
      </div>
    );
  }

  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="navbar-logo">
          <img src="/path-to-logo/logo.png" alt="Logo" />
        </div>
        <div className="navbar-search">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="navbar-login">
          <button>Login</button>
        </div>
      </nav>
      <div className="banner">
        <img
          className="banner-image"
          src="https://picsum.photos/1920/400"
          alt="Banner"
        />
      </div>
      <div className="video-grid">
        {filteredContent.map((video) => (
          <div
            className="video-card"
            key={video.id}
            onClick={() => handleVideoClick(video.id)}
            onMouseEnter={() => setHoveredVideo(video.id)}
            onMouseLeave={() => setHoveredVideo(null)}
          >
            {hoveredVideo === video.id ? (
              <video src={video.videoUrl} autoPlay muted loop></video>
            ) : (
              <img src={video.thumbnail} alt={video.title} />
            )}
            <div className="video-details">
              <h3>{video.title}</h3>
              <p>{video.description}</p>
              <p>By {video.author.name}</p>
            </div>
          </div>
        ))}
        {filteredContent.length === 0 && (
          <p style={{ color: "white" }}>No videos match your search.</p>
        )}
      </div>
    </div>
  );
};

export default App;
