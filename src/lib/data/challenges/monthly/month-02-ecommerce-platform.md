---
title: "Build a Full-Stack E-Commerce Platform"
description: "Create a complete online store with shopping cart, payment integration, and admin dashboard"
difficulty: "advanced"
estimatedTime: "50-60 hours"
skills: ["Full-Stack Development", "Payment Integration", "State Management", "Database Design", "Security"]
recommendedFor: ["Ruperth", "Jasmine", "Pauline"]
points: 200
tags: ["full-stack", "e-commerce", "payment", "month-2"]
prerequisites: ["Full-stack development", "Database design", "API integration", "Authentication"]
learningObjectives: ["Implement payment systems", "Manage complex state", "Design scalable databases", "Handle transactions", "Build admin dashboards"]
deliverables: ["Complete e-commerce application", "Payment integration", "Admin dashboard", "User authentication", "Order management system"]
---

# Build a Full-Stack E-Commerce Platform

Create a professional e-commerce platform with product management, shopping cart, secure checkout, payment processing, and comprehensive admin dashboard.

## Project Overview

Build a fully functional online store with the following systems:

### Core Systems
1. User Authentication & Authorization
2. Product Catalog Management
3. Shopping Cart System
4. Checkout & Payment Processing
5. Order Management
6. Admin Dashboard
7. Search & Filtering
8. Review & Rating System

### Technical Stack

**Frontend:**
- React/Next.js or SvelteKit
- TailwindCSS
- TypeScript
- Redux/Zustand for state management

**Backend:**
- Node.js with Express
- PostgreSQL
- Redis (caching & sessions)
- JWT Authentication

**Payment:**
- Stripe or PayPal integration

**Storage:**
- AWS S3 or Cloudinary for images

**Deployment:**
- Vercel (Frontend)
- Railway/Render (Backend)
- AWS RDS (Database)

## Database Schema
```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    phone VARCHAR(20),
    role VARCHAR(20) DEFAULT 'customer',
    is_verified BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE addresses (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    address_line1 VARCHAR(255) NOT NULL,
    address_line2 VARCHAR(255),
    city VARCHAR(100) NOT NULL,
    state VARCHAR(100),
    postal_code VARCHAR(20) NOT NULL,
    country VARCHAR(100) NOT NULL,
    is_default BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL,
    slug VARCHAR(100) UNIQUE NOT NULL,
    description TEXT,
    image_url TEXT,
    parent_id INTEGER REFERENCES categories(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    compare_at_price DECIMAL(10, 2),
    cost_price DECIMAL(10, 2),
    sku VARCHAR(100) UNIQUE,
    barcode VARCHAR(100),
    stock_quantity INTEGER DEFAULT 0,
    low_stock_threshold INTEGER DEFAULT 10,
    weight DECIMAL(10, 2),
    dimensions JSONB,
    is_active BOOLEAN DEFAULT TRUE,
    is_featured BOOLEAN DEFAULT FALSE,
    category_id INTEGER REFERENCES categories(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE product_images (
    id SERIAL PRIMARY KEY,
    product_id INTEGER REFERENCES products(id) ON DELETE CASCADE,
    image_url TEXT NOT NULL,
    alt_text VARCHAR(255),
    position INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE product_variants (
    id SERIAL PRIMARY KEY,
    product_id INTEGER REFERENCES products(id) ON DELETE CASCADE,
    name VARCHAR(100) NOT NULL,
    sku VARCHAR(100) UNIQUE,
    price DECIMAL(10, 2),
    stock_quantity INTEGER DEFAULT 0,
    attributes JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE cart_items (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    product_id INTEGER REFERENCES products(id) ON DELETE CASCADE,
    variant_id INTEGER REFERENCES product_variants(id),
    quantity INTEGER NOT NULL DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(user_id, product_id, variant_id)
);

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    order_number VARCHAR(50) UNIQUE NOT NULL,
    status VARCHAR(50) NOT NULL,
    subtotal DECIMAL(10, 2) NOT NULL,
    tax DECIMAL(10, 2) DEFAULT 0,
    shipping_cost DECIMAL(10, 2) DEFAULT 0,
    discount DECIMAL(10, 2) DEFAULT 0,
    total DECIMAL(10, 2) NOT NULL,
    currency VARCHAR(3) DEFAULT 'USD',
    payment_method VARCHAR(50),
    payment_status VARCHAR(50),
    shipping_address JSONB NOT NULL,
    billing_address JSONB NOT NULL,
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE order_items (
    id SERIAL PRIMARY KEY,
    order_id INTEGER REFERENCES orders(id) ON DELETE CASCADE,
    product_id INTEGER REFERENCES products(id),
    variant_id INTEGER REFERENCES product_variants(id),
    product_name VARCHAR(255) NOT NULL,
    variant_name VARCHAR(100),
    sku VARCHAR(100),
    quantity INTEGER NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    subtotal DECIMAL(10, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    product_id INTEGER REFERENCES products(id) ON DELETE CASCADE,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
    title VARCHAR(255),
    comment TEXT,
    is_verified_purchase BOOLEAN DEFAULT FALSE,
    helpful_count INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(product_id, user_id)
);

CREATE TABLE wishlists (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    product_id INTEGER REFERENCES products(id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(user_id, product_id)
);

CREATE TABLE coupons (
    id SERIAL PRIMARY KEY,
    code VARCHAR(50) UNIQUE NOT NULL,
    description TEXT,
    discount_type VARCHAR(20) NOT NULL,
    discount_value DECIMAL(10, 2) NOT NULL,
    min_purchase_amount DECIMAL(10, 2),
    max_discount_amount DECIMAL(10, 2),
    usage_limit INTEGER,
    used_count INTEGER DEFAULT 0,
    start_date TIMESTAMP,
    end_date TIMESTAMP,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_products_slug ON products(slug);
CREATE INDEX idx_products_category ON products(category_id);
CREATE INDEX idx_orders_user ON orders(user_id);
CREATE INDEX idx_orders_status ON orders(status);
CREATE INDEX idx_reviews_product ON reviews(product_id);
```

