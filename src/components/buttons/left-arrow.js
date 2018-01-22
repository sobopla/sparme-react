import React from 'react'

const LeftArrow = (props) => {
		return (
			<a
				className="arrow"
				onClick={props.onClick}>
				<img
					src="https://s3.amazonaws.com/assets.how2car/images/icons/left-arrow-gray.svg"
					alt="Left Arrow"
				/>
			</a>
		)
}

export default LeftArrow
