import React from 'react'
import requireAuth from '../hoc/requireAuth'

import AdvancedFilterBanner from '../components/common/advancedFilterBanner'

const Pinpoint = () => {
	return (
		<div>
			<AdvancedFilterBanner />
			Pinpoint
		</div>
	)
}

export default requireAuth(Pinpoint)
