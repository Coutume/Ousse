import { extend } from 'leaflet/src/core/Util'
import { Simple } from 'leaflet/src/geo/crs/CRS.Simple'
import { toTransformation } from 'leaflet/src/geometry/Transformation'

/**
 * A CRS adapted to our maps, same as the Simple CRS but with Ys
 * from the top to the bottom.
 * @see https://github.com/zDevelopers/ZePS-GUI/blob/cae9dca7c8ad75ac72f5f1dc6b01580484b26093/assets/js/network-map/leaflet-addons.js#L43-L49
 */
export const ZCRS = extend({}, Simple, {
  transformation: toTransformation(1, 0, 1, 0)
})
