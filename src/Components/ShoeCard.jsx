import React from 'react'

const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImage }) => {

  const handleClick = () => {
    if(bigShoeImage !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.)
    }
  }


  return (
    <div className={`border-2 
    rounded-xl 
     ${bigShoeImage === imgURL
        ? 'border-red-500'
        : 'border-transparent'
      } cursor-pointer max-sm:flex-1
       `}>

    </div>
  )
}

export default ShoeCard