import './index.css';
import './App.css';
import React, {useState, useEffect} from 'react';
import { storage, account } from './appwrite/appwrite.config.js';

function App() {
  
  // States
  const [imageList, setImageList] = useState();
  const [image, setImage] = useState();

  // 1. Upload images to appwrite
  const uploadImage = async (e) => {
    
  };

  // 2. Delete an image
   const deleteImage = async (e, imgId) => {
    
  };


  // 3. Get all images stored 
  const getImageList = async () => {
    
 
  };

  // 4. Download image
  const downloadImage = (e, imgId) => {
    
  };
   
  useEffect(() => {
    getImageList();
  }, []);


  return (
    <div className =" w-full h-auto ">
      <div className="flex flex-col w-full h-1/2 items-center justify-center filter drop-shadow-xl space-y-2 p-4">
        <label className="w-64 flex flex-col items-center px-4 py-6 bg-purple-500 text-blue rounded-lg   tracking-wide uppercase  cursor-pointer hover:bg-blue hover:text-white">
            <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
            </svg>
            <span className="mt-2 text-base leading-normal">Select an image</span>
            <input 
                onChange={(e) => {
                  setImage(e.target.files);
                  }} 
                type='file' className="hidden"
                multiple
            />

        </label>

        <div className="items-start">
          <button className="w-32 px-4 py-4 bg-green-500 rounded-lg" onClick={(e) => uploadImage(e)}>Upload</button>
         
        </div> 
           
      </div>
      
      <div className="w-full ">
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {imageList && imageList.map((img) => {
                    return (
                      <div className = "space-y-2">
                       
                          <div className="w-full bg-white rounded-lg overflow-hidden flex flex-col md:flex-row filter drop-shadow-lg">
                          <div className="w-full h-64">
                              <img className="object-center object-cover w-full h-full" src={storage.getFilePreview(img.$id)} alt="photoman" />
                              <input type="file" />
                          </div>

                          </div>
                        <div className = "flex space-x-16 justify-center">
                          <button className="w-32 px-2 py-4 bg-red-500 rounded-lg" onClick={(e) => deleteImage(e, img.$id)}>Delete</button>
                          <button className="w-32 px-2 py-4 bg-green-500 rounded-lg" onClick={(e) => downloadImage(e, img.$id)}>Download</button>
                        </div>
                        
                      </div>
                      
                    
                    )
                  })}
                    
              </div>
            </section>
        </div>
      
       
    </div>
    

  );
}

export default App;
