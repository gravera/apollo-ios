const themeOptions = require('gatsby-theme-apollo-docs/theme-options');

module.exports = {
  pathPrefix: '/docs/ios',
  plugins: [
    {
      resolve: 'gatsby-theme-apollo-docs',
      options: {
        ...themeOptions,
        root: __dirname,
        subtitle: 'Client (iOS)',
        description: 'A guide to using Apollo with iOS',
        githubRepo: 'apollographql/apollo-ios',
        checkLinksOptions: {
          ignore: [
            '/api/Apollo/README/',
            '/api/ApolloWebSocket/README/',
            '/api/ApolloSQLite/README/'
          ]
        },
        sidebarCategories: {
          null: [
            'index',
            'installation',
            'api-reference'
          ],
          Tutorial: [
            'tutorial/tutorial-introduction',
            'tutorial/tutorial-create-project',
            'tutorial/tutorial-obtain-schema',
            'tutorial/tutorial-execute-query',
            'tutorial/tutorial-query-ui',
            'tutorial/tutorial-pagination',
            'tutorial/tutorial-detail-view'
          ],
          Usage:[
            'downloading-schema',
            'initialization',
            'fetching-queries',
            'mutations',
            'fragments',
            'caching',
            'subscriptions'
          ]
        }
      }
    }
  ]
};
