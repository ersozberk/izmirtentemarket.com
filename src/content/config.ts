import { defineCollection, z } from 'astro:content';

// Mevcut blog koleksiyonunuz
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    heroImage: z.string(),
  }),
});


const productCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(), // SEO için kısa açıklama
    heroImage: z.string(), // Sayfa başlığında kullanılacak ana resim
    features: z.array(z.object({ // Ürünün özellik listesi
        icon: z.string(), // İkon adı (örn: 'sun', 'wind', 'water')
        text: z.string(),
    })),
    gallery: z.array(z.string()), // Ürün galerisi için resim yolları
  }),
});

export const collections = {
  'blog': blogCollection,
  'products': productCollection, // YENİ KOLEKSİYONU BURAYA EKLEYİN
};