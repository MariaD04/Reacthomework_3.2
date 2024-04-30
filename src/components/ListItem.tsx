import { ListType } from "../types/ListingType"
import cn from 'classnames'

export const ListItem = ({ url, MainImage, title, currency_code, price, quantity }: ListType) => {

    const shortTitle = title && title.length > 50 ? `${title.slice(0, 50)}...` : title;
    const quantityClass = cn('item-quantity', {
        'level-low': quantity <= 10,
        'level-medium': quantity > 10 && quantity <= 20,
        'level-high': quantity > 20
    })

    const determineCurrency = (currency_code: string) => {
      if (currency_code == 'USD') {
        return '$'
      } else if (currency_code == 'EUR') {
        return '€'
      } else {
        return `${currency_code} `
      }
    }
    
    return (
      <div className="item">
          <div className="item-image">
              <a href={url}>
                  {MainImage && MainImage.url_570xN && <img src={MainImage.url_570xN} alt={title}/>}
              </a>
          </div>
          <div className="item-details">
              <p className="item-title">{shortTitle}</p>
              <p className="item-price">{determineCurrency(currency_code)}{price}</p>
              <p className={quantityClass}>{quantity} left</p>
          </div>
      </div>
    )
  }