## API Endpoints

### Authentication
POST /api/auth/register
POST /api/auth/login
POST /api/auth/logout
POST /api/auth/refresh
POST /api/auth/verify-email
POST /api/auth/forgot-password
POST /api/auth/reset-password

### Products
GET /api/products - Get all products (with pagination, filters)
GET /api/products/:slug - Get product by slug
POST /api/products - Create product (admin)
PUT /api/products/:id - Update product (admin)
DELETE /api/products/:id - Delete product (admin)
GET /api/products/:id/reviews - Get product reviews
POST /api/products/:id/reviews - Add review
GET /api/products/featured - Get featured products
GET /api/products/search - Search products

### Categories
GET /api/categories - Get all categories
GET /api/categories/:slug - Get category by slug
POST /api/categories - Create category (admin)
PUT /api/categories/:id - Update category (admin)
DELETE /api/categories/:id - Delete category (admin)

### Cart
GET /api/cart - Get cart items
POST /api/cart - Add item to cart
PUT /api/cart/:id - Update cart item
DELETE /api/cart/:id - Remove cart item
DELETE /api/cart - Clear cart

### Orders
GET /api/orders - Get user orders
GET /api/orders/:id - Get order details
POST /api/orders - Create order
PUT /api/orders/:id/cancel - Cancel order
GET /api/admin/orders - Get all orders (admin)
PUT /api/admin/orders/:id - Update order status (admin)

### Payment
POST /api/payment/create-intent - Create payment intent
POST /api/payment/confirm - Confirm payment
POST /api/payment/webhook - Handle Stripe webhook

### Admin
GET /api/admin/dashboard - Get dashboard stats
GET /api/admin/customers - Get all customers
GET /api/admin/analytics - Get sales analytics

## Frontend Features

### 1. Home Page
- Hero banner with featured products
- Category showcase
- New arrivals section
- Best sellers
- Special offers
- Newsletter subscription

### 2. Product Listing Page
- Grid/list view toggle
- Filtering by:
  - Category
  - Price range
  - Brand
  - Rating
  - Availability
- Sorting options
- Pagination
- Quick view modal

### 3. Product Detail Page
- Image gallery with zoom
- Product information
- Variant selection (size, color, etc.)
- Quantity selector
- Add to cart button
- Add to wishlist
- Reviews and ratings
- Related products
- Product specifications

### 4. Shopping Cart
- Cart items list
- Quantity adjustment
- Remove items
- Apply coupon code
- Cart summary
- Continue shopping
- Proceed to checkout

