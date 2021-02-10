export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60239155821c055849af5e48',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-kpgoe94c',
                  apiId: 'affd910a-1fe4-46fc-b976-4af96fcf2cf3'
                },
                {
                  buildHookId: '602391564f81d34f2fb8c1de',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-atd2bc4s',
                  apiId: 'e5622b5e-c012-4c79-8ed9-251481dbed82'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/paalfredrik/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-atd2bc4s.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
