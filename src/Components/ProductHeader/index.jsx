import './indec.css'
import { FaSort } from "react-icons/fa";


const ProductHeader = (props) => {
    const {sortbyOptions, activeOptionId, updatedActiveOptionId} = props

    const onChangeSortBy = (event) => {
        updatedActiveOptionId(event.target.value)
    }

    return (
        <div className="product-header">
            <h1 className='product-list-heading'>All Products</h1>
            <div className='sort-by-container'>
                <FaSort className='sort-icon'/>
                <p className='sort-by'>Sort by</p>
                <select className='sort-by-select' value={activeOptionId} onChange={onChangeSortBy}>
                    {sortbyOptions.map((eachOption)=>(
                        <option key={eachOption.optionId} className='select-option' value={eachOption.optionId}>{eachOption.displaytext}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default ProductHeader