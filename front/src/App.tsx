import 'semantic-ui-css/semantic.min.css'
import { Menu, MenuItem } from 'semantic-ui-react'
import { DownloadFileBrowse } from '@components/DownloadFileBrowse/DownloadFileBrowse.tsx'

function App() {
  return (
    <>
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
    </>
  )
}

export default App
