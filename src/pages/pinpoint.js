import React from 'react'
import requireAuth from '../hoc/requireAuth'

import AdvancedFilterBanner from '../components/common/advancedFilterBanner'
import ResultsCarousel from '../containers/pinpoint/resultsCarousel'

const Pinpoint = () => {
	return (
		<div>
			<AdvancedFilterBanner />
			<ResultsCarousel priceRange={'$14,000 - $15,000'}/>
			<ResultsCarousel priceRange={'$15,000 - $16,000'}/>
			<ResultsCarousel priceRange={'$16,000 - $17,000'}/>
		</div>
	)
}

// export default requireAuth(Pinpoint)

export default Pinpoint
