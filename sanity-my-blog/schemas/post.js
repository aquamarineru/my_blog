export default {
    name: 'post',
    title: 'Post',
    type: 'document',
    groups: [
        {
          name: 'content',
          title: 'content',
        },
        {
          name: 'meta',
          title: 'Meta',
        },
      ],
    fields: [
        {
            name: 'meta_title',
            title: 'Meta Title',
            type: 'string',
            validation: Rule => Rule.required(),
            group: 'meta'
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: Rule => Rule.required(),
            group: 'content'
        },
        {
            name: 'publishedDate',
            type: 'date',
            title: 'Published Date',
            validation: Rule => Rule.required(),
            group: 'content'
        }, 
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            validation: Rule => Rule.required(),
            group: 'content',
            fields: [
                {
                    // The name of this field will be used as a key in the client side as 'alt' 
                    name: 'caption',
                    title: 'Caption',
                    type: 'string',
                    options: {
                        isHighlighted: true
                    }
                },
                {
                    name: 'attribution',
                    title: 'Attribution',
                    type: 'string',
                }
            ]
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            group: 'content',
            validation: Rule => Rule.required(),
            options: {
                source: 'title',
                maxLength: 200, // will be ignored if slugify is set
                slugify: input => input
                                     .toLowerCase()
                                     .replace(/\s+/g, '-')
                                     .slice(0, 200)
              }
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            validation: Rule => Rule.required(),
            group: 'content'
        }, 
        {
            name: 'body',
            title: 'Body content',
            type: 'array',
            validation: Rule => Rule.required(),
            group: 'content',
            of: [
                {
                    type: 'image',
                },
                {
                    type: 'block',
                }
            ]
        }
    ]
}

