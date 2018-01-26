import React from 'react'

const RightArrow = (props) => {
		return (
			<a
				className="arrow"
				onClick={props.onClick}>
				<img
					src="https://s3.amazonaws.com/assets.how2car/images/icons/right-arrow-green.svg"
					alt="Right Arrow"
				/>
			</a>
		)
}

export default RightArrow
