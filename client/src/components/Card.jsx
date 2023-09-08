import React from 'react'

function Card(props) {
    const {phone} = props;

    function handleClick() {
        
    }

    return (
          <li className='cards__item'>
            <button type="button" className='cards__item__link' onClick={handleClick}>
              <figure className='cards__item__pic-wrap' data-category={phone.manufacturer + ' ' + phone.name}>
                <img
                  className='cards__item__img'
                  alt={'Phone Image'}
                  src={'assets/images/'+phone.imageFileName}
                />
                <figcaption>{phone.manufacturer + ' ' + phone.name}</figcaption>
              </figure>
              <div className='cards__item__info'>
                <h5 className='cards__item__text'>{phone.text}</h5>
              </div>
            </button>
          </li>
      );
}

export default Card


// id	1
// name	"Galaxy S7"
// manufacturer	"Samsung"
// description	"Introducing the smartphone your life can not do without, The Samsung Galaxy S7. Packed with features to keep you both productive and entertained, all in a sleek, slim design that fits comfortably in your hand or pocket."
// color	"grey"
// price	209
// imageFileName	"Galaxy_S7.png"
// screen	"5,1 inch Quad-HD"
// processor	"Snapdragon 820"
// ram	4