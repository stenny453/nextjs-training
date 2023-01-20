import { parseISO, format } from 'date-fns';
import PropTypes from 'prop-types';
/**
 * composant de Date
 * 
 * ## Usage
 * 
 * ```jsx
 * <div>
 *  <Date />
 * </div>
 * ```
 */

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}

Date.propTypes = {
  dateString: PropTypes.string,
  type: PropTypes.oneOf(['a', 'b', 'c', 'd', 'e', 'f'])
}