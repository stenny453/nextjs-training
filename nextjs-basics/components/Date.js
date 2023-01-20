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
  // const date = parseISO(dateString);
  // return <time dateTime={dateString}>{format(dateString, 'LLLL d, yyyy')}</time>;
  return <b>{ dateString }</b>
}

Date.propTypes = {
  dateString: PropTypes.string
}