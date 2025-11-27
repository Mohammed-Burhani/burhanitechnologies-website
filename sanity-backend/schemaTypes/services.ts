import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'services',
  title: 'Services',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'serviceIcon',
      title: 'Service Icon',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'serviceImage',
      title: 'Service Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: 'Short Description',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'longDescripiton',
      title: 'Long Description',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'benefitTitle',
      title: 'Benefit Title',
      type: 'string',
    }),
    defineField({
      name: 'benefitDescription',
      title: 'Benefit Description',
      type: 'array',
      of: [{type: 'block'}],
    }),
    // Hero Section
    defineField({
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'text',
      description: 'Short description shown in the hero section',
    }),
    
    // Intro Section
    defineField({
      name: 'introText',
      title: 'Intro Text',
      type: 'array',
      of: [{type: 'block'}],
      description: 'Introduction paragraphs (3 recommended)',
    }),
    
    // Service Offerings Section
    defineField({
      name: 'offeringsTitle',
      title: 'Offerings Section Title',
      type: 'string',
      description: 'Main heading for offerings section',
    }),
    defineField({
      name: 'offeringsDescription',
      title: 'Offerings Section Description',
      type: 'text',
      description: 'Description text for offerings section',
    }),
    defineField({
      name: 'offerings',
      title: 'Service Offerings',
      type: 'array',
      description: 'Interactive service offerings (4 recommended)',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Offering Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'tags',
              title: 'Tags',
              type: 'array',
              of: [{type: 'string'}],
              description: 'Service tags/features (3 recommended)',
            },
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'description',
            },
          },
        },
      ],
    }),
    
    // Credibility Section
    defineField({
      name: 'capabilitiesTitle',
      title: 'Capabilities Section Title',
      type: 'string',
      description: 'Main heading for capabilities section',
    }),
    
    // Social Proof Section
    defineField({
      name: 'socialProofTitle',
      title: 'Social Proof Section Title',
      type: 'string',
      description: 'Main heading for trusted companies section',
    }),
    
    // Case Studies Section
    defineField({
      name: 'caseStudiesTitle',
      title: 'Case Studies Section Title',
      type: 'string',
      description: 'Main heading for case studies section',
    }),
    defineField({
      name: 'caseStudiesDescription',
      title: 'Case Studies Section Description',
      type: 'text',
      description: 'Description text for case studies section',
    }),
    defineField({
      name: 'capabilities',
      title: 'Capabilities',
      type: 'array',
      description: 'Key capabilities and strengths (6 recommended)',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Capability Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'description',
            },
          },
        },
      ],
    }),
    
    // Process/Why Section
    // defineField({
    //   name: 'processTitle',
    //   title: 'Process Section Title',
    //   type: 'string',
    //   description: 'Main heading for the process/why section',
    // }),
    // defineField({
    //   name: 'processHighlights',
    //   title: 'Process Highlights',
    //   type: 'array',
    //   description: 'Key stats/highlights (4 recommended)',
    //   of: [
    //     {
    //       type: 'object',
    //       fields: [
    //         {
    //           name: 'icon',
    //           title: 'Icon/Emoji',
    //           type: 'string',
    //           description: 'Emoji or icon (e.g., ⚡, 👥, 🏆)',
    //         },
    //         {
    //           name: 'text',
    //           title: 'Text',
    //           type: 'string',
    //           validation: (Rule) => Rule.required(),
    //         },
    //       ],
    //       preview: {
    //         select: {
    //           title: 'text',
    //           subtitle: 'icon',
    //         },
    //       },
    //     },
    //   ],
    // }),
    // defineField({
    //   name: 'processContent',
    //   title: 'Process Content',
    //   type: 'array',
    //   of: [{type: 'block'}],
    //   description: 'Detailed process description (3 paragraphs recommended)',
    // }),
    
    // Development Processes Section
    defineField({
      name: 'processesTitle',
      title: 'Processes Section Title',
      type: 'string',
      description: 'Main heading for development processes section',
    }),
    defineField({
      name: 'processesDescription',
      title: 'Processes Section Description',
      type: 'text',
      description: 'Description text for development processes section',
    }),
    defineField({
      name: 'developmentProcesses',
      title: 'Development Processes',
      type: 'array',
      description: 'Software development process steps (6 recommended)',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Process Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'icon',
              title: 'Icon/Emoji',
              type: 'string',
              description: 'Emoji or icon (e.g., 👥, 📋, 🏗️)',
            },
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'icon',
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'icon',
    },
  },
})
