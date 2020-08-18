import React from 'react'
import { Button } from 'antd'
import { Card } from 'antd'
import ReactPlayer from 'react-player'
import styled from 'styled-components'

const StyledVideoBoxes = styled.div`
  width: 10em;
  display: flex;
  flex-wrap: wrap;
  justify-content: row;
`
function VideoBoxes (prop) {
  return (
    <div>
      <Card title='Card title' bordered={true} style={{ width: 150 }}>
        <ReactPlayer
          url='https://youtu.be/acDbqaxynQs'
          width={200}
          height={200}
        />
      </Card>
      <Card title='Card title' bordered={true} style={{ width: 150 }}>
        <ReactPlayer
          url='https://youtu.be/acDbqaxynQs'
          width={200}
          height={200}
        />
      </Card>
      <Card title='Card title' bordered={true} style={{ width: 150 }}>
        <ReactPlayer
          url='https://youtu.be/acDbqaxynQs'
          width={200}
          height={200}
        />
      </Card>
      <Card title='Card title' bordered={true} style={{ width: 150 }}>
        <ReactPlayer
          url='https://youtu.be/acDbqaxynQs'
          width={200}
          height={200}
        />
      </Card>
      <Card title='Card title' bordered={true} style={{ width: 150 }}>
        <ReactPlayer
          url='https://youtu.be/acDbqaxynQs'
          width={200}
          height={200}
        />
      </Card>
      <Card title='Card title' bordered={true} style={{ width: 150 }}>
        <ReactPlayer
          url='https://youtu.be/acDbqaxynQs'
          width={200}
          height={200}
        />
      </Card>
    </div>
  )
}

export default VideoBoxes
