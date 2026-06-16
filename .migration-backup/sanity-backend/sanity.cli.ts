import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'yeqmfm1z',
    dataset: 'production'
  },
  deployment: {
    appId: 'vb9wmmx6rqoq9247jp98cbgx',
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/cli#auto-updates
     */
    autoUpdates: true,
  },
})
