import React from 'react'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import ProductGrid from '../components/ProductGrid'

const ServicesPage = () => (
  <Layout>
    <PageHeader
      title="your local bike shop online!"
      subtitle="See our latest featured products"
      backgroundImage="../../static/images/NShore.jpg"
    />
    <section className="section">
      <div className="container">
        <ProductGrid />
      </div>
    </section>
  </Layout>
)

export default ServicesPage
