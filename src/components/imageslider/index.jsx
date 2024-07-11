/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import './style.css';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';

export function ImageSlider({url, limit}) {

    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false)

    async function fetchImages(getUrl){
        try {
            setLoading(true);
            const res = await fetch(`${getUrl}?page=1&limit=${limit}`);
            const data = await res.json();

            if(data){
                setImages(data);
            }
            setLoading(false);

        } catch (error) {
            setError(error)
        }
    }

    function handlePrev(){
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1 );
    }

    function handleNext(){
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
    }

    console.log(currentSlide);

    useEffect(() => {
        if(url !== '') fetchImages(url);
        
    }, [url]);
    console.log(images);

    if(loading){
        return <div>Loading data!! please wait...</div>
    }

    if(error !== null){
        return <div>Error occured {error}</div>
    }

    return(
        <div className='container'>
            <BsArrowLeftCircleFill onClick={handlePrev} className='arrow arrow-left' />
            {
                images && images.length ? 
                images.map((image,index) => (
                    <img key={image.id} 
                    src={image.download_url} 
                    alt={image.auther} 
                    className={currentSlide === index ? 'current-image' : 'current-image hide-current-image'}
                    />
                )) : null
            }
            <BsArrowRightCircleFill onClick={handleNext} className='arrow arrow-right'/>
            <span className="circle-indicators">
                {
                    images && images.length ?
                    images.map((_, index) => (<div 
                    key={index}
                    className={currentSlide === index ? "current-indicator" : "current-indicator hide"}
                    onClick={() => setCurrentSlide(index)}
                    ></div> )) : null 
                }
            </span>
        </div>
    );
}