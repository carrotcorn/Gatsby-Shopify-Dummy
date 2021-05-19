import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import { MapPin } from 'react-feather'

let mapkey = ''
if (process.env.GATSBY_NETLIFY_MAP_KEY) {
  mapkey = process.env.GATSBY_NETLIFY_MAP_KEY
}

class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 49.16632022555409,
      lng: -123.17424911011875,
    },
    zoom: 10,
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ 
      height: '30vh', 
      width: '100%', 
      display: 'block',
      // marginRight: 'auto',
      // marginLeft: 'auto'
      
    }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: mapkey }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker lat={49.16632022555409} lng={-123.17424911011875} text={'here we are!'} />
        </GoogleMapReact>
      </div>
    )
  }
}

export default GoogleMap

const Marker = () => {
  return (
    <div style={{ color: 'blue' }}>
      <MapPin />
    </div>
  )
}