### 5. Checkout Process
- Multi-step checkout:
  - Shipping information
  - Shipping method
  - Payment method
  - Review order
- Guest checkout option
- Address autocomplete
- Order summary sidebar
- Coupon application
- Payment processing

### 6. User Account
- Order history
- Order tracking
- Saved addresses
- Wishlist
- Profile settings
- Password change

### 7. Admin Dashboard
- Sales analytics
- Revenue charts
- Order statistics
- Product management
- Customer management
- Order management
- Inventory tracking
- Reports generation

## Implementation Guide

### State Management Structure
```javascript
// Redux Store Structure
{
  auth: {
    user: {},
    isAuthenticated: false,
    loading: false
  },
  products: {
    items: [],
    loading: false,
    filters: {},
    pagination: {}
  },
  cart: {
    items: [],
    total: 0,
    itemCount: 0
  },
  orders: {
    list: [],
    current: null,
    loading: false
  },
  ui: {
    sidebarOpen: false,
    modalOpen: false
  }
}
```

### Payment Integration (Stripe)
```javascript
// Client-side
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('your-publishable-key');

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { error, paymentIntent } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: 'Customer Name',
          },
        },
      }
    );

    if (error) {
      console.error(error);
    } else if (paymentIntent.status === 'succeeded') {
      // Payment successful
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
}

// Server-side
const stripe = require('stripe')('your-secret-key');

async function createPaymentIntent(amount) {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount * 100,
    currency: 'usd',
    automatic_payment_methods: {
      enabled: true,
    },
  });

  return paymentIntent.client_secret;
}
```

### Order Processing Flow

1. User adds items to cart
2. Proceeds to checkout
3. Enters shipping information
4. Selects shipping method
5. Enters payment information
6. Creates payment intent
7. Confirms payment
8. Creates order in database
9. Reduces product stock
10. Clears cart
11. Sends confirmation email
12. Redirects to order confirmation

## Security Implementation

### Payment Security
- Never store credit card information
- Use Stripe Elements for PCI compliance
- Implement 3D Secure
- Verify webhooks with signatures
- Use HTTPS for all transactions

### Data Protection
- Hash passwords with bcrypt
- Encrypt sensitive data
- Sanitize all inputs
- Implement CSRF protection
- Use parameterized queries

### Order Security
- Verify order ownership
- Validate stock before checkout
- Implement idempotency keys
- Log all transactions
- Monitor for fraud

## Testing Requirements

### Unit Tests
- Product calculations
- Cart operations
- Order processing
- Payment validation

### Integration Tests
- Checkout flow
- Payment processing
- Order creation
- Inventory management

### E2E Tests
- Complete purchase flow
- Admin workflows
- User authentication
- Search and filtering

## Deployment Checklist

- Set up production database
- Configure environment variables
- Set up Stripe webhook endpoint
- Configure email service
- Set up CDN for images
- Implement caching strategy
- Set up monitoring
- Configure backup system
- Test payment processing
- Verify email notifications

## Documentation Requirements

1. API documentation (Swagger)
2. Database schema diagram
3. User manual
4. Admin guide
5. Setup instructions
6. Payment integration guide
7. Deployment guide

## Evaluation Criteria

### Functionality (35%)
- Complete purchase flow
- Payment processing
- Order management
- Admin dashboard

### Security (25%)
- Payment security
- Data protection
- Authentication
- Authorization

### Code Quality (20%)
- Clean architecture
- Best practices
- Error handling
- Testing

### UX/Design (15%)
- Professional design
- Responsive layout
- Intuitive navigation
- Accessibility

### Documentation (5%)
- Complete documentation
- Code comments
- Setup guide

## Bonus Features

**Easy:**
- Product comparison
- Recently viewed products
- Social sharing
- Print invoices

**Medium:**
- Multi-currency support
- Advanced search with Elasticsearch
- Product recommendations
- Abandoned cart recovery

**Hard:**
- Multi-vendor marketplace
- Subscription products
- Advanced analytics
- Mobile app (React Native)

## Timeline

**Week 1-2:** Database, authentication, product catalog
**Week 3-4:** Shopping cart, checkout flow
**Week 5-6:** Payment integration, order management
**Week 7-8:** Admin dashboard, testing, deployment

## Submission

1. GitHub repository
2. Live demo URLs
3. Admin credentials
4. Test payment cards
5. API documentation
6. Video demonstration
7. Project report