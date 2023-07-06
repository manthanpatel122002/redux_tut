import React from 'react'
import {parseISO,formatDistanceToNow} from 'date-fns';

const TimeAgo = ({timestamp}) => {
    let timeAgo = ''
    if (timestamp) {
        console.log(timestamp,'timestamp' )
        const date = parseISO(timestamp)
        const timePeriod = formatDistanceToNow(date)
        timeAgo = `${timePeriod} ago`
    }
  return (
    <div>
        <span title={timestamp}>
            &nbsp; <i>{timeAgo}</i>
        </span>
    </div>
  )
}
export default TimeAgo
