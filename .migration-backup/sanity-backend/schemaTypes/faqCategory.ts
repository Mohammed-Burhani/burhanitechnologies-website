import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'faqCategory',
  title: 'FAQ Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Category Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'e.g., Getting Started, Event Management, Account & Billing',
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
      title: 'Icon (Emoji)',
      type: 'string',
      description: 'Icon emoji (e.g., 📚, 🎯, 💳) - Used as fallback if no image is uploaded',
    }),
    defineField({
      name: 'iconImage',
      title: 'Icon Image',
      type: 'image',
      description: 'Upload an icon image (recommended size: 64x64px). This will be used instead of emoji if provided.',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which this category appears (lower numbers first)',
      validation: (Rule) => Rule.required().min(0),
      initialValue: 0,
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
      description: 'Brief description of this category',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      order: 'order',
      icon: 'icon',
    },
    prepare(selection) {
      const {title, order, icon} = selection
      return {
        title: title,
        subtitle: `Order: ${order}${icon ? ` | ${icon}` : ''}`,
      }
    },
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
  ],
})
