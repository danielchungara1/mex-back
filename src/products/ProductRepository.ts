import { Service } from "typedi";
import Product from "./Product";

@Service()
class ProductRepository {

  private readonly products: Product[] = [
    {
      _id: 1,
      description: 'Mac Apple Pro Retina.',
      price: 999999.99,
      stock: 10,
      imageUrlSm: 'https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP715/SP715-display_mbp_13.jpg',
      imageUrlMd: 'https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP715/SP715-display_mbp_13.jpg',
      imageUrlLg: 'https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP715/SP715-display_mbp_13.jpg',
    },
    {
      _id: 2,
      description: 'Mac Apple Pro Retina2.',
      price: 888888.88,
      stock: 0,
      imageUrlSm: 'https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP715/SP715-display_mbp_13.jpg',
      imageUrlMd: 'https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP715/SP715-display_mbp_13.jpg',
      imageUrlLg: 'https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP715/SP715-display_mbp_13.jpg',
    },
    {
      _id: 3,
      description: 'Mac Apple Pro Retina2.',
      price: 888888.88,
      stock: 0,
      imageUrlSm: 'https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP715/SP715-display_mbp_13.jpg',
      imageUrlMd: 'https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP715/SP715-display_mbp_13.jpg',
      imageUrlLg: 'https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP715/SP715-display_mbp_13.jpg',
    },
    {
      _id: 4,
      description: 'Mac Apple Pro Retina2.',
      price: 888888.88,
      stock: 0,
      imageUrlSm: 'https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP715/SP715-display_mbp_13.jpg',
      imageUrlMd: 'https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP715/SP715-display_mbp_13.jpg',
      imageUrlLg: 'https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP715/SP715-display_mbp_13.jpg',
    },
    {
      _id: 5,
      description: 'Mac Apple Pro Retina2.',
      price: 888888.88,
      stock: 0,
      imageUrlSm: 'https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP715/SP715-display_mbp_13.jpg',
      imageUrlMd: 'https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP715/SP715-display_mbp_13.jpg',
      imageUrlLg: 'https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP715/SP715-display_mbp_13.jpg',
    },
    {
      _id: 6,
      description: 'Mac Apple Pro Retina2.',
      price: 888888.88,
      stock: 0,
      imageUrlSm: 'https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP715/SP715-display_mbp_13.jpg',
      imageUrlMd: 'https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP715/SP715-display_mbp_13.jpg',
      imageUrlLg: 'https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP715/SP715-display_mbp_13.jpg',
    },
    {
      _id: 7,
      description: 'Mac Apple Pro Retina2.',
      price: 888888.88,
      stock: 0,
      imageUrlSm: 'https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP715/SP715-display_mbp_13.jpg',
      imageUrlMd: 'https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP715/SP715-display_mbp_13.jpg',
      imageUrlLg: 'https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP715/SP715-display_mbp_13.jpg',
    },
    {
      _id: 8,
      description: 'Mac Apple Pro Retina2.',
      price: 888888.88,
      stock: 0,
      imageUrlSm: 'https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP715/SP715-display_mbp_13.jpg',
      imageUrlMd: 'https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP715/SP715-display_mbp_13.jpg',
      imageUrlLg: 'https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP715/SP715-display_mbp_13.jpg',
    },
    {
      _id: 9,
      description: 'Mac Apple Pro Retina2.',
      price: 888888.88,
      stock: 0,
      imageUrlSm: 'https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP715/SP715-display_mbp_13.jpg',
      imageUrlMd: 'https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP715/SP715-display_mbp_13.jpg',
      imageUrlLg: 'https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP715/SP715-display_mbp_13.jpg',
    },
    {
      _id: 10,
      description: 'Mac Apple Pro Retina2.',
      price: 888888.88,
      stock: 0,
      imageUrlSm: 'https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP715/SP715-display_mbp_13.jpg',
      imageUrlMd: 'https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP715/SP715-display_mbp_13.jpg',
      imageUrlLg: 'https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP715/SP715-display_mbp_13.jpg',
    },
    {
      _id: 11,
      description: 'Mac Apple Pro Retina2.',
      price: 888888.88,
      stock: 0,
      imageUrlSm: 'https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP715/SP715-display_mbp_13.jpg',
      imageUrlMd: 'https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP715/SP715-display_mbp_13.jpg',
      imageUrlLg: 'https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP715/SP715-display_mbp_13.jpg',
    }
  ];

  async getAll(): Promise<Product[]> {
    return this.products;
  }
}

export default ProductRepository;
