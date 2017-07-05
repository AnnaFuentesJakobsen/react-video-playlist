/**
 * Simple ES6 Throttle implementation with arguments and context
 *
 * @param callback {Function} - Function to throttle
 * @param [limit=30] {number} - Ms to throttle
 * @param [context=this] - Context to run in
 * @return {Function}
 */
const throttle = ( callback, limit = 30, context = this ) => {
  let
      wait = false,
      timeout;

  return ( ...args ) => {
      if ( !wait ) {
          callback.call( context, ...args );

          wait = true;
          clearTimeout( timeout );

          timeout = setTimeout( function () {
              wait = false;
          }, limit );
      }
  }
};

export default throttle;
