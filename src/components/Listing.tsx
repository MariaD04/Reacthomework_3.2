import { ListItem } from "./ListItem"
import { ListingType } from "../types/ListingType"

export const Listing = ({items}: ListingType) => {
  return (
    <div className="item-list">
        {
            items.map( (item) => {
                return (
                    <ListItem 
                        key={item.listing_id}
                        listing_id={item.listing_id}
                        url={item.url}
                        MainImage={item.MainImage}
                        title={item.title}
                        currency_code={item.currency_code}
                        price={item.price}
                        quantity={item.quantity}
                    />
                )
            })
        }
    </div>
  )
}
