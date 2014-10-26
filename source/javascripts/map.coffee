#= require openlayers3/build/ol.js
#= require jquery-1.11.1
#= require compass


zoomIsDefault = true
defaultZoomLevel = 11


# creating the view
view = new ol.View
  center: ol.proj.transform([30.3620696, 59.9514953], 'EPSG:4326', 'EPSG:3857')
  zoom: defaultZoomLevel
window.view = view

# creating the map
map = new ol.Map
  layers: [
    new ol.layer.Tile({ source: new ol.source.OSM() })
  ]
  target: 'map'
  controls: ol.control.defaults(attributionOptions: { collapsible: false })
  view: view
window.map = map


# Geolocation marker
markerEl = document.getElementById('user-marker')
user = {}
user.marker = new ol.Overlay
  positioning: 'center-center'
  element: markerEl
  stopEvent: false
map.addOverlay(user.marker)
window.user = user

$.getJSON '/data.geojson', (data) ->
  for obj in data.features
    el = $('<div class="object-marker"></div>').appendTo('body')[0]
    overlay = new ol.Overlay
      positioning: 'center-center'
      element: el
      stopEvent: false
    map.addOverlay(overlay)
    overlay.setPosition ol.proj.transform(obj.geometry.coordinates, 'EPSG:4326', 'EPSG:3857')

el = $('<div class="object-marker"></div>').appendTo('body')[0]
mk = new ol.Overlay
  positioning: 'center-center'
  element: el
  stopEvent: false
map.addOverlay mk
window.mk = mk


# Geolocation Control
geolocation = new ol.Geolocation
  projection: view.getProjection(),
  trackingOptions:
    maximumAge: 10000,
    enableHighAccuracy: true,
    timeout: 600000
window.geolocation = geolocation


# Listen to position changes
geolocation.on 'change', (evt) ->
  position = geolocation.getPosition()
  accuracy = geolocation.getAccuracy()
  heading = geolocation.getHeading() || 0
  speed = geolocation.getSpeed() || 0
  m = Date.now()

  user.position = position
  user.accuracy = accuracy
  user.heading = heading
  user.speed = speed

  if zoomIsDefault and view.getZoom() == defaultZoomLevel
    view.setZoom 14
    view.
    zoomIsDefault = false

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

# change center and rotation before render
map.beforeRender (map, frameState) ->
  if frameState != null
    viewState = frameState.viewState
    if user.position
      # viewState.center = getCenterWithHeading(user.position, -user.rotation, viewState.resolution)
      viewState.center = user.position
      # viewState.rotation = -user.rotation
      user.marker.setPosition user.position
  return true

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
  geolocateBtn.style.display = 'none'
  # disableButtons()

Compass.init (heading) ->
  if heading != false
    user.rotation = heading
    # view.setRotation heading
