"use client";
import React, { useState } from "react";
import Link from "next/link";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { useTheme } from "next-themes";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-black shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <div>
          <Link href="/">
            <a className="text-xl font-bold text-gray-800 dark:text-gray-100">MyLogo</a>
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <Link href="#home">
            <a className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">Home</a>
          </Link>
          <Link href="#projects">
            <a className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">Projects</a>
          </Link>
          <Link href="#contact">
            <a className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">Contact</a>
          </Link>
        </nav>

        {/* Theme Toggle */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? (
              <RiSunLine className="text-yellow-400" />
            ) : (
              <RiMoonFill className="text-gray-900" />
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
            onClick={handleToggleMenu}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <IoMdClose size={24} /> : <IoMdMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-black shadow-lg">
          <nav className="flex flex-col space-y-4 p-4">
            <Link href="#home">
              <a
                className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
                onClick={handleToggleMenu}
              >
                Home
              </a>
            </Link>
            <Link href="#projects">
              <a
                className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
                onClick={handleToggleMenu}
              >
                Projects
              </a>
            </Link>
            <Link href="#contact">
              <a
                className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
                onClick={handleToggleMenu}
              >
                Contact
              </a>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;




Give advice me, I choose general e-commerce because my model, basically my hacathon website about furniture, In this furniture wb







DAY 1: LAYING THE FOUNDATION FOR YOUR MARKETPLACE JOURNEY
Day 1: Introduction to E-Commerce, Q-Commerce, and
Rental E-Commerce
Welcome to Day 1 of the Marketplace Builder Hackathon 2025! Embark on an exciting
journey where creativity meets technology, enabling you to build and launch your very
own marketplace. This experience is designed to help you master critical concepts and
tools, preparing you to thrive in real-world challenges and opportunities. This is the
starting point of an exciting journey where you'll learn, build, and launch your own
marketplace. By the end of this hackathon, you'll have gained hands-on experience in
designing a fully functional platform, prepared to handle real-world challenges and
opportunities. Today marks the beginning of your journey toward creating a fully
functional, live e-commerce marketplace. This session is designed to lay a robust
foundation by diving deep into the concepts of diƯerent marketplace models,
familiarizing yourself with essential business terminology, and getting started on the
structural blueprint for your project.
Objective
By the end of today, you will:
1. Understand the key diƯerences between e-commerce, q-commerce, and
rental e-commerce.
2. Learn the essential business jargon used in these domains.
3. Define your marketplace type and write down your business goals and initial
ideas.
4. Start brainstorming your data schema on paper and identify core business
entities.
1. What is E-Commerce?
E-commerce (Electronic Commerce) refers to the buying and selling of goods or
services through online platforms. It has revolutionized how businesses operate by
oƯering a virtual storefront accessible to global audiences.
Over the last decade, global e-commerce sales have grown exponentially, with total
sales reaching over $5 trillion in 2021 and projected to exceed $7 trillion by 2025. This
growth is driven by advancements in technology, increasing internet penetration, and
changing consumer preferences for online shopping. The rise of mobile commerce (mcommerce) has further accelerated this trend, making e-commerce accessible
anytime, anywhere.
Key Features of E-Commerce:
PREPARED BY AMEEN ALAM 3
DAY 1: LAYING THE FOUNDATION FOR YOUR MARKETPLACE JOURNEY
 Product Catalog: Displays products with descriptions, images, pricing, and
stock availability.
 Order Fulfillment: Handles the journey of an order from placement to delivery.
 Payment Systems: Facilitates secure transactions via payment gateways (e.g.,
PayPal, Stripe).
 Customer Management: Tracks user data, order history, and preferences.
 Shipment and Tracking: Ensures timely delivery with real-time logistics
updates.
Examples of E-Commerce Businesses:
 General E-Commerce: Amazon, Daraz.
 Niche E-Commerce: Stores specializing in specific categories, like tech gadgets
or handmade crafts.
Why Build an E-Commerce Marketplace?
 Scalability: Scale your business to reach a global audience without
geographical constraints.
 Convenience: Provides customers with a seamless shopping experience.
 Profitability: Leverage online visibility to increase revenue streams through
direct sales and services.
2. What is Q-Commerce?
Q-Commerce (Quick Commerce) is a fast-paced subset of e-commerce focused on
rapid delivery. It addresses urgent consumer needs by oƯering items within a short
timeframe, typically under an hour.
Key Features of Q-Commerce:
 Streamlined Inventory: Focus on high-demand essentials like groceries,
medicine, and snacks.
 Localized Delivery: Operates within small geographical areas to maximize
eƯiciency.
 Optimized Logistics: Uses smart routing and delivery algorithms to reduce
delays.
 Customer Engagement: Provides live order tracking and instant updates to
enhance transparency.
PREPARED BY AMEEN ALAM 4
DAY 1: LAYING THE FOUNDATION FOR YOUR MARKETPLACE JOURNEY
Examples of Q-Commerce Businesses:
 Food Delivery: Foodpanda, Uber Eats.
 Grocery Delivery: Instacart, Airlift.
 Pharmaceutical Delivery: Dawaai.
Impactful Scenarios for Q-Commerce:
 Emergencies: Delivering critical items like medicine or baby formula during
unexpected situations. For example, during a city-wide lockdown, Q-Commerce
platforms ensured timely delivery of essential medicines to patients unable to
visit pharmacies.
 Last-Minute Needs: Catering to urgent requirements such as forgotten
groceries or event supplies. An instance could be a customer realizing they need
a key ingredient for dinner and receiving it within 30 minutes.
 On-Demand Convenience: Supporting busy individuals with rapid access to
essentials without leaving their homes. For example, working professionals can
order snacks or beverages during breaks and have them delivered directly to
their workplace.
Why Build a Q-Commerce Marketplace?
 Consumer Convenience: Meets immediate needs for fast delivery of essentials.
 Competitive Advantage: DiƯerentiates your business from traditional ecommerce.
 Higher Retention Rates: Faster service fosters customer loyalty and repeat
purchases.
3. What is Rental E-Commerce?
Rental E-Commerce focuses on providing consumers with access to products and
services on a rental basis, allowing short-term use instead of outright ownership. This
model is highly sustainable and cost-eƯective.
Key Features of Rental E-Commerce:
 Inventory Management: Tracks product availability and condition.
 Reservation Systems: OƯers booking options for specific dates and times.
 Return Policies: Manages the return process seamlessly.
 Pricing Models: Includes flexible rates like hourly, daily, or weekly fees.
PREPARED BY AMEEN ALAM 5
DAY 1: LAYING THE FOUNDATION FOR YOUR MARKETPLACE JOURNEY
Examples of Rental E-Commerce Businesses:
 Car Rentals: Hertz, Enterprise.
 Event Rentals: Party supplies, wedding decor.
 Equipment Rentals: High-end cameras, construction tools.
Why Build a Rental E-Commerce Marketplace?
 Resource Sharing: Promotes a sustainable model that reduces waste.
 Cost EƯiciency: Provides aƯordable access to expensive products.
 Market Potential: Attracts diverse customers looking for flexible ownership
options.
4. Key Business Jargon to Know
Understanding these terms will enhance your ability to design and manage a
marketplace eƯectively. During the hackathon, you will encounter these terms as you
define product catalogs, calculate customer acquisition costs, or analyze conversion
rates. Mastery of this jargon will help align your technical solutions with core business
objectives. These concepts form the backbone of eƯicient marketplace operations and
decision-making, helping you align technical implementation with business objectives:
Understanding these terms will enhance your ability to design and manage a
marketplace eƯectively:
 SKU (Stock Keeping Unit): Unique identifiers for inventory tracking.
 Sub-SKU: The variety of a product with diƯerent Product Options
 Stock Level: The available quantity of an item in the warehouse. Maintaining
optimal stock levels ensures orders are dispatched without stockouts.
 Warehousing: The process of safely storing goods before distribution.
 Warehouse: A facility for receiving, storing, and tracking goods, including their
locations and storage duration.
 3PL (Third-Party Logistics): Outsourced services managing storage, shipping,
and fulfilment activities for businesses.
 Order Fulfilment: Managing the end-to-end process of delivering orders.
 Delivery SLA (Service Level Agreement): Commitment to a specific delivery
timeframe.
 Churn Rate: The percentage of customers who discontinue using a service.
 Inventory Turnover: The speed at which products are sold and restocked.
 Dynamic Pricing: Adapting prices based on demand, competition, or
availability.
PREPARED BY AMEEN ALAM 6
DAY 1: LAYING THE FOUNDATION FOR YOUR MARKETPLACE JOURNEY
 Customer Acquisition Cost (CAC): The cost associated with acquiring a new
customer.
 Lifetime Value (LTV): The total revenue a business expects to earn from a
customer over their relationship.
 Net Promoter Score (NPS): A metric that measures customer loyalty and
satisfaction.
 Cart Abandonment Rate: The percentage of customers who add items to their
cart but do not complete the purchase.
 Gross Merchandise Value (GMV): The total sales value of merchandise sold
through a marketplace.
 Average Order Value (AOV): The average amount spent per order.
 Retention Rate: The percentage of customers who continue to use your services
over a period.
 Bounce Rate: The percentage of visitors who leave your website without
interacting.
 Conversion Rate: The percentage of visitors who complete a desired action, like
making a purchase.
 Upselling: Encouraging customers to purchase higher-end products or add-ons.
 Cross-Selling: Suggesting related products or services to customers.
 Wholesale Pricing: OƯering products in bulk at discounted rates.
 Markup: The diƯerence between the cost price and selling price of a product.
 Margin: The percentage of profit earned on a product.
 Omnichannel Strategy: A seamless shopping experience across multiple
channels, like online, mobile, and in-store.
 Supply Chain: The network involved in producing and delivering a product to the
customer.
 Drop Shipping: Selling products without holding inventory by shipping directly
from suppliers.
 AƯiliate Marketing: Promoting products and earning a commission for sales
generated through your referrals.
 Landing Page: A standalone web page designed to capture leads or convert
visitors.
 Heatmap Analysis: A visual representation of user interactions on a webpage.
 User Experience (UX): How a user interacts with and experiences a website or
application.
 Personalization: Customizing content, oƯers, or experiences based on user
data.
 Localization: Adapting your marketplace for a specific region or audience.
 Lead Time: The time it takes to fulfill an order from placement to delivery.
 Backorder: Allowing customers to order products that are currently out of stock.
PREPARED BY AMEEN ALAM 7
DAY 1: LAYING THE FOUNDATION FOR YOUR MARKETPLACE JOURNEY
 Flash Sale: A limited-time sale to drive urgency and increase sales.
 Bundling: OƯering multiple products together at a discounted price.
 Customer Segmentation: Dividing customers into groups based on shared
characteristics.
 A/B Testing: Comparing two versions of a webpage or app to determine which
performs better.
 Predictive Analytics: Using data and machine learning to forecast future trends
and behavior.
 Logistics: The planning, execution, and management of transportation and
delivery.
 Reorder Rate: The frequency at which customers make repeat purchases.
 Inventory Shrinkage: Loss of inventory due to theft, damage, or errors.
 Freemium Model: OƯering basic services for free while charging for premium
features.
 SaaS (Software as a Service): A subscription-based software delivery model.
 Net Revenue: Total revenue minus returns, discounts, and allowances.
 SEO (Search Engine Optimization): Optimizing a website to improve its visibility
in search engine results.
 PPC (Pay-Per-Click): An advertising model where advertisers pay for each click
on their ads.
 ROAS (Return on Advertising Spend): A metric to measure the eƯectiveness of
advertising campaigns.
 Shipping Zones: Geographic areas where specific shipping rates and rules
apply.
 White-Labeling: Selling products or services under your own brand while
another company produces them.
 Dark Store: A warehouse set up for online order fulfillment instead of in-store
shopping.
 Smart Inventory: Using data and AI to optimize inventory levels and reduce
waste.
 Zero Inventory Model: A model where businesses hold no stock, relying entirely
on third-party suppliers.
 Minimum Viable Product (MVP): The simplest version of a product that meets
the needs of early adopters and provides feedback for future development.
 Profit Margin: The percentage of revenue that exceeds the cost of production.
 Business-to-Business (B2B): Transactions between businesses, such as
wholesalers selling to retailers.
 Business-to-Consumer (B2C): Transactions directly between a business and
consumers.
PREPARED BY AMEEN ALAM 8
DAY 1: LAYING THE FOUNDATION FOR YOUR MARKETPLACE JOURNEY
 Freight Forwarding: A service used to transport goods from one destination to
another using multiple carriers.
 Economic Order Quantity (EOQ): The optimal quantity of stock a business
should order to minimize costs.
 Just-In-Time (JIT) Inventory: A strategy to increase eƯiciency by receiving goods
only as they are needed.
 Payment Gateway: Technology that captures and transfers payment data
securely between the customer and merchant.
 Break-Even Point: The stage where total revenue equals total costs, resulting in
no net loss or gain.
5. Your Task for Day 1
Step 1: Choose Your Marketplace Type
 Options:
o General E-Commerce
o Q-Commerce
o Rental E-Commerce
 Document your choice and describe its primary purpose.
Step 2: Define Your Business Goals
Answer these guiding questions:
 What problem does your marketplace aim to solve?
For example:
o If customers find it hard to get groceries delivered quickly, your
marketplace could solve this by oƯering a Q-Commerce platform for rapid
grocery delivery.
o If people struggle to aƯord expensive tools they only need temporarily,
your marketplace could provide a rental option to make these tools
accessible and aƯordable.
 Who is your target audience?
For example:
o A Q-Commerce platform might target busy professionals in urban areas
who need quick delivery of daily essentials.
o A rental marketplace for party supplies might target event planners or
families organizing special occasions.
PREPARED BY AMEEN ALAM 9
DAY 1: LAYING THE FOUNDATION FOR YOUR MARKETPLACE JOURNEY
 What products or services will you oƯer?
Examples for DiƯerent Marketplaces:
1. General E-Commerce Marketplace:
Products: Electronics, clothing, household items, beauty products,
groceries, etc.
Example: Your marketplace could oƯer a wide range of everyday
products similar to Amazon or Daraz.
2. Q-Commerce Marketplace:
Products: Groceries, medicine, snacks, or urgent items.
Example: A grocery delivery platform providing fresh produce and
packaged goods within 30 minutes.
3. Rental E-Commerce Marketplace:
Services: Short-term rentals of cars, party supplies, cameras, or
construction tools.
Example: A platform where event organizers can rent tables, chairs, and
decorations for weddings or parties.
4. Niche E-Commerce Marketplace:
Products: Specialized items like handmade crafts, eco-friendly products,
or tech gadgets.
Example: An eco-friendly marketplace selling reusable bottles,
biodegradable packaging, and solar-powered devices.
 What will set your marketplace apart (e.g., speed, aƯordability, customization)?
For example:
o Speed: Will your marketplace deliver products faster than competitors
(e.g., within an hour)?
o AƯordability: Will your prices be lower or oƯer better value for money?
o Customization: Will your platform allow users to personalize products or
services according to their preferences?
Step 3: Create a Data Schema
1. Identify the Entities in Your Marketplace:
o Start by listing the main components of your marketplace that interact with
each other. These are the "entities."
Examples include:
 Products: Items available for sale or rent.
 Orders: Records of transactions between customers and your
platform.
PREPARED BY AMEEN ALAM 10
DAY 1: LAYING THE FOUNDATION FOR YOUR MARKETPLACE JOURNEY
 Customers: Individuals or businesses purchasing or renting products.
 Delivery Zones: Areas covered by your logistics or service providers.
 Shipment: Tracks the movement of items from warehouse to
customer.
 Payments: Tracks transactions and payment statuses.
2. Draw Relationships Between Entities:
o Use a diagram to visualize how these entities interact. Below is an enhanced
example:
[Product]
 - ID
 - Name
 - Price
 - Stock
 |
 |
[Order] ---------> [Customer]
 - Order ID - Customer ID
 - Product ID - Name
 - Quantity - Contact Info
 |
 |
[Shipment] <------- [Delivery Zone]
 - Shipment ID - Zone Name
 - Order ID - Coverage Area
 - Status - Assigned Driver
 This example shows:
o Products linked to orders.
o Orders associated with customers.
o Shipments and delivery zones integrated to track logistics.
3. Focus on Key Fields for Each Entity:
o Products:
 ID: Unique identifier for each product.
 Name: Name of the product.
 Price: Cost per unit.
 Stock: Quantity available.
 Category: Classification of the product (e.g., Electronics, Clothing).
 Tags: Keywords for search (e.g., "New Arrival").
PREPARED BY AMEEN ALAM 11
DAY 1: LAYING THE FOUNDATION FOR YOUR MARKETPLACE JOURNEY
o Orders:
 Order ID: Unique identifier for each order.
 Customer Info: Name, contact details, and address.
 Product Details: List of products, quantities, and prices.
 Status: Order status (e.g., Pending, Shipped, Delivered).
 Timestamp: Date and time of order placement.
o Customers:
 Customer ID: Unique identifier.
 Name: Full name of the customer.
 Contact Info: Phone number and email address.
 Address: Delivery address.
 Order History: Past orders placed by the customer.
o Delivery Zones:
 Zone Name: Name or identifier of the delivery zone.
 Coverage Area: List of postal codes or cities served.
 Assigned Drivers: Details of drivers or couriers.
o Shipment:
 Shipment ID: Unique identifier for tracking.
 Order ID: Linked order.
 Status: Current status (e.g., In Transit, Delivered).
 Delivery Date: Expected or actual delivery date.
4. Keep It Simple Yet Comprehensive:
o Avoid overloading your schema with unnecessary details at this stage.
o Focus on capturing the core functionality and key relationships that will drive
your marketplace.
o Ensure the schema is flexible enough to accommodate future growth or
changes.
5. Test Your Schema:
PREPARED BY AMEEN ALAM 12
DAY 1: LAYING THE FOUNDATION FOR YOUR MARKETPLACE JOURNEY
o Cross-check your schema with your marketplace’s business goals.
o Validate if the schema supports critical operations like inventory
management, order tracking, and customer engagement.
Step 4: Submit Your Work
 Take a photo or scan your business goals and data schema. (Deadline:
Thursday, January 16th, 12:00PM.)
 Submission is not required immediately. Instead:
o Post your work on LinkedIn to showcase your progress.
o Keep it for personal reference; we will review it in the next interview.
o Alternatively, create a 'notes' folder in your NextJS Design JAM 2024
hackathon template repository and upload all images there for easy
access.
FAQs
Q1: Can I switch my marketplace type later?
 Yes, but it is recommended to finalize your choice early to streamline your
planning.
Q2: Do I need technical knowledge to create a data schema?
 No, focus on the business logic. Technical implementation comes later.
Q3: What if I have trouble defining my business goals?
 Use the examples provided for inspiration and consult with mentors for clarity.
Q4: Do I need software to create my diagram?
 No, a hand-drawn diagram is suƯicient for now.
 Use paper pencil only
Q5: How detailed should my data schema be?
 Include essential fields for each entity but avoid overcomplicating it at this stage.
End Note
Day 1 is all about understanding your marketplace and laying a strong foundation for the
rest of the hackathon. Today’s activities—choosing your marketplace type, defining
business goals, and creating a data schema—are critical to aligning your technical
implementation with real-world business needs. As you progress through the
hackathon, these initial steps will guide you in building a functional, eƯicient, and
innovative marketplace. Keep your focus on clarity, simplicity, and practicality.
PREPARED BY AMEEN ALAM 13




{
            src: "/images/table.png",
            alt: "table-img",
            name: "Syltherine",
            desc: "Stylish cafe chair",
            price: "Rp 2.500.000",
            oldPrice: "Rp 3.500.000",
          },
          {
            src: "/images/chair.png",
            alt: "chair-img",
            name: "Leviosa",
            desc: "Stylish cafe chair",
            price: "Rp 2.500.000",
          },
          {
            src: "/images/sofa.png",
            alt: "sofa-img",
            name: "Lolito",
            desc: "Luxury big sofa",
            price: "Rp 7.000.000",
            oldPrice: "Rp 3.500.000",
          },
          {
            src: "/images/multi-sofa.png",
            alt: "multi-sofa-img",
            name: "Respira",
            desc: "Outdoor bar table and stool",
            price: "Rp 500.000",
          },
          {
            src: "/images/lamp.png",
            alt: "lamp-img",
            name: "Grifo",
            desc: "Night lamp",
            price: "Rp 1.500.000",
          },
          {
            src: "/images/black-sofa.png",
            alt: "black-sofa-img",
            name: "Muggo",
            desc: "Small mug",
            price: "Rp 150.000",
          },
          {
            src: "/images/pic-sofa.png",
            alt: "pic-sofa-img",
            name: "Pingky",
            desc: "Cute bed set",
            price: "Rp 14.000.000",
            oldPrice: "Rp 3.500.000",
          },
          {
            src: "/images/orange-sofa.png",
            alt: "orange-sofa-img",
            name: "Potty",
            desc: "Minimalist flower pot",
            price: "Rp 500.000",
          },