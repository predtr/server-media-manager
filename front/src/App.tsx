import 'semantic-ui-css/semantic.min.css'
import { Container, Menu, MenuItem } from 'semantic-ui-react'
import { DownloadFileBrowse } from '@components/DownloadFileBrowse/DownloadFileBrowse.tsx'

function App() {
  return (
    <Container fluid>
      <Menu inverted>
        <MenuItem
          name='home'
        />
        <MenuItem
          name='messages'
        />
        <MenuItem
          name='friends'
        />
      </Menu>
      <DownloadFileBrowse/>
    </Container>
  )
}

export default App
