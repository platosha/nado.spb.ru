#= require openlayers3/build/ol.js
#
# 59.9314953 / 30.3620696

# creating the view
view = new ol.View
  center: ol.proj.transform([30.3620696, 59.9514953], 'EPSG:4326', 'EPSG:3857')
  zoom: 11

# creating the map
map = new ol.Map
  layers: [
    new ol.layer.Tile({ source: new ol.source.OSM() })
  ]
  target: 'map'
  controls: ol.control.defaults(attributionOptions: { collapsible: false })
  view: view


# Geolocation marker
markerEl = document.getElementById('user-marker')
marker = new ol.Overlay
  positioning: 'center-center'
  element: markerEl
  stopEvent: false
map.addOverlay(marker)

# LineString to store the different geolocation positions. This LineString
# is time aware.
# The Z dimension is actually used to store the rotation (heading).
positions = new ol.geom.LineString [], ('XYZM')

# Geolocation Control
geolocation = new ol.Geolocation
  projection: view.getProjection(),
  trackingOptions:
    maximumAge: 10000,
    enableHighAccuracy: true,
    timeout: 600000

deltaMean = 500 # the geolocation sampling period mean in ms

# Listen to position changes
geolocation.on 'change', (evt) ->
  position = geolocation.getPosition()
  accuracy = geolocation.getAccuracy()
  heading = geolocation.getHeading() || 0
  speed = geolocation.getSpeed() || 0
  m = Date.now()

  addPosition(position, heading, m, speed)

  coords = positions.getCoordinates()
  len = coords.length
  if len >= 2
    deltaMean = (coords[len - 1][3] - coords[0][3]) / (len - 1)

  # html = [
  #   'Position: ' + position[0].toFixed(2) + ', ' + position[1].toFixed(2),
  #   'Accuracy: ' + accuracy,
  #   'Heading: ' + Math.round(radToDeg(heading)) + '&deg;',
  #   'Speed: ' + (speed * 3.6).toFixed(1) + ' km/h',
  #   'Delta: ' + Math.round(deltaMean) + 'ms'
  # ].join('<br />')
  # document.getElementById('info').innerHTML = html

# geolocation.on 'error', ->
#   alert('geolocation error')
#   # FIXME we should remove the coordinates in positions

# convert radians to degrees
radToDeg = (rad) ->
  return rad * 360 / (Math.PI * 2)
# convert degrees to radians
degToRad = (deg) ->
  return deg * Math.PI * 2 / 360
# modulo for negative values
mod = (n) ->
  return ((n % (2 * Math.PI)) + (2 * Math.PI)) % (2 * Math.PI)

addPosition = (position, heading, m, speed) ->
  x = position[0]
  y = position[1]
  fCoords = positions.getCoordinates()
  previous = fCoords[fCoords.length - 1]
  prevHeading = previous && previous[2]
  if prevHeading
    headingDiff = heading - mod(prevHeading)

    # force the rotation change to be less than 180°
    if Math.abs(headingDiff) > Math.PI
      sign = (headingDiff >= 0) ? 1 : -1
      headingDiff = - sign * (2 * Math.PI - Math.abs(headingDiff))
    heading = prevHeading + headingDiff

  positions.appendCoordinate([x, y, heading, m])

  # only keep the 20 last coordinates
  positions.setCoordinates(positions.getCoordinates().slice(-20));

  # FIXME use speed instead
  if heading && speed
    markerEl.src = 'data/geolocation_marker_heading.png'
  else
    markerEl.src = 'data/geolocation_marker.png'


previousM = 0
# change center and rotation before render
map.beforeRender (map, frameState) ->
  if frameState != null
    # use sampling period to get a smooth transition
    m = frameState.time - deltaMean * 1.5
    m = Math.max(m, previousM)
    previousM = m
    # interpolate position along positions LineString
    c = positions.getCoordinateAtM(m, true)
    view = frameState.viewState
    if c
      view.center = getCenterWithHeading(c, -c[2], view.resolution)
      view.rotation = -c[2]
      marker.setPosition(c)
  return true # Force animation to continue

# recenters the view by putting the given coordinates at 3/4 from the top or
# the screen
getCenterWithHeading = (position, rotation, resolution) ->
  size = map.getSize()
  height = size[1]
  return [
    position[0] - Math.sin(rotation) * height * resolution * 1 / 4
    position[1] + Math.cos(rotation) * height * resolution * 1 / 4
  ]

# postcompose callback
render = ->
  map.render()

# geolocate device
geolocateBtn = document.getElementById('geolocate')
geolocateBtn.addEventListener 'click', ->
  geolocation.setTracking(true) # Start position tracking
  map.on('postcompose', render)
  map.render()
  # disableButtons()

# # simulate device move
# simulationData
# $.getJSON 'data/geolocation-orientation.json', (data) ->
#   simulationData = data.data
# simulateBtn = document.getElementById('simulate')
# simulateBtn.addEventListenerj'click', () ->
#   coordinates = simulationData
#   first = coordinates.shift()
#   simulatePositionChange(first)
#   prevDate = first.timestamp
#   geolocate = ->
#     position = coordinates.shift()
#     return null unless position
#     newDate = position.timestamp
#     simulatePositionChange(position)
#     window.setTimeout ->
#       prevDate = newDate
#       geolocate()
#     , (newDate - prevDate) / 0.5
#   geolocate()
#
#   map.on('postcompose', render)
#   map.render()
#
#   disableButtons()
# , false
#
#
# simulatePositionChange = (position) ->
#   coords = position.coords
#   geolocation.set('accuracy', coords.accuracy)
#   geolocation.set('heading', degToRad(coords.heading))
#   position_ = [coords.longitude, coords.latitude]
#   projectedPosition = ol.proj.transform(position_, 'EPSG:4326', 'EPSG:3857')
#   geolocation.set('position', projectedPosition)
#   geolocation.set('speed', coords.speed)
#   geolocation.dispatchChangeEvent()
#

# disableButtons() ->
#   geolocateBtn.disabled = 'disabled'
#   simulateBtn.disabled = 'disabled'
#
