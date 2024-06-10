export const deskStructure = S =>
  S.list()
    .title('Main')
    .items([
      S.listItem()
        .title('Main')
        .child(
          S.document().title('Main').schemaType('main').documentId('main'),
        ),
      ...S.documentTypeListItems().filter(
        listItem => !['main'].includes(listItem.getId()),
      ),
    ])
