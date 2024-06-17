import {defineConfig, isDev} from 'sanity'
import {visionTool} from '@sanity/vision'
import {structureTool} from 'sanity/structure'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'
import {schemaTypes} from './schemaTypes'
import {getStartedPlugin} from './plugins/sanity-plugin-tutorial'


const devOnlyPlugins = [getStartedPlugin()]

export default defineConfig({
  name: 'default',
  title: 'PCRE2024',

  projectId: 'wjh43571',
  dataset: 'production',
  plugins: [structureTool({
    structure: (S, context) => {
      return S.list().title('Content').items([
        S.documentTypeListItem('home'),
        orderableDocumentListDeskItem({
          title: "Speakers",
          type: "speakers",
          S,
          context
        }),
        S.documentTypeListItem('venue'),
        // S.documentTypeListItem('agenda'),
        orderableDocumentListDeskItem({
          title: "Agenda",
          type: "agenda",
          S,
          context
        }),
        S.documentTypeListItem('residents'),
        S.documentTypeListItem('organizers')
      ])
    }
  }), visionTool(), ...(isDev ? devOnlyPlugins : [])],

  schema: {
    types: schemaTypes
  }
})

