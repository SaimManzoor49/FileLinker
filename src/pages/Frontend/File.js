import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { Box, Button, Progress } from '@chakra-ui/react'
import { AiFillFile } from 'react-icons/ai'
import { storage } from '../../config/firebase'
import { getMetadata, ref } from 'firebase/storage'
import dayjs from 'dayjs'
export default function File() {
     
    const [metaData,setMetaData] = useState({})
    const [isUrl,setIsUrl] = useState(true)
    const [isDownloading,setIsDownloading] = useState(false)
    const [progress,setProgress] = useState(0)



    const params = useParams()


        const {url} = params


        const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const alt = queryParams.get('alt');
  const token = queryParams.get('token');


        console.log(url)

        const downloadLink = "https://firebasestorage.googleapis.com/v0/b/filelinkerltd.appspot.com/o/"+ url + '?'+'alt='+alt+'&'+'token='+token
        const fileRef = ref(storage, downloadLink);

  

useEffect(()=>{
    if(url.length<3){
        console.log(isUrl.length)
        setIsUrl(false)
    }

    getMetadata(fileRef)
    .then((metadata) => {
      setMetaData(metadata)
      console.log('metaData:', metadata);
    })
    .catch((error) => {
      console.log('Error getting file metadata:', error);
    });    
},[])




// const handleDownload = async()=>{
// const xhr = new XMLHttpRequest();
// xhr.responseType = 'blob';
// xhr.onload = (event) => {
//   const blob = xhr.response;
//   // Create a temporary download link
//   const downloadLink = document.createElement('a');
//   downloadLink.href = URL.createObjectURL(blob);
//   downloadLink.download = metaData.name; // Specify the desired file name here
//   downloadLink.click();
// };
// let url = downloadLink
// xhr.open('GET', url);
// xhr.send();
// // console.log(url, "<-downloaded");   
//   }






  const handleDownload = async (e) => {
    setIsDownloading(true);

    e.stopPropagation();

    const xhr = new XMLHttpRequest();
    xhr.responseType = "blob";

    xhr.onprogress = (event) => {
      if (event.lengthComputable) {
        const progress = Math.round((event.loaded / event.total) * 100);
        setProgress(progress);
      }
    };

    xhr.onload = (event) => {
      if (xhr.status === 200) {
        setProgress(100);
        setIsDownloading(false);

        const blob = xhr.response;
        const downloadLink = document.createElement("a");
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.download = metaData.name;
        downloadLink.click();
      } else {
        setProgress(0);
        setIsDownloading(false);
      }
    };

    let url = downloadLink;
    xhr.open("GET", url);
    xhr.send();
  };

  return (

    <>
    
    {!isUrl?
<>
<div className="d-flex text-center justify-content-center align-items-center" style={{minHeight:'60vh'}} >
    <h2>No File Found</h2>
    <Link className='link-success border-bottom ms-3 ' to={'/'} >Go to Home➡️</Link>
</div>
</>
    :

    <div className="container">
        <div className="row">
            <div className="col">

                <div className="text-center mt-4" style={{minHeight:'48vh'}} >
                    <div className="d-flex justify-content-center align-items-center">

                <AiFillFile  size={'200px'}  />
                    </div>
                <br />
                <h3>{metaData.name?.split('|')[0]}</h3>
                </div>
                <Box display={{base:'block',sm:'flex'}} className="  justify-content-between align-items-center my-3">
                    <Button className='m-2 m-sm-0'
                    size={'lg'}
                    colorScheme='green'
                    onClick={handleDownload}
                    >Download</Button>


                    <Box  className="card shadow p-4" 
                    w={{base:'',md:''}}
                    >
                        <Box className="d-flex justify-content-between mb-2  " w={{base:'100%',md:'25vw'}}>
                        <h6 className='fw-bold'>Size:</h6>
                            <h6>{metaData.size} Bytes</h6>
                        </Box>
                        <Box className="d-flex justify-content-between  mb-2 " w={{base:'100%',md:'25vw'}}>
                        <h6 className='fw-bold'>Upload date:</h6>
                            <h6>{ dayjs(metaData.timeCreated).format("DD-MM-YYYY")}</h6>
                        </Box>
                        <Box className="d-flex justify-content-between  mb- " w={{base:'100%',md:'25vw'}}>
                        <h6 className='fw-bold'>Type:</h6>
                            <h6>{metaData.contentType}</h6>
                        </Box>

                    </Box>
                </Box>
                {isDownloading && 
                <>
                <div className="text-center"><h6>Downloading: {progress}%</h6></div>
                <Progress hasStripe value={progress} />
                </>}

            </div>
        </div>
    </div>
    }
    
    </>
  )
}
