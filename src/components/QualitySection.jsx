import './QualitySection.scss'

import { QUALITY } from '../lib/constants'

function QualitySection() {
  return (
    <div className='quality-c'>
        <h1>Quality Assurance</h1>
        <hr />
        <p>{QUALITY}</p>
    </div>
  )
}

export default QualitySection